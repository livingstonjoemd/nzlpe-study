(function () {
  'use strict';

  // ---------- data ----------
  var CARDS = window.CARDS || [];
  var DRILLS = window.DRILLS || [];
  var SCENARIOS = window.SCENARIOS || [];
  var ESSAYS = window.ESSAYS || [];
  var RUBRIC = window.RUBRIC || [];
  var CITE_KEYS = window.CITE_KEYS || {};
  var REASON = window.REASON || [];
  var REASON_SKILLS = window.REASON_SKILLS || {};
  var byId = {};
  CARDS.forEach(function (c) { byId[c.id] = c; });

  var KEY = 'nzlpe-study-v13-game';
  var OLD_KEY = 'nzlpe-study-v12-game';
  var DAY = 24 * 60 * 60 * 1000;
  // Three-day plan. Box 1: new or missed (due now). Box 2: right once (back in 3 hours).
  // Box 3: right twice, at least 3 hours apart = mastered (back next day). Box 4: right again a day later = locked in.
  var HOUR = 60 * 60 * 1000;
  var INTERVAL_HOURS = [0, 3, 20, 44];
  var MAX_BOX = 4;
  function dueFor(box) { return Date.now() + INTERVAL_HOURS[box - 1] * HOUR; }
  // Scenarios whose wording gives away the card title (removed 20 Nov 2026).
  var LEAKY_SCEN = {s03:1, s08:1, s11:1, s12:1, s14:1, s15:1, s18:1, s20:1, s23:1, s31:1, s37:1, s38:1, s42:1};
  var EXAM_DATE = new Date(2026, 10, 24); // 24 Nov 2026
  // TEST cards whose steps run in a real order (others are checklists).
  var ORDERED = ['1.9', '4.2', '3.7', '6.1', '1.10', '2.7', '3.1', '7.6', '9.7', '2.1'];

  var TYPES = {
    reason: { label: 'Essay reasoning', hint: 'Think through your 12 essay plans: the real question, the thesis, which authority proves which point, the counter, the landing, the traps.' },
    drill: { label: 'Law questions', hint: 'Holdings, tests, sections and splits. Wrong options are real authorities or common slips.' },
    scen: { label: 'Which card applies?', hint: 'New fact patterns, not on any card. Spot the doctrine, as in a problem question.' },
    order: { label: 'Put the test in order', hint: 'Tap the steps of a test in the order you would apply them.' },
    missing: { label: 'Find the missing step', hint: 'One step of a test or checklist is gone. Pick it.' },
    pic: { label: 'Picture warm-up', hint: 'The picture is a memory hook. Name its card.' }
  };
  var MIX_TYPES = ['reason', 'drill', 'scen', 'order', 'missing'];

  var app = document.getElementById('app');
  var state = load();
  var session = null;
  var keyHandler = null;
  var timer = null;

  // ---------- storage ----------
  function blank() {
    return { items: {}, sessions: 0, essays: [], drafts: {}, settings: { size: 15, suit: 'all', hideFlagged: false } };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) return normalise(JSON.parse(raw));
      var old = localStorage.getItem(OLD_KEY);
      if (old) {
        // Fresh start for the rebuilt question bank; keep essays, drafts and settings.
        var o = normalise(JSON.parse(old));
        var b = blank(); b.essays = o.essays; b.drafts = o.drafts; b.settings = o.settings;
        return b;
      }
    } catch (e) { /* use defaults */ }
    return blank();
  }
  function normalise(d) {
    var b = blank();
    if (!d || typeof d !== 'object') return b;
    return {
      items: (d.items && typeof d.items === 'object') ? d.items : {},
      sessions: typeof d.sessions === 'number' ? d.sessions : 0,
      essays: Array.isArray(d.essays) ? d.essays : [],
      drafts: (d.drafts && typeof d.drafts === 'object') ? d.drafts : {},
      settings: Object.assign(b.settings, d.settings || {})
    };
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { alert('Could not save progress in this browser. Export a copy to be safe.'); }
  }
  function rec(key) { return state.items[key] || { box: 1, due: 0, right: 0, wrong: 0 }; }
  function seen(key) { return !!state.items[key]; }

  // ---------- helpers ----------
  function shuffle(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = b[i]; b[i] = b[j]; b[j] = t;
    }
    return b;
  }
  function h(tag, props) {
    var el = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v === null || v === undefined || v === false) return;
        if (k === 'class') el.className = v;
        else if (k === 'text') el.textContent = v;
        else if (k === 'value') el.value = v;
        else if (k.indexOf('on') === 0) el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? '' : v);
      });
    }
    for (var i = 2; i < arguments.length; i++) {
      [].concat(arguments[i]).forEach(function (kid) {
        if (kid === null || kid === undefined || kid === false) return;
        el.appendChild(kid instanceof Node ? kid : document.createTextNode(String(kid)));
      });
    }
    return el;
  }
  function show() {
    stopTimer();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (window.__tarotAudio) { window.__tarotAudio.pause(); window.__tarotAudio = null; }
    app.replaceChildren.apply(app, [].slice.call(arguments));
    window.scrollTo(0, 0);
  }
  function setKeys(fn) {
    if (keyHandler) document.removeEventListener('keydown', keyHandler);
    keyHandler = fn;
    if (fn) document.addEventListener('keydown', fn);
  }
  function backField(c, label) {
    for (var i = 0; i < c.back.length; i++) if (c.back[i][0] === label) return c.back[i][1];
    return '';
  }
  function steps(c) {
    var s = backField(c, 'Steps');
    return s ? s.split(' | ').map(function (x) { return x.trim(); }) : [];
  }
  function cardLabel(id) { var c = byId[id]; return c ? id + '  ' + c.name : id; }
  function imgPath(id) { return 'img/' + id + '.webp'; }
  function daysToExam() {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((EXAM_DATE - today) / DAY);
  }
  function fmtTime(sec) {
    var s = Math.abs(sec), m = Math.floor(s / 60), r = s % 60;
    return (sec < 0 ? '-' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }
  function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }
  function startTimer(el, minutes, onTick) {
    stopTimer();
    var end = Date.now() + minutes * 60000;
    function tick() {
      var left = Math.round((end - Date.now()) / 1000);
      el.textContent = fmtTime(left);
      el.className = 'timer' + (left <= 0 ? ' over' : left < 120 ? ' low' : '');
      if (onTick) onTick(left);
    }
    tick();
    timer = setInterval(tick, 1000);
  }

  // ---------- item bank ----------
  // Every item: key, type, card (for suit filter and feedback), and build() returning a fresh question.
  function allItems() {
    var list = [];
    var spById = {};
    (window.SPREADS || []).forEach(function (sp) { spById[sp.id] = sp; });
    REASON.forEach(function (r) {
      var sp = spById[r.sp];
      if (!sp) return;
      list.push({ key: 'r:' + r.id, type: 'reason', card: sp.intro[0][0], sp: r.sp, spread: sp, src: r });
    });
    DRILLS.forEach(function (d) {
      list.push({ key: 'd:' + d.id, type: 'drill', card: d.c, src: d });
    });
    SCENARIOS.forEach(function (s) {
      if (LEAKY_SCEN[s.id]) return;
      list.push({ key: 's:' + s.id, type: 'scen', card: s.a, src: s });
    });
    CARDS.forEach(function (c) {
      var st = steps(c);
      if (ORDERED.indexOf(c.id) >= 0 && st.length >= 3) list.push({ key: 'o:' + c.id, type: 'order', card: c.id });
      if (st.length >= 4) list.push({ key: 'm:' + c.id, type: 'missing', card: c.id });
    });
    CARDS.forEach(function (c) { list.push({ key: 'p:' + c.id, type: 'pic', card: c.id }); });
    return list;
  }
  var ITEMS = allItems();

  function sameSuitFirst(cardId, pool, n) {
    var suit = byId[cardId].suit;
    var others = pool.filter(function (id) { return id !== cardId; });
    var same = shuffle(others.filter(function (id) { return byId[id].suit === suit; }));
    var diff = shuffle(others.filter(function (id) { return byId[id].suit !== suit; }));
    return same.concat(diff).slice(0, n);
  }

  function buildQuestion(item) {
    var c = byId[item.card];
    if (item.type === 'reason') {
      var r = item.src;
      var rx = r.x || [];
      var ropts = shuffle([{ label: r.a, right: true }].concat(r.w.map(function (t, i) { return { label: t, right: false, note: rx[i] }; })));
      return { lead: 'Essay plan: ' + item.spread.title + '. ' + item.spread.prompt, prompt: r.q,
        tag: (REASON_SKILLS[r.k] || 'Reasoning') + ' · ' + item.spread.title, options: ropts, why: r.why };
    }
    if (item.type === 'drill') {
      var d = item.src;
      var dx = d.x || [];
      var opts = shuffle([{ label: d.a, right: true }].concat(d.w.map(function (t, i) { return { label: t, right: false, note: dx[i] }; })));
      return { prompt: d.q, tag: 'Card ' + d.c + ' · ' + c.name, options: opts, why: d.why };
    }
    if (item.type === 'facts') {
      var casePool = CARDS.filter(function (x) { return backField(x, 'Facts'); }).map(function (x) { return x.id; });
      var ids = shuffle([c.id].concat(sameSuitFirst(c.id, casePool, 3)));
      return {
        lead: backField(c, 'Facts'), prompt: 'Which card do these facts belong to?',
        options: ids.map(function (id) { return { label: byId[id].name, right: id === c.id }; }),
        why: backField(c, 'Held')
      };
    }
    if (item.type === 'scen') {
      var s = item.src;
      var sids = shuffle([s.a].concat(s.w));
      return {
        lead: s.t, prompt: 'Which card governs this?',
        options: sids.map(function (id) { return { label: cardLabel(id), right: id === s.a, note: id === s.a ? null : 'That card answers a different question: ' + byId[id].line }; }),
        why: 'The right card asks: ' + c.line
      };
    }
    if (item.type === 'missing') {
      var st = steps(c);
      var gap = Math.floor(Math.random() * st.length);
      var otherSteps = [];
      CARDS.forEach(function (x) { if (x.id !== c.id) steps(x).forEach(function (t) { otherSteps.push({ t: t, from: x }); }); });
      var opts2 = shuffle([{ label: st[gap], right: true }].concat(shuffle(otherSteps).slice(0, 3).map(function (o) {
        return { label: o.t, right: false, note: 'That step belongs to a different test: ' + o.from.name + '.' };
      })));
      var shown = st.map(function (t, i) { return i === gap ? '______' : t; });
      return { list: shown, prompt: c.name + ': which step is missing?', options: opts2, why: 'Full list: ' + st.join(' → ') };
    }
    if (item.type === 'order') {
      return { order: steps(c), prompt: c.name + ': tap the steps in order.' };
    }
    // pic
    var pids = shuffle([c.id].concat(sameSuitFirst(c.id, CARDS.map(function (x) { return x.id; }), 3)));
    return {
      img: imgPath(c.id), prompt: 'Which card does this picture belong to?',
      options: pids.map(function (id) { return { label: byId[id].name, right: id === c.id, note: id === c.id ? null : 'That card\'s picture is: ' + byId[id].picture }; }),
      why: 'This picture: ' + c.picture
    };
  }

  // ---------- sessions ----------
  function eligible(types, cardFilter) {
    var s = state.settings;
    return ITEMS.filter(function (it) {
      if (types.indexOf(it.type) < 0) return false;
      if (cardFilter && cardFilter.indexOf('sp:') === 0) return it.sp === cardFilter.slice(3);
      if (cardFilter && cardFilter !== it.card) return false;
      var c = byId[it.card];
      if (!cardFilter && s.suit !== 'all' && String(c.suit) !== String(s.suit)) return false;
      if (!cardFilter && s.hideFlagged && c.note) return false;
      return true;
    });
  }
  // Alternate essay reasoning with the other types: R O R O O ...
  function interleave(list) {
    var r = list.filter(function (it) { return it.type === 'reason'; });
    var o = list.filter(function (it) { return it.type !== 'reason'; });
    if (!r.length || !o.length) return list;
    var out = [], pattern = [1, 0, 1, 0, 0], i = 0;
    while (r.length || o.length) {
      var wantR = pattern[i++ % pattern.length];
      if ((wantR && r.length) || !o.length) out.push(r.shift()); else out.push(o.shift());
    }
    return out;
  }
  function startSession(types, title, cardFilter) {
    var p = eligible(types, cardFilter);
    var now = Date.now();
    var due = shuffle(p.filter(function (it) { return rec(it.key).due <= now; }))
      .sort(function (a, b) {
        // Seen-and-failed first, then new, then the rest of the due list.
        var ra = rec(a.key), rb = rec(b.key);
        return (ra.box - rb.box) || ((seen(b.key) ? 1 : 0) - (seen(a.key) ? 1 : 0));
      });
    var later = p.filter(function (it) { return rec(it.key).due > now; })
      .sort(function (a, b) { return rec(a.key).due - rec(b.key).due; });
    var size = cardFilter ? p.length : state.settings.size;
    var practice = !!(arguments[3]);
    if (!due.length && later.length && !practice) {
      var nextAt = new Date(rec(later[0].key).due);
      show(h('div', { class: 'panel' },
          h('h2', { text: 'Nothing due here yet' }),
          h('p', { text: 'Every question in this set is waiting for its next review. The next one is due at ' + nextAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + (nextAt.toDateString() !== new Date().toDateString() ? ' on ' + nextAt.toLocaleDateString([], { weekday: 'long' }) : '') + '. Answering early does not move a question up a box.' }),
          h('div', { class: 'row' },
            h('button', { onclick: function () { startSession(types, title + ' (practice)', cardFilter, true); }, text: 'Practise anyway' }),
            h('button', { class: 'secondary', onclick: renderHome, text: 'Home' }))));
      return;
    }
    var chosen = interleave(practice ? due.concat(later) : due).slice(0, size);
    if (!chosen.length) {
      show(h('div', { class: 'panel', text: 'No questions match these settings. Change the suit or the open-item filter.' }),
        h('button', { class: 'secondary', onclick: renderHome, text: 'Back' }));
      return;
    }
    session = {
      title: title, idx: 0, score: 0, done: false, misses: [],
      items: chosen.map(function (it) { return { item: it, q: buildQuestion(it), answered: false, picked: null, built: [] }; })
    };
    renderQuestion();
  }

  function grade(correct) {
    var cur = session.items[session.idx];
    var key = cur.item.key;
    var r = rec(key);
    var early = correct && seen(key) && r.due > Date.now();
    var box = early ? r.box : (correct ? Math.min(r.box + 1, MAX_BOX) : 1);
    state.items[key] = {
      box: box, due: early ? r.due : dueFor(box),
      right: r.right + (correct ? 1 : 0), wrong: r.wrong + (correct ? 0 : 1)
    };
    cur.early = early;
    if (correct) session.score++; else session.misses.push(cur.item.card);
    cur.answered = true;
    cur.correct = correct;
    save();
    renderQuestion();
  }

  function next() {
    if (session.idx + 1 >= session.items.length) {
      session.done = true;
      state.sessions += 1;
      save();
      renderSummary();
      return;
    }
    session.idx += 1;
    renderQuestion();
  }

  // ---------- question view ----------
  function cardDetail(id, open) {
    var c = byId[id];
    var dl = h('dl', { class: 'detail' });
    c.back.forEach(function (p) {
      dl.appendChild(h('dt', { text: p[0] }));
      dl.appendChild(p[0] === 'Steps'
        ? h('dd', null, h('ol', { class: 'steplist' }, p[1].split(' | ').map(function (t) { return h('li', { text: t }); })))
        : h('dd', { text: p[1] }));
    });
    return h('details', { class: 'carddetail', open: open ? true : null },
      h('summary', { text: 'Card ' + c.id + ': ' + c.name + ' (' + c.style + ')' }),
      h('div', { class: 'detail-grid' },
        h('img', { class: 'card-img', src: imgPath(c.id), alt: 'Picture for card ' + c.id, loading: 'lazy' }),
        h('div', null,
          h('p', { class: 'line', text: c.line }),
          h('p', { class: 'meta', text: 'Picture: ' + c.picture }))),
      dl,
      h('p', { class: 'meta', text: 'Binder: ' + c.binder }),
      h('p', { class: 'meta', text: 'Links: ' + c.links }),
      c.note ? h('div', { class: 'note', text: 'Open item: ' + c.note }) : null);
  }

  function renderQuestion() {
    var cur = session.items[session.idx];
    var it = cur.item, q = cur.q;
    var total = session.items.length;
    var top = h('div', { class: 'progress' },
      h('span', { class: 'chip', text: TYPES[it.type].label }),
      ' Question ' + (session.idx + 1) + ' of ' + total + ' · score ' + session.score + ' · box ' + rec(it.key).box);

    var body = [];
    if (q.tag && cur.answered) body.push(h('div', { class: 'tag', text: q.tag }));
    if (q.img) body.push(h('div', { class: 'stimulus' }, h('img', { class: 'card-img', src: q.img, alt: 'Card picture' })));
    if (q.lead) body.push(h('p', { class: 'facts', text: q.lead }));
    if (q.list) body.push(h('ol', { class: 'steplist' }, q.list.map(function (t) { return h('li', { class: t === '______' ? 'gap' : null, text: t }); })));
    body.push(h('div', { class: 'question', text: q.prompt }));

    if (it.type === 'order') body.push(orderWidget(cur));
    else body.push(optionsWidget(cur));

    if (cur.answered) {
      body.push(h('div', { class: 'feedback' },
        h('div', { class: 'verdict ' + (cur.correct ? 'right' : 'wrong'), text: cur.correct ? (cur.early ? 'Correct. (Early review: box unchanged.)' : 'Correct.') : 'Not quite. Back to box 1.' }),
        feedbackBody(cur),
        it.type === 'reason' ? null : cardDetail(it.card, !cur.correct),
        h('div', { class: 'row', style: 'margin-top:12px' },
          h('button', { onclick: next, text: session.idx + 1 >= total ? 'See result' : 'Next (Enter)' }))));
    }

    setKeys(function (e) {
      if (e.target && /TEXTAREA|INPUT|SELECT/.test(e.target.tagName)) return;
      if (!cur.answered && it.type !== 'order' && /^[1-4]$/.test(e.key)) {
        var o = q.options[Number(e.key) - 1];
        if (o) { cur.picked = Number(e.key) - 1; grade(o.right); }
      } else if (cur.answered && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault(); next();
      }
    });

    show(h('div', { class: 'panel' }, top, body),
      h('button', { class: 'secondary', onclick: function () { if (confirm('Leave this session? Answers so far are saved.')) renderHome(); }, text: 'Leave session' }));
  }

  // On a miss: why the picked answer fails, then why the right one answers the question.
  function feedbackBody(cur) {
    var q = cur.q;
    if (cur.correct || !q.options || cur.picked == null) return q.why ? h('p', { class: 'why', text: q.why }) : null;
    var picked = q.options[cur.picked];
    var right = q.options.filter(function (o) { return o.right; })[0];
    return h('div', { class: 'why-pair' },
      h('div', { class: 'why wrongwhy' },
        h('div', { class: 'whyhead', text: 'Why your answer doesn\'t work' }),
        h('p', { class: 'picked', text: '\u201c' + picked.label + '\u201d' }),
        h('p', { text: picked.note || 'It isn\'t what this question is asking for. Compare it with the right answer below.' })),
      h('div', { class: 'why rightwhy' },
        h('div', { class: 'whyhead', text: 'Why the right answer fits' }),
        h('p', { class: 'picked', text: '\u201c' + (right ? right.label : '') + '\u201d' }),
        q.why ? h('p', { text: q.why }) : null));
  }

  function optionsWidget(cur) {
    var q = cur.q;
    return h('div', { class: 'options' }, q.options.map(function (o, i) {
      var cls = 'option';
      if (cur.answered) {
        if (o.right) cls += ' right';
        else if (i === cur.picked) cls += ' wrong';
      }
      return h('button', {
        class: cls, disabled: cur.answered ? true : null,
        onclick: function () { cur.picked = i; grade(o.right); }
      }, h('span', { class: 'keynum', text: (i + 1) + '. ' }), o.label);
    }));
  }

  function orderWidget(cur) {
    var correct = cur.q.order;
    if (!cur.pool) cur.pool = shuffle(correct.map(function (t, i) { return i; }));
    var wrap = h('div', { class: 'order' });
    var answerList = h('ol', { class: 'steplist built' }, cur.built.map(function (i, pos) {
      var cls = cur.answered ? (i === pos ? 'ok' : 'bad') : null;
      return h('li', { class: cls, text: correct[i] });
    }));
    var remaining = cur.pool.filter(function (i) { return cur.built.indexOf(i) < 0; });
    var buttons = h('div', { class: 'options' }, remaining.map(function (i) {
      return h('button', { class: 'option', disabled: cur.answered ? true : null, onclick: function () {
        cur.built.push(i);
        if (cur.built.length === correct.length) {
          grade(cur.built.every(function (x, pos) { return x === pos; }));
        } else renderQuestion();
      } }, correct[i]);
    }));
    wrap.appendChild(answerList);
    if (!cur.answered) {
      wrap.appendChild(buttons);
      if (cur.built.length) wrap.appendChild(h('button', { class: 'secondary small', onclick: function () { cur.built.pop(); renderQuestion(); }, text: 'Undo last' }));
    } else if (!cur.correct) {
      wrap.appendChild(h('div', { class: 'hint', text: 'Correct order:' }));
      wrap.appendChild(h('ol', { class: 'steplist' }, correct.map(function (t) { return h('li', { text: t }); })));
    }
    return wrap;
  }

  function renderSummary() {
    setKeys(null);
    var total = session.items.length;
    var pct = Math.round((session.score / total) * 100);
    var missed = [];
    session.misses.forEach(function (id) { if (missed.indexOf(id) < 0) missed.push(id); });
    show(h('div', { class: 'panel' },
      h('h2', { text: 'Session done: ' + session.title }),
      h('p', { class: 'big', text: session.score + ' of ' + total + ' (' + pct + '%)' }),
      missed.length ? h('div', null,
        h('p', { text: 'Cards to revisit (they come back first next time):' }),
        h('ul', { class: 'linklist' }, missed.map(function (id) {
          return h('li', null, h('a', { href: '#', onclick: function (e) { e.preventDefault(); renderCard(id); }, text: cardLabel(id) }));
        }))) : h('p', { text: 'Clean sheet.' }),
      h('div', { class: 'row' },
        h('button', { onclick: renderHome, text: 'Home' }),
        h('button', { class: 'secondary', onclick: function () { startSession(MIX_TYPES, "Today's mix"); }, text: 'Another mix' }))));
  }

  // ---------- home ----------
  function mastery(items) {
    if (!items.length) return 0;
    var good = items.filter(function (it) { return rec(it.key).box >= 3; }).length;
    return Math.round(good * 100 / items.length);
  }

  function renderHome() {
    setKeys(null);
    session = null;
    var core = ITEMS.filter(function (it) { return it.type !== 'pic'; });
    var now = Date.now();
    var seenN = core.filter(function (it) { return seen(it.key); }).length;
    var dueN = core.filter(function (it) { return seen(it.key) && rec(it.key).due <= now; }).length;
    var days = daysToExam();

    var stats = h('div', { class: 'stats' },
      stat(days >= 0 ? days : 0, days === 1 ? 'day to the exam' : 'days to the exam'),
      stat(seenN + ' / ' + core.length, 'questions seen'),
      stat(mastery(core) + '%', 'mastered (box 3+)'),
      stat(dueN, 'due for review'),
      stat(state.essays.length, 'essays written'));

    var mix = h('div', { class: 'panel hero' },
      h('h2', { text: "Today's mix" }),
      h('p', { class: 'hint', text: 'Only questions that are due: essay reasoning alternates with law questions, scenarios and tests. Misses come back first. A question is mastered when you get it right twice, at least 3 hours apart; answering early does not count.' }),
      h('div', { class: 'row' },
        h('button', { onclick: function () { startSession(MIX_TYPES, "Today's mix"); }, text: 'Start (' + state.settings.size + ' questions)' }),
        h('button', { class: 'secondary', onclick: renderExamList, text: 'Exam room: write an essay' })));

    var modes = h('div', { class: 'panel' },
      h('h2', { text: 'Practise one skill' }),
      h('div', { class: 'tiles' }, Object.keys(TYPES).map(function (t) {
        var items = eligible([t]);
        return h('button', { class: 'tile', onclick: function () { startSession([t], TYPES[t].label); } },
          h('b', { text: TYPES[t].label }),
          h('span', { text: TYPES[t].hint }),
          h('em', { text: items.length + ' questions · ' + mastery(items) + '% secure' }));
      })));

    var suitRows = [];
    for (var n = 1; n <= 9; n++) {
      (function (suit) {
        var items = core.filter(function (it) { return byId[it.card].suit === suit; });
        var m = mastery(items);
        var once = items.length ? Math.round(items.filter(function (it) { return rec(it.key).box === 2; }).length * 100 / items.length) : 0;
        var locked = items.length ? Math.round(items.filter(function (it) { return rec(it.key).box >= 4; }).length * 100 / items.length) : 0;
        var names = CARDS.filter(function (c) { return c.suit === suit; });
        suitRows.push(h('div', { class: 'suitrow' },
          h('button', { class: 'linkbtn', onclick: function () { state.settings.suit = String(suit); save(); startSession(MIX_TYPES, 'Suit ' + suit); }, text: 'Suit ' + suit }),
          h('div', { class: 'bar' }, h('div', { class: 'fill locked', style: 'width:' + locked + '%' }), h('div', { class: 'fill', style: 'width:' + (m - locked) + '%' }), h('div', { class: 'fill once', style: 'width:' + once + '%' })),
          h('span', { class: 'pct', text: m + '%' }),
          h('span', { class: 'suitname', text: SUIT_NAMES[suit] + ' · ' + items.length + ' questions · ' + once + '% right once · ' + locked + '% locked in' })));
      })(n);
    }
    var map = h('div', { class: 'panel' },
      h('h2', { text: 'Mastery map' }),
      h('p', { class: 'hint', text: '% = mastered: right twice, at least 3 hours apart (box 3). Gold bar: locked in, right again a day later (box 4). Pale bar: right once (box 2). Tap a suit to drill it.' }),
      suitRows,
      weakest());

    var planRows = SPREADS.map(function (sp) {
      var items = ITEMS.filter(function (it) { return it.sp === sp.id; });
      var m = mastery(items);
      var locked = items.length ? Math.round(items.filter(function (it) { return rec(it.key).box >= 4; }).length * 100 / items.length) : 0;
      var once = items.length ? Math.round(items.filter(function (it) { return rec(it.key).box === 2; }).length * 100 / items.length) : 0;
      return h('div', { class: 'suitrow planrow' },
        h('button', { class: 'linkbtn', onclick: function () { startSession(['reason'], sp.title, 'sp:' + sp.id); }, text: sp.title }),
        h('div', { class: 'bar' }, h('div', { class: 'fill locked', style: 'width:' + locked + '%' }), h('div', { class: 'fill', style: 'width:' + (m - locked) + '%' }), h('div', { class: 'fill once', style: 'width:' + once + '%' })),
        h('span', { class: 'pct', text: m + '%' }),
        h('span', { class: 'suitname', text: items.length + ' reasoning questions · ' + locked + '% locked in' + (once ? ' · ' + once + '% right once' : '') }));
    });
    var plans = planRows.length ? h('div', { class: 'panel' },
      h('h2', { text: 'Essay plans: reasoning' }),
      h('p', { class: 'hint', text: 'For each of your 12 tarot plans: the real question, the thesis, which authority proves which point, the counter, the landing and the traps. % = mastered (right twice, 3+ hours apart). Gold = locked in (right again a day later). Tap a plan to work through it.' }),
      planRows) : null;
    var tarot = SPREADS.length ? h('div', { class: 'panel' },
      h('h2', { text: 'Tarot essay plans' }),
      h('p', { class: 'hint', text: 'Plan an essay with the cards: introduction and conclusion, main cards, then support cards. ' + SPREADS.length + ' spreads.' }),
      h('div', { class: 'row' }, h('button', { onclick: renderTarotList, text: 'Plan an essay' }))) : null;
    var settings = settingsPanel();
    show(h('section', null, stats), mix, plans, tarot, map, modes, settings, progressPanel());
  }
  var SUIT_NAMES = { 1: 'Parliament and the constitution', 2: 'Rule of law and separation', 3: 'Judicial review', 4: 'Bill of Rights', 5: 'Search, evidence, detention', 6: 'International law', 7: 'Treaty of Waitangi', 8: 'Tikanga and customary rights', 9: 'Crown, watchdogs, courts' };

  function weakest() {
    var byCard = {};
    ITEMS.forEach(function (it) {
      var r = state.items[it.key];
      if (!r) return;
      byCard[it.card] = (byCard[it.card] || 0) + r.wrong - r.right * 0.5;
    });
    var list = Object.keys(byCard).filter(function (id) { return byCard[id] > 0; })
      .sort(function (a, b) { return byCard[b] - byCard[a]; }).slice(0, 6);
    if (!list.length) return null;
    return h('div', null,
      h('p', { class: 'hint', text: 'Weakest cards so far:' }),
      h('div', { class: 'row' }, list.map(function (id) {
        return h('button', { class: 'secondary small', onclick: function () { startSession(MIX_TYPES.concat(['pic']), 'Card ' + id, id); }, text: cardLabel(id) });
      })));
  }

  function stat(value, label) {
    return h('div', { class: 'stat' }, h('b', { text: String(value) }), h('span', { text: label }));
  }

  function settingsPanel() {
    var s = state.settings;
    var suitOpts = [['all', 'All suits']];
    for (var n = 1; n <= 9; n++) suitOpts.push([String(n), 'Suit ' + n + ': ' + SUIT_NAMES[n]]);
    return h('div', { class: 'panel settings' },
      h('h2', { text: 'Session settings' }),
      h('label', null, 'Questions per session: ', select([[10, '10'], [15, '15'], [25, '25'], [40, '40']], s.size, function (v) { s.size = Number(v); save(); renderHome(); })),
      h('label', null, 'Suit: ', select(suitOpts, s.suit, function (v) { s.suit = v; save(); renderHome(); })),
      h('label', null,
        h('input', { type: 'checkbox', checked: s.hideFlagged ? true : null, onchange: function (e) { s.hideFlagged = e.target.checked; save(); } }),
        ' Skip cards with an open item (time-sensitive or unverified)'),
      h('div', { class: 'row' }, h('button', { class: 'secondary', onclick: function () { renderBrowse(); }, text: 'Browse all 72 cards' })));
  }

  function select(options, current, onchange) {
    return h('select', { onchange: function (e) { onchange(e.target.value); } },
      options.map(function (o) {
        return h('option', { value: String(o[0]), selected: String(o[0]) === String(current) ? true : null, text: o[1] });
      }));
  }

  // ---------- card browser ----------
  function renderBrowse(query, style) {
    setKeys(null);
    query = query || '';
    style = style || 'all';
    var input = h('input', { type: 'search', class: 'search', placeholder: 'Search cards: a case, a section, a word', value: query });
    var styleSel = select([['all', 'All styles'], ['CASE', 'CASE'], ['STATUTE', 'STATUTE'], ['TEST', 'TEST'], ['DEBATE', 'DEBATE'], ['NOW', 'NOW']], style, function (v) { renderBrowse(input.value, v); });
    var list = h('div', { class: 'cardlist' });
    function fill() {
      var term = input.value.toLowerCase();
      list.replaceChildren.apply(list, CARDS.filter(function (c) {
        if (style !== 'all' && c.style !== style) return false;
        if (!term) return true;
        var hay = (c.id + ' ' + c.name + ' ' + c.line + ' ' + c.back.map(function (p) { return p[1]; }).join(' ')).toLowerCase();
        return hay.indexOf(term) >= 0;
      }).map(function (c) {
        return h('button', { class: 'cardrow', onclick: function () { renderCard(c.id); } },
          h('img', { src: imgPath(c.id), alt: '', loading: 'lazy' }),
          h('span', null, h('b', { text: c.id + ' ' + c.name }), h('small', { text: c.style + (c.note ? ' · open item' : '') })));
      }));
    }
    input.addEventListener('input', fill);
    fill();
    show(h('div', { class: 'panel' }, h('h2', { text: 'Cards' }), h('div', { class: 'row' }, input, styleSel), list));
  }

  function renderCard(id) {
    setKeys(null);
    var c = byId[id];
    var count = ITEMS.filter(function (it) { return it.card === id && it.type !== 'pic'; }).length;
    show(h('div', { class: 'panel' },
      cardDetail(id, true),
      h('div', { class: 'row', style: 'margin-top:12px' },
        h('button', { onclick: function () { startSession(MIX_TYPES.concat(['pic']), 'Card ' + id, id); }, text: 'Drill this card (' + count + ' questions)' }),
        h('button', { class: 'secondary', onclick: function () { renderBrowse(); }, text: 'All cards' }))));
  }

  // ---------- exam room ----------
  function attemptsFor(id) { return state.essays.filter(function (a) { return a.id === id; }); }

  function renderExamList(topic) {
    setKeys(null);
    topic = topic || 'all';
    var topics = [];
    ESSAYS.forEach(function (e) { if (topics.indexOf(e.topic) < 0) topics.push(e.topic); });
    topics.sort();
    var sel = select([['all', 'All topics']].concat(topics.map(function (t) { return [t, t]; })), topic, function (v) { renderExamList(v); });
    function row(e) {
      var a = attemptsFor(e.id);
      var best = a.reduce(function (m, x) { return Math.max(m, x.total || 0); }, 0);
      return h('button', { class: 'examrow', onclick: function () { renderEssayBrief(e.id); } },
        h('span', { class: 'sit', text: e.sit + (e.q ? ' Q' + e.q : '') }),
        h('b', { text: e.title }),
        h('small', { text: e.topic + (a.length ? ' · ' + a.length + ' attempt' + (a.length > 1 ? 's' : '') + ', best ' + best + '/50' : '') }));
    }
    var list = ESSAYS.filter(function (e) { return topic === 'all' || e.topic === topic; });
    var past = list.filter(function (e) { return e.q; }).reverse();
    var practice = list.filter(function (e) { return !e.q; });
    show(h('div', { class: 'panel' },
      h('h2', { text: 'Exam room' }),
      h('p', { class: 'hint', text: 'Each question runs in four stages: route (3 min), plan (10 min), write (40 min), mark. The exam is 90 minutes for two 50-mark answers, open book.' }),
      h('label', null, 'Topic: ', sel),
      h('h3', { text: 'Past papers, newest first (' + past.length + ')' }),
      h('div', { class: 'examlist' }, past.map(row)),
      practice.length ? h('h3', { text: 'Practice prompts: live issues and untested cards (' + practice.length + ')' }) : null,
      h('div', { class: 'examlist' }, practice.map(row))));
  }

  function essayById(id) { for (var i = 0; i < ESSAYS.length; i++) if (ESSAYS[i].id === id) return ESSAYS[i]; return null; }

  function briefBlock(e) {
    return h('div', { class: 'brief' },
      h('div', { class: 'sit', text: e.sit + (e.q ? ', Question ' + e.q : ', practice prompt') + ' · ' + e.topic }),
      h('p', { class: 'prompt', text: e.prompt }),
      e.q ? h('p', { class: 'hint', text: 'Paraphrased. Read the paper itself for the quotation and the exact words.' }) : null,
      h('div', { class: 'limbs' }, h('b', { text: 'The question asks for: ' }), e.limbs.join(' · ')));
  }

  function renderEssayBrief(id) {
    setKeys(null);
    var e = essayById(id);
    var a = attemptsFor(id);
    var draft = state.drafts[id];
    show(h('div', { class: 'panel' },
      h('h2', { text: e.title }),
      briefBlock(e),
      h('div', { class: 'row', style: 'margin-top:14px' },
        h('button', { onclick: function () { renderRoute(e); }, text: 'Start: route drill (3 min)' }),
        spreadForEssay(e.id) ? h('button', { class: 'secondary', onclick: function () { startTarot(spreadForEssay(e.id)); }, text: 'Tarot plan' }) : null,
        draft && draft.text ? h('button', { class: 'secondary', onclick: function () { renderWrite(e, draft.picked || [], true); }, text: 'Resume saved draft' }) : null,
        h('button', { class: 'secondary', onclick: function () { renderExamList(); }, text: 'All questions' })),
      a.length ? h('div', { class: 'history' },
        h('h3', { text: 'Your attempts' }),
        h('ul', null, a.map(function (x) {
          return h('li', null, new Date(x.date).toLocaleString() + ': ' + x.total + '/50, ' + x.words + ' words, route ' + x.routeScore + ' ',
            h('a', { href: '#', onclick: function (ev) { ev.preventDefault(); renderAttempt(e, x); }, text: 'view' }));
        }))) : null));
  }

  function renderRoute(e) {
    setKeys(null);
    var picked = [];
    var clock = h('span', { class: 'timer' });
    var groups = [];
    for (var n = 1; n <= 9; n++) {
      var cards = CARDS.filter(function (c) { return c.suit === n; });
      groups.push(h('fieldset', { class: 'suitgroup' },
        h('legend', { text: 'Suit ' + n + ': ' + SUIT_NAMES[n] }),
        cards.map(function (c) {
          return h('label', { class: 'pick' },
            h('input', { type: 'checkbox', onchange: function (ev) {
              if (ev.target.checked) picked.push(c.id);
              else picked.splice(picked.indexOf(c.id), 1);
            } }),
            ' ' + c.id + ' ' + c.name);
        })));
    }
    show(h('div', { class: 'panel' },
      h('div', { class: 'row spread' }, h('h2', { text: 'Stage 1 of 4: route' }), clock),
      briefBlock(e),
      h('p', { class: 'hint', text: 'Tick the cards you would use. Aim for the essential authorities, not everything that is loosely related.' }),
      groups,
      h('div', { class: 'row' }, h('button', { onclick: function () { renderRouteResult(e, picked); }, text: 'Check my route' }))));
    startTimer(clock, 3);
  }

  function routeScore(e, picked) {
    var coreHit = e.core.filter(function (id) { return picked.indexOf(id) >= 0; });
    var routeHit = e.route.filter(function (id) { return picked.indexOf(id) >= 0; });
    var extra = picked.filter(function (id) { return e.route.indexOf(id) < 0; });
    return { coreHit: coreHit, routeHit: routeHit, extra: extra, label: coreHit.length + '/' + e.core.length + ' essential' };
  }

  function renderRouteResult(e, picked) {
    var r = routeScore(e, picked);
    var rows = e.route.map(function (id) {
      var got = picked.indexOf(id) >= 0;
      var isCore = e.core.indexOf(id) >= 0;
      return h('li', { class: got ? 'ok' : (isCore ? 'bad' : 'soft') },
        h('b', { text: cardLabel(id) + (isCore ? ' (essential)' : '') }),
        h('div', { class: 'use', text: backField(byId[id], 'Use') || byId[id].line }));
    });
    show(h('div', { class: 'panel' },
      h('h2', { text: 'Route checked' }),
      h('p', { class: 'big', text: r.coreHit.length + ' of ' + e.core.length + ' essential cards · ' + r.routeHit.length + ' of ' + e.route.length + ' in the model route' }),
      h('h3', { text: 'Model route' }),
      h('p', { class: 'hint', text: 'Green: in the model route and you picked it. Red: essential and you missed it. Amber: useful but not essential, not picked. Cards you picked that are not in the route are listed below; they are not wrong if you can say why.' }),
      h('ul', { class: 'routelist' }, rows),
      r.extra.length ? h('p', { class: 'hint', text: 'Also ticked (not in the model route; fine if you can say why): ' + r.extra.map(cardLabel).join('; ') }) : null,
      h('div', { class: 'tension' }, h('b', { text: 'The tension it turns on: ' }), e.tension),
      h('div', { class: 'row', style: 'margin-top:14px' },
        h('button', { onclick: function () { renderPlan(e, picked); }, text: 'Stage 2: plan (10 min)' }),
        h('button', { class: 'secondary', onclick: function () { renderWrite(e, picked); }, text: 'Skip to writing' }))));
  }

  function renderPlan(e, picked) {
    var clock = h('span', { class: 'timer' });
    var draft = state.drafts[e.id] || {};
    var plan = draft.plan || {};
    var boxes = e.limbs.map(function (limb, i) {
      var ta = h('textarea', { rows: 3, placeholder: 'Authorities for this limb (card numbers, sections, cases) and one line of argument', value: plan[i] || '' });
      ta.addEventListener('input', function () { plan[i] = ta.value; keepDraft(e.id, { plan: plan, picked: picked }); });
      return h('label', { class: 'planbox' }, h('b', { text: (i + 1) + '. ' + limb }), ta);
    });
    var landBox = h('textarea', { rows: 2, placeholder: 'Where will you land, and on what condition?', value: plan.land || '' });
    landBox.addEventListener('input', function () { plan.land = landBox.value; keepDraft(e.id, { plan: plan, picked: picked }); });
    show(h('div', { class: 'panel' },
      h('div', { class: 'row spread' }, h('h2', { text: 'Stage 2 of 4: plan' }), clock),
      briefBlock(e),
      h('p', { class: 'hint', text: 'One box per limb. Note the authority first, then a one-line point. Say where you will land and the condition it depends on.' }),
      boxes,
      h('label', { class: 'planbox' }, h('b', { text: 'Landing and its condition' }), landBox),
      h('div', { class: 'row' }, h('button', { onclick: function () { renderWrite(e, picked); }, text: 'Stage 3: write (40 min)' }))));
    startTimer(clock, 10);
  }

  function keepDraft(id, patch) {
    state.drafts[id] = Object.assign({}, state.drafts[id] || {}, patch);
    save();
  }

  function renderWrite(e, picked, resume) {
    var clock = h('span', { class: 'timer' });
    var draft = state.drafts[e.id] || {};
    var plan = draft.plan || {};
    var ta = h('textarea', { class: 'essay', rows: 22, placeholder: 'Write your answer. Headings for each limb. Act and section every time. Quotation marks around quoted words, with the source.', value: draft.text || '' });
    var wc = h('span', { class: 'hint' });
    function count() {
      var w = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      wc.textContent = w + ' words';
      return w;
    }
    ta.addEventListener('input', function () { count(); keepDraft(e.id, { text: ta.value, picked: picked, plan: plan }); });
    count();
    var planView = Object.keys(plan).length ? h('details', { class: 'planview' },
      h('summary', { text: 'Your plan' }),
      h('ol', null, e.limbs.map(function (l, i) { return h('li', null, h('b', { text: l + ': ' }), plan[i] || ''); })),
      plan.land ? h('p', null, h('b', { text: 'Landing: ' }), plan.land) : null) : null;
    show(h('div', { class: 'panel' },
      h('div', { class: 'row spread' }, h('h2', { text: 'Stage 3 of 4: write' }), clock),
      briefBlock(e),
      planView,
      ta,
      h('div', { class: 'row spread' }, wc,
        h('button', { onclick: function () { if (count() < 50 && !confirm('Under 50 words. Mark anyway?')) return; renderMark(e, picked, ta.value); }, text: 'Stage 4: mark it' }))));
    startTimer(clock, 40);
    ta.focus();
  }

  function citeAudit(e, text) {
    var low = text.toLowerCase();
    return e.route.map(function (id) {
      var keys = CITE_KEYS[id] || [];
      var hit = keys.filter(function (k) { return low.indexOf(k.toLowerCase()) >= 0; });
      return { id: id, hit: hit, core: e.core.indexOf(id) >= 0 };
    });
  }
  function textChecks(text) {
    var bare = (text.match(/(^|[^A-Za-z0-9)\]])s{1,2} \d+[A-Z]?(\(\w+\))*/g) || []).length;
    var named = (text.match(/(Act|Bill of Rights|NZBORA)[^.\n]{0,25}\bs{1,2} \d+/g) || []).length;
    var quotes = (text.match(/["“”]/g) || []).length;
    var heads = text.split(/\n/).filter(function (l) { var t = l.trim(); return t && t.length < 70 && !/[.;]$/.test(t); }).length;
    return { bare: bare, named: named, quotes: quotes, heads: heads };
  }

  function renderMark(e, picked, text) {
    setKeys(null);
    var audit = citeAudit(e, text);
    var tc = textChecks(text);
    var words = text.trim() ? text.trim().split(/\s+/).length : 0;
    var scores = RUBRIC.map(function () { return 5; });
    var totalEl = h('b', { class: 'big' });
    function total() { var t = scores.reduce(function (a, b) { return a + b; }, 0); totalEl.textContent = t + ' / 50'; return t; }

    var auditList = h('ul', { class: 'routelist' }, audit.map(function (a) {
      return h('li', { class: a.hit.length ? 'ok' : (a.core ? 'bad' : 'soft') },
        h('b', { text: cardLabel(a.id) + (a.core ? ' (essential)' : '') }),
        h('div', { class: 'use', text: a.hit.length ? 'Found: ' + a.hit.join(', ') : 'Not found. Its use: ' + (backField(byId[a.id], 'Use') || byId[a.id].line) }));
    }));

    var rubric = h('div', { class: 'rubric' }, RUBRIC.map(function (r, i) {
      var out = h('span', { class: 'score', text: '5' });
      var range = h('input', { type: 'range', min: 0, max: 10, step: 1, value: 5, oninput: function (ev) { scores[i] = Number(ev.target.value); out.textContent = ev.target.value; total(); } });
      return h('div', { class: 'rubrow' }, h('div', null, h('b', { text: r[0] }), h('div', { class: 'hint', text: r[1] })), h('div', { class: 'rubin' }, range, out));
    }));
    total();

    var landings = h('ol', { class: 'landings' }, e.land.map(function (l) { return h('li', null, l[0], h('div', { class: 'hint', text: 'Condition: ' + l[1] })); }));
    var r = routeScore(e, picked);

    show(h('div', { class: 'panel' },
      h('h2', { text: 'Stage 4 of 4: mark' }),
      briefBlock(e),
      h('h3', { text: 'Authority audit (automatic)' }),
      h('p', { class: 'hint', text: 'Looks for each model-route card\'s key names and sections in your text. Green: used. Red: an essential card is missing.' }),
      auditList,
      h('h3', { text: 'Form checks (automatic)' }),
      h('ul', { class: 'checks' },
        h('li', { text: words + ' words. The graded practice outline aimed for 1,300 to 1,600 words in 45 minutes.' }),
        h('li', { text: tc.named + ' section references with the Act named; ' + tc.bare + ' section references in total. Aim to name the Act every time.' }),
        h('li', { text: tc.quotes ? 'Quotation marks used: check each quote names its source.' : 'No quotation marks. Fine, unless you used someone\'s words.' }),
        h('li', { text: tc.heads >= e.limbs.length ? 'Looks like you used headings.' : 'Few heading lines found. Give each limb its own heading: ' + e.limbs.join(' · ') })),
      h('h3', { text: 'Mark yourself out of 50' }),
      h('p', { class: 'hint', text: 'Be strict. A 50-mark answer is marked on these five things (from the graded practice attempts).' }),
      rubric,
      h('div', { class: 'row spread' }, h('span', { text: 'Total' }), totalEl),
      h('h3', { text: 'Ways to land' }),
      landings,
      h('h3', { text: 'Traps' }),
      h('ul', null, e.traps.map(function (t) { return h('li', { text: t }); })),
      e.gap ? h('div', { class: 'note', text: 'Not on any card: ' + e.gap }) : null,
      h('div', { class: 'row', style: 'margin-top:14px' },
        h('button', { onclick: function () {
          state.essays.push({ id: e.id, date: Date.now(), words: words, total: total(), scores: scores.slice(), routeScore: r.label, picked: picked, text: text });
          delete state.drafts[e.id];
          save();
          renderEssayBrief(e.id);
        }, text: 'Save this attempt' }),
        h('button', { class: 'secondary', onclick: function () { renderWrite(e, picked, true); }, text: 'Back to writing' }))));
  }

  function renderAttempt(e, x) {
    show(h('div', { class: 'panel' },
      h('h2', { text: e.title }),
      h('p', { class: 'meta', text: new Date(x.date).toLocaleString() + ' · ' + x.total + '/50 · ' + x.words + ' words · route ' + x.routeScore }),
      h('ul', null, RUBRIC.map(function (r, i) { return h('li', { text: r[0] + ': ' + (x.scores ? x.scores[i] : '?') + '/10' }); })),
      h('pre', { class: 'essaytext', text: x.text }),
      h('button', { class: 'secondary', onclick: function () { renderEssayBrief(e.id); }, text: 'Back' })));
  }

  // ---------- tarot essay plans ----------
  // Build an essay plan as a card spread: frame (introduction and conclusion), skeleton (main cards),
  // then support cards for each main card. Options are graded best / workable / weak, with a reason.
  // Progress is stored as state.items['t:<spread id>'], next to the other items, so nothing else changes.
  var SPREADS = window.SPREADS || [];
  var TT = window.TAROT_TITLES || {};
  var GRADES = {
    best: { label: 'Best', pts: 2, cls: 'right' },
    ok: { label: 'Workable', pts: 1, cls: 'okay' },
    weak: { label: 'Weak', pts: 0, cls: 'wrong' }
  };
  var SECT_COL = ['#8a6d1a', '#3b5b8c', '#7a3b3b', '#2d6b6b', '#555555'];
  var MAIN_COL = ['#3b5b8c', '#7a3b3b', '#2d6b6b', '#555555'];
  var LENS_CARDS = ['1.1', '2.1', '2.8', '2.7'];

  function ttl(id) { return TT[id] || (byId[id] ? byId[id].name : id); }
  function spreadById(id) { for (var i = 0; i < SPREADS.length; i++) if (SPREADS[i].id === id) return SPREADS[i]; return null; }
  function spreadForEssay(eid) { for (var i = 0; i < SPREADS.length; i++) if (SPREADS[i].essay === eid) return SPREADS[i]; return null; }
  function tKey(sp) { return 't:' + sp.id; }
  function tarotMax(sp) { return 2 * (2 + sp.mains.length); }

  function tcard(id, cue, size, focus) {
    var lens = LENS_CARDS.indexOf(id) >= 0;
    return h('figure', { class: 'tcard' + (size ? ' ' + size : '') + (lens ? ' lens' : ''), 'data-f': focus || null },
      h('img', { src: imgPath(id), alt: ttl(id), loading: 'lazy' }),
      h('figcaption', null, h('b', { text: ttl(id) }), cue ? h('small', { text: cue }) : null));
  }
  function thumbs(ids, size) {
    if (!ids.length) return h('div', { class: 'tnone', text: 'No support card' });
    return h('div', { class: 'tthumbs' }, ids.map(function (id) { return tcard(id, null, size || 'sm'); }));
  }

  function renderTarotList() {
    setKeys(null);
    session = null;
    show(h('div', { class: 'panel' },
      h('h2', { text: 'Tarot essay plans' }),
      h('p', { class: 'hint', text: 'Build an essay plan from the cards, the way you will in the five-minute planning window. Pick the introduction and conclusion, then the main card for each paragraph, then each paragraph\'s support cards. Every option is graded best, workable or weak, with the reason. The finished spread matches the printed sheet.' }),
      h('div', { class: 'examlist' }, SPREADS.map(function (sp) {
        var r = state.items[tKey(sp)];
        var meta = r ? 'Best ' + (r.best || 0) + '/' + tarotMax(sp) + ' · box ' + r.box : 'Not tried yet';
        return h('button', { class: 'examrow', onclick: function () { startTarot(sp); } },
          h('span', { class: 'sit', text: sp.mains.length + ' paragraphs' }),
          h('b', { text: sp.title }),
          h('small', { text: meta }));
      })),
      h('div', { class: 'row', style: 'margin-top:12px' },
        h('button', { class: 'secondary', onclick: function () { renderTarotPick(); }, text: 'See a finished spread' }))));
  }

  function renderTarotPick() {
    setKeys(null);
    show(h('div', { class: 'panel' },
      h('h2', { text: 'Finished spreads' }),
      h('div', { class: 'examlist' }, SPREADS.map(function (sp) {
        return h('button', { class: 'examrow', onclick: function () { renderTarotReveal(sp, null); } }, h('b', { text: sp.title }));
      })),
      h('button', { class: 'secondary', onclick: renderTarotList, text: 'Back' })));
  }

  function startTarot(sp) {
    var steps = [{ kind: 'frame', opts: shuffle(sp.frame) }, { kind: 'skel', opts: shuffle(sp.skel) }];
    sp.mains.forEach(function (m, i) { steps.push({ kind: 'sup', main: m, idx: i, opts: shuffle(sp.sup[m.card]) }); });
    renderTarotStep({ sp: sp, steps: steps, step: 0, score: 0 });
  }

  function tarotOptionBody(st, o) {
    if (st.kind === 'frame') {
      return h('div', { class: 'tframe' },
        h('div', null, h('span', { class: 'tlabel', text: 'Introduction' }), thumbs(o.cards)),
        h('div', null, h('span', { class: 'tlabel', text: 'Conclusion' }), thumbs([o.concl])));
    }
    return thumbs(o.cards);
  }

  function renderTarotStep(run) {
    var sp = run.sp, st = run.steps[run.step], n = run.steps.length;
    var heading, lead = null;
    if (st.kind === 'frame') heading = 'Pick the introduction and conclusion';
    else if (st.kind === 'skel') heading = 'Pick the main cards, one per paragraph, in order';
    else {
      heading = 'Paragraph ' + (st.idx + 1) + ': pick its support cards';
      lead = h('div', { class: 'tmain' }, tcard(st.main.card, st.main.cue, 'md'),
        h('p', { class: 'hint', text: 'The main card for this paragraph. Choose the cards that back it up.' }));
    }
    var answered = st.picked !== undefined;
    var opts = h('div', { class: 'toptions' }, st.opts.map(function (o, i) {
      var cls = 'option topt';
      var g = GRADES[o.grade];
      if (answered) cls += ' ' + g.cls + (i === st.picked ? ' picked' : ' faded');
      return h('button', {
        class: cls, disabled: answered ? true : null,
        onclick: function () { pickTarot(run, i); }
      },
        h('span', { class: 'keynum', text: (i + 1) + '.' }),
        tarotOptionBody(st, o),
        answered ? h('div', { class: 'tgrade' }, h('b', { text: g.label + ': ' }), o.why) : null);
    }));
    var fb = null;
    if (answered) {
      var p = st.opts[st.picked];
      fb = h('div', { class: 'feedback' },
        h('div', { class: 'verdict ' + GRADES[p.grade].cls, text: GRADES[p.grade].label + ' (+' + GRADES[p.grade].pts + ')' }),
        st.kind === 'skel' && p.grade !== 'best' ? h('p', { class: 'hint', text: 'The next steps build out the best skeleton, so you practise the strongest plan.' }) : null,
        h('div', { class: 'row', style: 'margin-top:10px' },
          h('button', { onclick: function () { nextTarot(run); }, text: run.step + 1 >= n ? 'See the spread (Enter)' : 'Next (Enter)' })));
    }
    setKeys(function (e) {
      if (e.target && /TEXTAREA|INPUT|SELECT/.test(e.target.tagName)) return;
      if (!answered && /^[1-4]$/.test(e.key) && st.opts[Number(e.key) - 1]) pickTarot(run, Number(e.key) - 1);
      else if (answered && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); nextTarot(run); }
    });
    show(h('div', { class: 'panel' },
      h('div', { class: 'progress' }, h('span', { class: 'chip', text: 'Tarot plan' }), ' ' + sp.title + ' · step ' + (run.step + 1) + ' of ' + n + ' · score ' + run.score + '/' + tarotMax(sp)),
      h('p', { class: 'prompt', text: sp.prompt }),
      h('div', { class: 'question', text: heading }),
      lead, opts, fb),
      h('button', { class: 'secondary', onclick: function () { if (confirm('Leave this plan? It will not be scored.')) renderTarotList(); }, text: 'Leave' }));
  }

  function pickTarot(run, i) {
    var st = run.steps[run.step];
    if (st.picked !== undefined) return;
    st.picked = i;
    run.score += GRADES[st.opts[i].grade].pts;
    renderTarotStep(run);
  }

  function nextTarot(run) {
    if (run.step + 1 < run.steps.length) { run.step += 1; renderTarotStep(run); return; }
    var sp = run.sp, max = tarotMax(sp), key = tKey(sp);
    var good = run.score >= Math.ceil(max * 0.75);
    var r = state.items[key] || { box: 1, due: 0, right: 0, wrong: 0, best: 0 };
    var box = good ? Math.min((r.box || 1) + 1, MAX_BOX) : 1;
    state.items[key] = {
      box: box, due: dueFor(box),
      right: (r.right || 0) + (good ? 1 : 0), wrong: (r.wrong || 0) + (good ? 0 : 1),
      best: Math.max(r.best || 0, run.score), last: run.score
    };
    save();
    renderTarotReveal(sp, run);
  }


  // ---------- spoken model essay ----------
  // Reads the model essay aloud sentence by sentence (Web Speech API), highlighting the spread position
  // being argued and the authorities cited. Card invocations ("cue") are spoken but are not part of the essay.
  function modelPlayer(sp, spread) {
    var segs = sp.model;
    var rec = sp.audio && sp.audio.starts && sp.audio.starts.length === segs.length ? sp.audio : null;
    var tts = !rec && window.speechSynthesis && window.SpeechSynthesisUtterance ? window.speechSynthesis : null;
    var audio = null;
    if (rec) {
      audio = new Audio(rec.src);
      audio.preload = 'auto';
      audio.playbackRate = Number(state.settings.trate || 1);
      audio.addEventListener('timeupdate', function () {
        if (!alive()) { audio.pause(); return; }
        var t = audio.currentTime, i = 0;
        while (i + 1 < rec.starts.length && rec.starts[i + 1] <= t + 0.05) i++;
        if (i !== P.i || !spans[i].classList.contains('cur')) { P.i = i; highlight(i); }
      });
      audio.addEventListener('ended', function () { P.playing = false; P.i = 0; playBtn.textContent = '▶ Play again'; clearHl(); cites.replaceChildren(); caption.textContent = 'Finished.'; });
    }
    var P = { i: 0, playing: false, token: 0 };
    var cites = h('div', { class: 'tcites' });
    var caption = h('div', { class: 'tcaption', text: 'Press play to hear a model essay (' + sp.modelWords + ' words). Card names are spoken before each part.' });
    var spans = segs.map(function (sg, i) {
      return h('span', { class: 'tseg' + (sg.k === 'cue' ? ' cue' : ''), onclick: function () { jump(i); } }, sg.t + ' ');
    });
    var script = [];
    var para = null;
    segs.forEach(function (sg, i) {
      if (sg.k === 'cue') { para = h('p', { class: 'tpara' }); script.push(para); }
      para.appendChild(spans[i]);
    });
    var playBtn = h('button', { onclick: toggle, text: '▶ Play model essay' });
    var voiceSel = h('select', { class: 'tvoice', onchange: function () { state.settings.tvoice = voiceSel.value; save(); restart(); } });
    var rateSel = select([['0.9', 'Slower'], ['1', 'Normal'], ['1.1', 'Faster'], ['1.25', 'Fastest']], state.settings.trate || '1',
      function (v) { state.settings.trate = v; save(); restart(); });
    function englishVoices() {
      if (!tts) return [];
      var order = ['en-NZ', 'en-AU', 'en-GB', 'en-IE', 'en-ZA', 'en-US'];
      return tts.getVoices().filter(function (v) { return /^en[-_]/i.test(v.lang); })
        .sort(function (a, b) {
          var ia = order.indexOf(a.lang.replace('_', '-')), ib = order.indexOf(b.lang.replace('_', '-'));
          return (ia < 0 ? 9 : ia) - (ib < 0 ? 9 : ib);
        });
    }
    function fillVoices() {
      var vs = englishVoices();
      voiceSel.replaceChildren.apply(voiceSel, vs.map(function (v) {
        return h('option', { value: v.name, selected: v.name === state.settings.tvoice ? true : null, text: v.name + ' (' + v.lang + ')' });
      }));
    }
    if (tts) { fillVoices(); tts.onvoiceschanged = fillVoices; }
    function voice() {
      var vs = englishVoices();
      for (var i = 0; i < vs.length; i++) if (vs[i].name === state.settings.tvoice) return vs[i];
      return vs[0] || null;
    }
    function alive() { return document.body.contains(bar); }
    function clearHl() {
      [].forEach.call(spread.querySelectorAll('.hl, .hl2'), function (el) { el.classList.remove('hl'); el.classList.remove('hl2'); });
      spans.forEach(function (sp2) { sp2.classList.remove('cur'); });
    }
    function highlight(i) {
      clearHl();
      var sg = segs[i]; if (!sg) return;
      var f = sg.f, first = null;
      var main = f.replace(/s\d+$/, '');
      [].forEach.call(spread.querySelectorAll('[data-f="' + f + '"]'), function (el) { el.classList.add('hl'); first = first || el; });
      if (main !== f) [].forEach.call(spread.querySelectorAll('[data-f="' + main + '"]'), function (el) { el.classList.add('hl2'); });
      (sg.a || []).forEach(function (a) {
        var li = spread.querySelector('[data-a="' + a[0] + '-' + a[1] + '"]');
        if (li) li.classList.add('hl');
      });
      spans[i].classList.add('cur');
      caption.textContent = (sg.k === 'cue' ? '🂠 ' : '') + sg.t;
      caption.className = 'tcaption' + (sg.k === 'cue' ? ' cue' : '');
      cites.replaceChildren.apply(cites, (sg.a || []).map(function (a) {
        var it = sp.auth[a[0]][2][a[1]];
        return h('span', { class: 'tcite' }, it[0], ' ', h('em', { text: it[1] }));
      }));
      if (first) {
        var r = first.getBoundingClientRect();
        if (r.top < 0 || r.bottom > window.innerHeight - 140) first.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }
    function speak(i) {
      if (!alive()) { if (tts) tts.cancel(); return; }
      if (i >= segs.length) { P.playing = false; P.i = 0; playBtn.textContent = '▶ Play again'; clearHl(); cites.replaceChildren(); caption.textContent = 'Finished.'; return; }
      P.i = i; highlight(i);
      if (!tts) return;
      var token = ++P.token;
      var u = new SpeechSynthesisUtterance(segs[i].t);
      var v = voice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-NZ';
      u.rate = Number(state.settings.trate || 1);
      if (segs[i].k === 'cue') u.pitch = 0.9;
      u.onend = function () { if (token === P.token && P.playing && alive()) speak(i + 1); };
      u.onerror = function (e) { if (e.error !== 'interrupted' && e.error !== 'canceled' && token === P.token && P.playing && alive()) speak(i + 1); };
      tts.speak(u);
    }
    function play() {
      if (audio) {
        P.playing = true; playBtn.textContent = '❚❚ Pause';
        window.__tarotAudio = audio;
        if (audio.currentTime < 0.05) highlight(P.i);
        var pr = audio.play(); if (pr && pr.catch) pr.catch(function () { P.playing = false; playBtn.textContent = '▶ Play model essay'; caption.textContent = 'Could not start the audio. Check your connection and press play again.'; });
        return;
      }
      if (!tts) return; P.playing = true; playBtn.textContent = '❚❚ Pause'; P.token++; tts.cancel(); speak(P.i);
    }
    function pause() { P.playing = false; P.token++; if (audio) audio.pause(); if (tts) tts.cancel(); playBtn.textContent = '▶ Resume'; }
    function toggle() { if (P.playing) pause(); else play(); }
    function restart() {
      if (audio) { audio.playbackRate = Number(state.settings.trate || 1); return; }
      if (P.playing) { P.token++; tts.cancel(); speak(P.i); }
    }
    function jump(i) {
      i = Math.max(0, Math.min(segs.length - 1, i));
      P.i = i;
      if (audio) { audio.currentTime = rec.starts[i] + 0.01; highlight(i); return; }
      if (P.playing) { P.token++; tts.cancel(); speak(i); } else highlight(i);
    }
    function stop() { P.playing = false; P.token++; if (audio) { audio.pause(); audio.currentTime = 0; } if (tts) tts.cancel(); P.i = 0; clearHl(); cites.replaceChildren(); playBtn.textContent = '▶ Play model essay'; caption.textContent = 'Stopped.'; }
    var bar = h('div', { class: 'tplayer' },
      h('div', { class: 'row' },
        (audio || tts) ? playBtn : h('span', { class: 'hint', text: 'This browser cannot read aloud; tap the sentences below to follow the highlights.' }),
        h('button', { class: 'secondary small', onclick: function () { jump(P.i - 1); }, text: '⏮', title: 'Previous sentence' }),
        h('button', { class: 'secondary small', onclick: function () { jump(P.i + 1); }, text: '⏭', title: 'Next sentence' }),
        h('button', { class: 'secondary small', onclick: stop, text: '■ Stop' }),
        (audio || tts) ? rateSel : null, tts ? voiceSel : null),
      caption, cites);
    return h('div', { class: 'tmodel' },
      h('p', { class: 'hint', text: 'Model essay: listen for structure and authority. Write your own answer fresh in the exam; do not memorise these sentences.' }),
      bar,
      h('details', { class: 'tscript' }, h('summary', { text: 'Full text (' + sp.modelWords + ' words; card invocations in grey). Tap a sentence to jump there.' }), script));
  }

  function tarotAuth(sp) {
    return h('div', { class: 'tauth' }, sp.auth.map(function (g, gi) {
      return h('div', { class: 'tauthgroup' },
        h('div', { class: 'tauthhead', style: 'color:' + SECT_COL[g[1]], text: g[0] }),
        h('ul', null, g[2].map(function (a, ii) {
          return h('li', { 'data-a': gi + '-' + ii }, a[0], ' ', h('em', { text: a[1] }));
        })));
    }));
  }

  function renderTarotReveal(sp, run) {
    setKeys(null);
    var score = null;
    if (run) {
      var max = tarotMax(sp);
      score = h('div', { class: 'feedback' },
        h('p', { class: 'big', text: run.score + ' / ' + max }),
        h('p', { class: 'hint', text: run.score >= Math.ceil(max * 0.75) ? 'A strong plan. This spread moves up a box and comes back later.' : 'This spread goes back to box 1 and comes back sooner. Study the finished spread below.' }));
    }
    var essay = essayById(sp.essay);
    var spread = h('div', { class: 'tarot' },
      h('div', { class: 'ttop' },
        h('div', { class: 'tintro' }, sp.intro.map(function (c) { return tcard(c[0], c[1], 'md', 'i'); })),
        tarotAuth(sp),
        h('div', { class: 'tconcl' }, tcard(sp.concl[0], sp.concl[1], 'md', 'c'))),
      h('div', { class: 'tcols' }, sp.mains.map(function (m, i) {
        return h('div', { class: 'tcol', style: '--c:' + MAIN_COL[i % 4] },
          tcard(m.card, m.cue, 'md', 'm' + i),
          m.sup.length ? h('div', { class: 'tarrow', text: '↓' }) : null,
          h('div', { class: 'tsups' }, m.sup.map(function (s, j) { return tcard(s[0], s[1], 'sm', 'm' + i + 's' + j); })));
      })));
    show(h('div', { class: 'panel wide' },
      h('h2', { text: sp.title }),
      h('p', { class: 'prompt', text: sp.prompt }),
      score, spread, sp.model ? modelPlayer(sp, spread) : null,
      h('div', { class: 'row', style: 'margin-top:14px' },
        h('button', { onclick: function () { startTarot(sp); }, text: run ? 'Try again' : 'Build this plan' }),
        h('button', { class: 'secondary', onclick: renderTarotList, text: 'All tarot plans' }),
        essay ? h('button', { class: 'secondary', onclick: function () { renderEssayBrief(essay.id); }, text: 'Write this essay' }) : null)));
  }

  // ---------- progress file ----------
  function progressPanel() {
    return h('div', { class: 'panel' },
      h('h2', { text: 'Progress and essays' }),
      h('p', { class: 'hint', text: 'Saved in this browser only. Export a file to keep it safe or move it to another device. Essays are included.' }),
      h('div', { class: 'row' },
        h('button', { class: 'secondary', onclick: exportProgress, text: 'Export' }),
        h('label', { class: 'secondary-label' }, 'Import: ',
          h('input', { type: 'file', accept: 'application/json', onchange: function (ev) { if (ev.target.files && ev.target.files[0]) importProgress(ev.target.files[0]); } })),
        h('button', { class: 'danger', onclick: resetProgress, text: 'Reset' })));
  }
  function exportProgress() {
    var blob = new Blob([JSON.stringify({ version: 3, exported: new Date().toISOString(), state: state }, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = h('a', { href: url, download: 'nzlpe-study-progress.json' });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }
  function importProgress(file) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var d = JSON.parse(reader.result);
        if (!d || !d.state || typeof d.state.items !== 'object') throw new Error('not a progress file from this version');
        state = normalise(d.state); save(); renderHome();
      } catch (err) { alert('Import failed: ' + err.message); }
    };
    reader.readAsText(file);
  }
  function resetProgress() {
    if (!confirm('Reset all progress and essays in this browser? Export first if you want a copy.')) return;
    state = blank(); save(); renderHome();
  }

  // ---------- start ----------
  document.getElementById('home-link').addEventListener('click', function (ev) {
    ev.preventDefault();
    if (session && !session.done && !confirm('Leave this session? Answers so far are saved.')) return;
    renderHome();
  });
  var nav = document.getElementById('nav');
  if (nav) {
    nav.querySelector('[data-go=exam]').addEventListener('click', function (ev) { ev.preventDefault(); renderExamList(); });
    nav.querySelector('[data-go=cards]').addEventListener('click', function (ev) { ev.preventDefault(); renderBrowse(); });
    var tnav = nav.querySelector('[data-go=tarot]');
    if (tnav) tnav.addEventListener('click', function (ev) { ev.preventDefault(); renderTarotList(); });
  }
  renderHome();
})();
