/**
 * ROVE — Marketing site + App prototype (Feed → Detail → Book, Vibe)
 */

(function () {
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#nav-menu');
  const yearEl = document.getElementById('year');
  const marketingWrap = document.getElementById('marketing-wrap');
  const appWrap = document.getElementById('app-wrap');
  const appBack = document.getElementById('app-back');
  const appScreenTitle = document.getElementById('app-screen-title');
  const feedContainer = document.getElementById('feed-container');
  const experienceDetail = document.getElementById('experience-detail');
  const bookingPage = document.getElementById('booking-page');
  const vibeInterests = document.getElementById('vibe-interests');

  // Mock experiences (Thailand Life Swap style)
  const EXPERIENCES = [
    {
      id: '1',
      tag: 'Life Swap',
      title: 'Muay Thai training week',
      location: 'Chiang Mai, Thailand',
      gradient: 'linear-gradient(160deg, #0F172A 0%, #334155 50%, #64748B 100%)',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1598970605070e1e78e864e1f61b4602?w=800&q=80',
      description: 'Train with a local gym for 5 days. Morning runs, pad work, and technique sessions. Stay at your trainer’s guest room and eat where the fighters eat.',
      price: 549,
      priceLabel: '5-day package',
      itinerary: [
        '5 nights accommodation near the gym',
        'Daily Muay Thai sessions (2x)',
        'Breakfast included',
        'Gym gear provided',
        'Local guide for rest-day exploring'
      ]
    },
    {
      id: '2',
      tag: 'Life Swap',
      title: 'Rice farming & village life',
      location: 'Udon Thani, Thailand',
      gradient: 'linear-gradient(160deg, #14532d 0%, #166534 40%, #22c55e 100%)',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1528181309758-a8f0ab8b4c0a?w=800&q=80',
      description: 'Live and work on a family rice farm. Plant, harvest, and cook with the household. Evenings by the pond, weekend temple visits.',
      price: 499,
      priceLabel: '4-day package',
      itinerary: [
        '4 nights in family homestay',
        'Hands-on farming (half-days)',
        'All meals included',
        'Village temple & market visit',
        'Thai language basics'
      ]
    },
    {
      id: '3',
      tag: 'Life Swap',
      title: 'Temple stay & meditation',
      location: 'Chiang Rai, Thailand',
      gradient: 'linear-gradient(160deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80',
      description: 'A 3-day silent retreat at a working monastery. Morning alms, meditation sessions, and simple temple chores. No phone, no noise.',
      price: 399,
      priceLabel: '3-day package',
      itinerary: [
        '3 nights in temple lodging',
        'Guided meditation (2x daily)',
        'Vegetarian meals',
        'Alms round at dawn',
        'Dharma talk (optional)'
      ]
    },
    {
      id: '4',
      tag: 'Life Swap',
      title: 'Street food & night markets',
      location: 'Bangkok, Thailand',
      gradient: 'linear-gradient(160deg, #7c2d12 0%, #ea580c 40%, #f97316 100%)',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
      description: 'Cook and sell at a night market stall with a local vendor. Learn recipes, prep, and the hustle. Then eat your way through the rest of the market.',
      price: 429,
      priceLabel: '3-day experience',
      itinerary: [
        '3 nights in vendor’s neighborhood',
        '2 evenings at the stall (prep + sell)',
        'Market tour & cooking demo',
        'Meals from the stall',
        'Bangkok street food guide'
      ]
    },
    {
      id: '5',
      tag: 'Life Swap',
      title: 'Diving & island life',
      location: 'Krabi, Thailand',
      gradient: 'linear-gradient(160deg, #0e7490 0%, #06b6d4 50%, #67e8f9 100%)',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      description: 'Stay with a local dive crew. Morning dives, boat life, and beach evenings. Get certified or just explore the reef.',
      price: 599,
      priceLabel: '5-day package',
      itinerary: ['5 nights near the pier', '2 boat dives per day', 'Equipment included', 'Beach BBQ one night', 'Island hopping trip']
    },
    {
      id: '6',
      tag: 'Life Swap',
      title: 'Cooking with a Thai family',
      location: 'Phuket, Thailand',
      gradient: 'linear-gradient(160deg, #b45309 0%, #ea580c 50%, #fb923c 100%)',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      description: 'Learn to cook real Thai food in a family kitchen. Market run at dawn, then prep and cook together. Sit down for the feast.',
      price: 349,
      priceLabel: '3-day experience',
      itinerary: ['3 nights homestay', 'Daily market + cooking', 'All meals', 'Recipe booklet', 'Family dinner each night']
    },
    {
      id: '7',
      tag: 'Life Swap',
      title: 'Elephant sanctuary volunteer',
      location: 'Chiang Mai, Thailand',
      gradient: 'linear-gradient(160deg, #1e3a5f 0%, #475569 60%, #94a3b8 100%)',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1bc7?w=800&q=80',
      description: 'Spend a week at an ethical sanctuary. Feed, bathe, and walk with rescued elephants. No riding—just being with them.',
      price: 479,
      priceLabel: '4-day package',
      itinerary: ['4 nights on-site', 'Daily care activities', 'Meals included', 'Education sessions', 'Free time to explore']
    },
    {
      id: '8',
      tag: 'Life Swap',
      title: 'Monk for a week',
      location: 'Ayutthaya, Thailand',
      gradient: 'linear-gradient(160deg, #422006 0%, #78350f 40%, #a16207 100%)',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1548013146-7243a694a126?w=800&q=80',
      description: 'Live as a temporary monk: morning alms, chanting, meditation, and temple duties. A rare glimpse into monastic life.',
      price: 299,
      priceLabel: '5-day retreat',
      itinerary: ['5 nights at temple', 'Alms round at dawn', 'Meditation 2x daily', 'Vegetarian meals', 'Orange robe provided']
    },
    {
      id: '9',
      tag: 'Life Swap',
      title: 'Fishing village & longtail boats',
      location: 'Koh Lanta, Thailand',
      gradient: 'linear-gradient(160deg, #0c4a6e 0%, #0369a1 50%, #0ea5e9 100%)',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      description: 'Join a fishing family. Early morning catch, repair nets, and take the longtail out. Sunset on the pier every night.',
      price: 419,
      priceLabel: '4-day experience',
      itinerary: ['4 nights in village', 'Fishing trips included', 'All meals', 'Boat ride to nearby island', 'Local guide']
    },
    {
      id: '10',
      tag: 'Life Swap',
      title: 'Yoga & jungle retreat',
      location: 'Pai, Thailand',
      gradient: 'linear-gradient(160deg, #14532d 0%, #166534 40%, #22c55e 100%)',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      description: 'Morning yoga in the jungle, plant-based meals, and hammock time. Optional trekking and hot springs. Digital detox welcome.',
      price: 389,
      priceLabel: '4-day retreat',
      itinerary: ['4 nights eco-lodge', 'Daily yoga (2 sessions)', 'All meals', 'Hot springs visit', 'Jungle walk with guide']
    }
  ];

  const VIBE_INTERESTS = [
    'Adventure', 'Culture', 'Food', 'Fitness', 'Nature', 'Wellness',
    'Photography', 'Music', 'Art', 'Spirituality', 'Off-grid', 'Social'
  ];

  // ——— Marketing: footer year, sticky header, mobile nav ———
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function updateHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      nav.hidden = expanded;
      document.body.style.overflow = expanded ? '' : 'hidden';
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        const href = link.getAttribute('href') || '';
        if (href.startsWith('#') && href.length > 1) {
          navToggle.setAttribute('aria-expanded', 'false');
          nav.hidden = true;
          document.body.style.overflow = '';
        }
      });
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav && !nav.hidden) {
      navToggle.setAttribute('aria-expanded', 'false');
      nav.hidden = true;
      document.body.style.overflow = '';
    }
  });

  // ——— Auth state (simulated, session-scoped) ———
  var authUser = null;
  try {
    var _stored = sessionStorage.getItem('rove_user');
    if (_stored) authUser = JSON.parse(_stored);
  } catch (e) {}

  function login(user) {
    authUser = user;
    try { sessionStorage.setItem('rove_user', JSON.stringify(user)); } catch (e) {}
    updateBottomNav();
  }
  function logout() {
    authUser = null;
    try { sessionStorage.removeItem('rove_user'); } catch (e) {}
    updateBottomNav();
    window.location.hash = '#/welcome';
  }

  function updateBottomNav() {
    var navSignin = document.getElementById('nav-signin');
    var navJoin = document.getElementById('nav-join');
    var navProfile = document.getElementById('nav-profile');
    var navBook = document.getElementById('nav-book');
    if (authUser) {
      if (navSignin) navSignin.hidden = true;
      if (navJoin) navJoin.hidden = true;
      if (navProfile) navProfile.hidden = false;
      if (navBook) navBook.hidden = false;
    } else {
      if (navSignin) navSignin.hidden = false;
      if (navJoin) navJoin.hidden = false;
      if (navProfile) navProfile.hidden = true;
      if (navBook) navBook.hidden = true;
    }
  }

  // ——— App: hash routing ———
  const APP_ROUTES = ['welcome', 'feed', 'experience', 'book', 'vibe', 'register', 'signin', 'profile'];

  function getRoute() {
    var hash = (window.location.hash || '').slice(1);
    var parts = hash.split('/').filter(Boolean);
    return { screen: parts[0] || '', id: parts[1] || null };
  }

  function isAppRoute() {
    const r = getRoute();
    return APP_ROUTES.indexOf(r.screen) !== -1;
  }

  function showMarketing() {
    if (marketingWrap) marketingWrap.classList.remove('app-hidden');
    if (appWrap) appWrap.hidden = true;
    document.body.classList.remove('app-mode');
  }

  function showApp(screen, id) {
    if (marketingWrap) marketingWrap.classList.add('app-hidden');
    if (appWrap) appWrap.hidden = false;
    document.body.classList.add('app-mode');

    // Auth gate: non-auth users hitting feed/vibe/profile go to welcome
    var guestGated = ['feed', 'vibe', 'profile'];
    if (!authUser && guestGated.indexOf(screen) !== -1) {
      window.location.hash = '#/welcome';
      return;
    }

    document.querySelectorAll('.app-screen').forEach(function (el) { el.hidden = true; });
    document.querySelectorAll('.app-nav-item').forEach(function (el) {
      el.classList.remove('active');
      if (el.getAttribute('data-screen') === screen) el.classList.add('active');
    });

    var screenEl = document.getElementById('screen-' + screen);
    if (screenEl) screenEl.hidden = false;

    var isWelcome = screen === 'welcome';
    var isAuth = screen === 'register' || screen === 'signin';
    var isFullscreen = isWelcome || isAuth;

    // Header: hide on welcome, go dark on auth
    var appHeader = document.querySelector('.app-header');
    if (appHeader) {
      appHeader.hidden = isWelcome;
      if (isAuth) appHeader.classList.add('app-header-dark');
      else appHeader.classList.remove('app-header-dark');
    }

    // Bottom nav: hide on welcome/auth screens
    var bottomNav = document.getElementById('app-bottom-nav');
    if (bottomNav) bottomNav.hidden = isFullscreen;

    // Back button
    if (appBack) {
      if (isWelcome || screen === 'feed' || screen === 'vibe' || screen === 'profile') {
        appBack.hidden = true;
      } else if (isAuth) {
        appBack.hidden = false;
        appBack.href = '#/welcome';
      } else {
        appBack.hidden = false;
        if (screen === 'experience') appBack.href = '#/feed';
        else if (screen === 'book' && id) appBack.href = '#/experience/' + id;
      }
    }

    var titles = { welcome: '', feed: 'Feed', experience: 'Experience', book: 'Book', vibe: 'Vibe', register: 'Sign up', signin: 'Log in', profile: 'Profile' };
    if (appScreenTitle) appScreenTitle.textContent = titles[screen] !== undefined ? titles[screen] : '';

    updateBottomNav();

    // Logo link: go to feed if logged in, welcome if not
    var logoLink = document.getElementById('app-logo-link');
    if (logoLink) logoLink.href = authUser ? '#/feed' : '#/welcome';

    if (screen === 'welcome') initWelcome();
    else if (screen === 'feed') renderFeed();
    else if (screen === 'experience' && id) renderExperience(id);
    else if (screen === 'book' && id) renderBooking(id);
    else if (screen === 'vibe') renderVibe();
    else if (screen === 'register') initRegister();
    else if (screen === 'signin') initSignIn();
    else if (screen === 'profile') renderProfile();
  }

  function applyRoute() {
    var r = getRoute();
    if (!r.screen) {
      // No hash — show marketing landing page
      showMarketing();
      return;
    }
    if (isAppRoute()) {
      if (r.screen === 'experience' && r.id) showApp('experience', r.id);
      else if (r.screen === 'book' && r.id) showApp('book', r.id);
      else showApp(r.screen, r.id);
    } else {
      showMarketing();
    }
  }

  window.addEventListener('hashchange', applyRoute);
  applyRoute();

  // ——— Welcome screen ———
  var welcomeInitialized = false;
  function initWelcome() {
    if (welcomeInitialized) return;
    welcomeInitialized = true;
    var guestBtn = document.getElementById('btn-guest');
    if (guestBtn) {
      guestBtn.addEventListener('click', function () {
        login({ name: 'Guest', email: '', isGuest: true });
        window.location.hash = '#/feed';
      });
    }
  }

  // ——— Render Feed ———
  function renderFeed() {
    if (!feedContainer) return;
    feedContainer.innerHTML = EXPERIENCES.map(function (exp) {
      var videoHtml = exp.videoUrl
        ? '<video class="feed-card-video" muted loop playsinline preload="metadata" data-feed-video aria-hidden="true"' +
            (exp.posterUrl ? ' poster="' + exp.posterUrl + '"' : '') + '>' +
            '<source src="' + exp.videoUrl + '" type="video/mp4">' +
          '</video>'
        : '';
      var bgStyle = exp.videoUrl ? '' : ' style="background:' + exp.gradient + '"';
      return (
        '<a href="#/experience/' + exp.id + '" class="feed-card">' +
          videoHtml +
          '<div class="feed-card-bg"' + bgStyle + '></div>' +
          '<span class="feed-card-play" aria-hidden="true">▶</span>' +
          '<div class="feed-card-content">' +
            '<span class="feed-card-tag">' + exp.tag + '</span>' +
            '<h2 class="feed-card-title">' + exp.title + '</h2>' +
            '<span class="feed-card-meta">' + exp.location + ' · From $' + exp.price + '</span>' +
          '</div>' +
        '</a>'
      );
    }).join('');

    // Play video when card is in view (TikTok-style)
    var cards = feedContainer.querySelectorAll('.feed-card');
    var observer = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target.querySelector('[data-feed-video]');
        if (!video) return;
        if (entry.isIntersecting) {
          video.play().catch(function () {});
        } else {
          video.pause();
        }
      });
    }, { root: null, rootMargin: '0px', threshold: 0.5 }) : null;
    cards.forEach(function (card) {
      if (observer) observer.observe(card);
    });
  }

  // ——— Render Experience detail ———
  function renderExperience(id) {
    const exp = EXPERIENCES.find(function (e) { return e.id === id; });
    if (!experienceDetail || !exp) return;
    experienceDetail.innerHTML =
      '<span class="exp-tag">' + exp.tag + '</span>' +
      '<h1 class="exp-title">' + exp.title + '</h1>' +
      '<p class="exp-desc">' + exp.description + '</p>' +
      '<p class="exp-price">$' + exp.price + ' <span>' + exp.priceLabel + '</span></p>' +
      '<a href="#/book/' + exp.id + '" class="exp-book-btn">Book this</a>';
  }

  // ——— Render Booking page ———
  function renderBooking(id) {
    const exp = EXPERIENCES.find(function (e) { return e.id === id; });
    if (!bookingPage || !exp) return;
    const listItems = exp.itinerary.map(function (item) {
      return '<li>' + item + '</li>';
    }).join('');
    bookingPage.innerHTML =
      '<h2 class="book-title">' + exp.title + '</h2>' +
      '<p class="book-package">' + exp.priceLabel + '</p>' +
      '<p class="book-price">$' + exp.price + '</p>' +
      '<ul class="book-itinerary">' + listItems + '</ul>' +
      '<button type="button" class="book-reserve" id="book-reserve-btn">Reserve</button>' +
      '<a href="#/experience/' + exp.id + '" class="book-back">← Back to experience</a>';

    const btn = document.getElementById('book-reserve-btn');
    if (btn) {
      btn.addEventListener('click', function () {
        var msg = 'Prototype: Reserved "' + exp.title + '". In the real app this would confirm your booking.';
        alert(msg);
      });
    }
  }

  // ——— Vibe: energy + interests ———
  function renderVibe() {
    if (!vibeInterests) return;
    vibeInterests.innerHTML = VIBE_INTERESTS.map(function (label) {
      return '<button type="button" class="vibe-chip" data-interest="' + label.toLowerCase() + '">' + label + '</button>';
    }).join('');

    vibeInterests.querySelectorAll('.vibe-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        this.classList.toggle('active');
      });
    });
  }

  document.querySelectorAll('.vibe-energy .vibe-chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.vibe-energy .vibe-chip').forEach(function (c) { c.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  // ——— Profile screen ———
  function renderProfile() {
    var user = authUser || {};
    var nameEl = document.getElementById('profile-name');
    var emailEl = document.getElementById('profile-email');
    var avatarEl = document.getElementById('profile-avatar');
    if (nameEl) nameEl.textContent = user.isGuest ? 'Guest' : (user.name || 'Rover');
    if (emailEl) emailEl.textContent = user.email || (user.isGuest ? 'Browsing as guest' : '');
    if (avatarEl) avatarEl.textContent = user.isGuest ? 'G' : ((user.name || 'R')[0].toUpperCase());

    var signoutBtn = document.getElementById('btn-signout');
    if (signoutBtn && !signoutBtn._wired) {
      signoutBtn._wired = true;
      signoutBtn.addEventListener('click', function () { logout(); });
    }
    var editBtn = document.getElementById('btn-edit-profile');
    if (editBtn && !editBtn._wired) {
      editBtn._wired = true;
      editBtn.addEventListener('click', function () { alert('Edit profile coming soon!'); });
    }
    var notifBtn = document.getElementById('btn-notifications');
    if (notifBtn && !notifBtn._wired) {
      notifBtn._wired = true;
      notifBtn.addEventListener('click', function () { alert('Notifications coming soon!'); });
    }
  }

  // ——— Register form (dark theme, Phase 1–2) ———
  var registerInitialized = false;
  function initRegister() {
    const form = document.getElementById('register-form');
    if (!form) return;
    if (registerInitialized) return;
    registerInitialized = true;

    var first = document.getElementById('reg-first');
    var last = document.getElementById('reg-last');
    var email = document.getElementById('reg-email');
    var phone = document.getElementById('reg-phone');
    var password = document.getElementById('reg-password');
    var confirm = document.getElementById('reg-confirm');
    var terms = document.getElementById('reg-terms');
    var submitBtn = document.getElementById('reg-submit');
    var formError = document.getElementById('reg-form-error');
    var dismissError = document.getElementById('reg-dismiss-error');
    var passwordToggle = document.getElementById('reg-password-toggle');
    var confirmToggle = document.getElementById('reg-confirm-toggle');
    var confirmMatch = document.getElementById('reg-confirm-match');
    var strengthEl = document.getElementById('reg-password-strength');

    var touched = {};
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    function hasNumber(s) { return /\d/.test(s); }
    function hasLetter(s) { return /[a-zA-Z]/.test(s); }

    function setError(input, message) {
      var id = input.id + '-err';
      var errEl = document.getElementById(id);
      if (errEl) errEl.textContent = message;
      input.setAttribute('aria-invalid', 'true');
      input.classList.add('is-error');
      input.classList.remove('is-valid');
    }
    function clearError(input) {
      var id = input.id + '-err';
      var errEl = document.getElementById(id);
      if (errEl) errEl.textContent = '';
      input.setAttribute('aria-invalid', 'false');
      input.classList.remove('is-error');
    }
    function setValid(input) {
      clearError(input);
      input.classList.add('is-valid');
    }

    function validateFirst() {
      var v = first.value.trim();
      if (!v) { setError(first, 'First name is required'); return false; }
      setValid(first); return true;
    }
    function validateLast() {
      var v = last.value.trim();
      if (!v) { setError(last, 'Last name is required'); return false; }
      setValid(last); return true;
    }
    function validateEmail() {
      var v = email.value.trim();
      if (!v) { setError(email, 'Email is required'); return false; }
      if (!emailRe.test(v)) { setError(email, 'Email is invalid'); return false; }
      setValid(email); return true;
    }
    function validatePassword() {
      var v = password.value;
      if (!v) { setError(password, 'Password is required'); return false; }
      if (v.length < 8) { setError(password, 'Use at least 8 characters'); return false; }
      if (!hasNumber(v) || !hasLetter(v)) { setError(password, 'Include a number and a letter'); return false; }
      setValid(password); return true;
    }
    function validateConfirm() {
      var v = confirm.value;
      if (!v) { setError(confirm, 'Confirm your password'); return false; }
      if (v !== password.value) { setError(confirm, 'Passwords don\'t match'); return false; }
      setValid(confirm); return true;
    }
    function validateTerms() {
      if (!terms.checked) {
        var errEl = document.getElementById('reg-terms-err');
        if (errEl) errEl.textContent = 'You must agree to continue';
        terms.setAttribute('aria-invalid', 'true');
        return false;
      }
      var errEl = document.getElementById('reg-terms-err');
      if (errEl) errEl.textContent = '';
      terms.setAttribute('aria-invalid', 'false');
      return true;
    }

    function updateConfirmMatch() {
      if (!confirm.value) { confirmMatch.textContent = ''; return; }
      if (confirm.value === password.value) {
        confirmMatch.textContent = 'Passwords match';
        clearError(confirm);
        confirm.classList.add('is-valid');
      } else {
        confirmMatch.textContent = '';
        if (touched['reg-confirm']) setError(confirm, 'Passwords don\'t match');
      }
    }
    function updateStrength() {
      var v = password.value;
      if (!v) { strengthEl.textContent = ''; return; }
      var hasNum = hasNumber(v), hasLet = hasLetter(v), len = v.length;
      var strong = len >= 10 && hasNum && hasLet;
      var fair = len >= 8 && (hasNum || hasLet);
      strengthEl.textContent = strong ? 'Strong' : fair ? 'Fair' : 'Weak';
    }

    [first, last, email, password, confirm].forEach(function (input) {
      input.addEventListener('blur', function () {
        touched[input.id] = true;
        if (input === first) validateFirst();
        else if (input === last) validateLast();
        else if (input === email) validateEmail();
        else if (input === password) { validatePassword(); updateStrength(); }
        else if (input === confirm) { updateConfirmMatch(); validateConfirm(); }
      });
    });
    password.addEventListener('input', function () { updateStrength(); updateConfirmMatch(); });
    confirm.addEventListener('input', updateConfirmMatch);

    if (passwordToggle) {
      passwordToggle.addEventListener('click', function () {
        var isPass = password.type === 'password';
        password.type = isPass ? 'text' : 'password';
        passwordToggle.setAttribute('aria-label', isPass ? 'Hide password' : 'Show password');
      });
    }
    if (confirmToggle) {
      confirmToggle.addEventListener('click', function () {
        var isPass = confirm.type === 'password';
        confirm.type = isPass ? 'text' : 'password';
        confirmToggle.setAttribute('aria-label', isPass ? 'Hide password' : 'Show password');
      });
    }

    if (dismissError && formError) {
      dismissError.addEventListener('click', function () { formError.hidden = true; });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      touched = { 'reg-first': true, 'reg-last': true, 'reg-email': true, 'reg-password': true, 'reg-confirm': true };
      var ok = validateFirst() && validateLast() && validateEmail() && validatePassword() && validateConfirm() && validateTerms();
      if (!ok) {
        var firstErr = form.querySelector('.form-error');
        if (firstErr && firstErr.textContent) form.querySelector('.form-input.is-error')?.focus();
        return;
      }
      formError.hidden = true;
      submitBtn.disabled = true;
      submitBtn.classList.add('is-loading');
      setTimeout(function () {
        if (Math.random() > 0.85) {
          formError.hidden = false;
          submitBtn.disabled = false;
          submitBtn.classList.remove('is-loading');
          return;
        }
        var userName = (first.value.trim() + ' ' + last.value.trim()).trim();
        login({ name: userName || 'Rover', email: email.value.trim(), isGuest: false });
        window.location.hash = '#/feed';
      }, 1200);
    });

    document.getElementById('btn-google')?.addEventListener('click', function () {
      login({ name: 'Google User', email: 'user@gmail.com', isGuest: false });
      window.location.hash = '#/feed';
    });
    document.getElementById('btn-github')?.addEventListener('click', function () {
      login({ name: 'GitHub User', email: 'user@github.com', isGuest: false });
      window.location.hash = '#/feed';
    });
    document.getElementById('btn-apple')?.addEventListener('click', function () {
      login({ name: 'Apple User', email: 'user@icloud.com', isGuest: false });
      window.location.hash = '#/feed';
    });
  }

  // ——— Sign in form (dark theme, validation + toggle + loading) ———
  var signinInitialized = false;
  function initSignIn() {
    var form = document.getElementById('signin-form');
    if (!form) return;
    if (signinInitialized) return;
    signinInitialized = true;

    var emailInput = document.getElementById('signin-email');
    var passwordInput = document.getElementById('signin-password');
    var submitBtn = document.getElementById('signin-submit');
    var formError = document.getElementById('signin-form-error');
    var dismissError = document.getElementById('signin-dismiss-error');
    var pwToggle = document.getElementById('signin-password-toggle');
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var touched = {};

    function setErr(input, msg) {
      var errEl = document.getElementById(input.id + '-err');
      if (errEl) errEl.textContent = msg;
      input.setAttribute('aria-invalid', 'true');
      input.classList.add('is-error');
      input.classList.remove('is-valid');
    }
    function clearErr(input) {
      var errEl = document.getElementById(input.id + '-err');
      if (errEl) errEl.textContent = '';
      input.setAttribute('aria-invalid', 'false');
      input.classList.remove('is-error');
    }
    function setOk(input) { clearErr(input); input.classList.add('is-valid'); }

    function valEmail() {
      var v = emailInput.value.trim();
      if (!v) { setErr(emailInput, 'Email is required'); return false; }
      if (!emailRe.test(v)) { setErr(emailInput, 'Enter a valid email'); return false; }
      setOk(emailInput); return true;
    }
    function valPassword() {
      var v = passwordInput.value;
      if (!v) { setErr(passwordInput, 'Password is required'); return false; }
      setOk(passwordInput); return true;
    }

    emailInput.addEventListener('blur', function () { touched['signin-email'] = true; valEmail(); });
    passwordInput.addEventListener('blur', function () { touched['signin-password'] = true; valPassword(); });

    if (pwToggle) {
      pwToggle.addEventListener('click', function () {
        var isPass = passwordInput.type === 'password';
        passwordInput.type = isPass ? 'text' : 'password';
        pwToggle.setAttribute('aria-label', isPass ? 'Hide password' : 'Show password');
      });
    }
    if (dismissError && formError) {
      dismissError.addEventListener('click', function () { formError.hidden = true; });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      touched = { 'signin-email': true, 'signin-password': true };
      var ok = valEmail() && valPassword();
      if (!ok) { emailInput.classList.contains('is-error') ? emailInput.focus() : passwordInput.focus(); return; }
      if (formError) formError.hidden = true;
      submitBtn.disabled = true;
      submitBtn.classList.add('is-loading');
      setTimeout(function () {
        if (Math.random() > 0.9) {
          if (formError) formError.hidden = false;
          submitBtn.disabled = false;
          submitBtn.classList.remove('is-loading');
          return;
        }
        login({ name: emailInput.value.split('@')[0] || 'Rover', email: emailInput.value.trim(), isGuest: false });
        window.location.hash = '#/feed';
      }, 1000);
    });

    document.getElementById('btn-google-signin')?.addEventListener('click', function () {
      login({ name: 'Google User', email: 'user@gmail.com', isGuest: false });
      window.location.hash = '#/feed';
    });
    document.getElementById('btn-github-signin')?.addEventListener('click', function () {
      login({ name: 'GitHub User', email: 'user@github.com', isGuest: false });
      window.location.hash = '#/feed';
    });
    document.getElementById('btn-apple-signin')?.addEventListener('click', function () {
      login({ name: 'Apple User', email: 'user@icloud.com', isGuest: false });
      window.location.hash = '#/feed';
    });
  }
})();
