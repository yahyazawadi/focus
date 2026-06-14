// ==========================================================================
// UX APEX // 10-WEEK ADVANCED ROADMAP CONTROLLER
// ==========================================================================

// --- CORE DATA SYSTEM ---
const roadmapData = [
    {
        week: 1,
        title: "Usability Heuristics & Interface Deconstruction",
        course: "Usability Evaluation in UX Design (University of Michigan)",
        courseUrl: "https://www.coursera.org/learn/usability-evaluation-ux-design",
        problemSolved: "The 'Looks Nice But Doesn't Work' Syndrome. Replaces design opinions with objective human cognitive laws.",
        studyDays: {
            hours: 20,
            description: "Deep dive into human cognitive processing limitations, mental models, visual processing patterns, and system feedback paradigms. Memorize and extract the mechanics behind Nielsen’s 10 Usability Heuristics."
        },
        doDays: {
            hours: 22,
            description: "Choose a highly broken, complex live platform. Conduct an industry-grade Heuristic Evaluation, mapping every single page interface against cognitive laws and writing a detailed violation severity brief."
        }
    },
    {
        week: 2,
        title: "Nested Auto Layout & Fluid Constraints",
        course: "Figma Advanced Auto Layout & Responsive Systems",
        courseUrl: "https://www.figma.com/resource-library/design-basics/",
        problemSolved: "Broken Responsiveness & Dev Friction. Replaces arbitrary resizing with rigid mathematical containers.",
        studyDays: {
            hours: 20,
            description: "Master the Figma auto-layout engine, nested constraints, spatial grids (4px/8px), absolute positioning within layouts, min/max widths, and responsive text wrapping."
        },
        doDays: {
            hours: 22,
            description: "Take 3 highly complex web pages (e.g., Salesforce Dashboard, Airbnb Search, Slack UI). Deconstruct and rebuild them in Figma using a single master container with fluid auto-layout structures."
        }
    },
    {
        week: 3,
        title: "Unbiased User Research & Insight Extraction",
        course: "User Research Methods and Frameworks (University of Michigan)",
        courseUrl: "https://www.coursera.org/learn/user-research-methods",
        problemSolved: "Designing for Yourself, Not the User. Removes internal bias to unveil genuine user needs.",
        studyDays: {
            hours: 20,
            description: "Learn non-leading interview techniques, open-ended question structures, user recruitment filters, cognitive bias in moderation, and ethnographic field study methods."
        },
        doDays: {
            hours: 22,
            description: "Draft a user research protocol for a custom application concept. Conduct 3 semi-structured moderated interviews. Synthesize the raw audio/transcripts into a thematic affinity map and user persona."
        }
    },
    {
        week: 4,
        title: "Information Architecture & Navigation Mapping",
        course: "Information Architecture & UX Structures (CalArts)",
        courseUrl: "https://www.coursera.org/learn/information-architecture-ux",
        problemSolved: "User Getting Lost. Replaces disorganized lists with structured information taxonomy.",
        studyDays: {
            hours: 20,
            description: "Study mental categorization paradigms, card sorting theory (open vs. closed), tree testing methodologies, flat vs. deep navigation hierarchies, and user search patterns."
        },
        doDays: {
            hours: 22,
            description: "Audit and restructure the navigation of a complex e-commerce or directory website. Deliver a revised site taxonomy tree, user task flows, and write a summary of a run closed tree test."
        }
    },
    {
        week: 5,
        title: "Advanced Component Variables & Logic",
        course: "Figma Variables, Expressions & Advanced Prototyping",
        courseUrl: "https://www.figma.com/resource-library/variables/",
        problemSolved: "Component Bloat & Maintenance Nightmares. Unifies elements through variables and variant properties.",
        studyDays: {
            hours: 20,
            description: "Understand Figma design variables, modes (light/dark/spacing), component variants, component properties, text overrides, component swapping, and nested instance overrides."
        },
        doDays: {
            hours: 22,
            description: "Build a scalable, production-grade text input field system. Consolidate default, hover, active, error, disabled, helper text, and left/right icon states into a single component using properties."
        }
    },
    {
        week: 6,
        title: "Micro-interactions & Motion Mechanics",
        course: "Prototyping & Motion Design in Figma",
        courseUrl: "https://www.figma.com/resource-library/prototyping/",
        problemSolved: "Static & Soulless Experiences. Connects pages through motion to preserve spatial context.",
        studyDays: {
            hours: 20,
            description: "Learn cognitive load of transition, timing functions (ease-in, ease-out, custom cubic-bezier), smart animate triggers, delay looping, dragging gestures, and choreographing multiple page elements."
        },
        doDays: {
            hours: 22,
            description: "Create an interactive application prototype featuring animated sidebar navigation, skeleton loading screens, success check animation, toast notifications, and slider controllers."
        }
    },
    {
        week: 7,
        title: "Usability Metrics & Qualitative Test Moderation",
        course: "Usability Testing & Metrics (University of Michigan)",
        courseUrl: "https://www.coursera.org/learn/usability-testing-ux-design",
        problemSolved: "Guessing Success Metrics. Replaces qualitative guesses with clear benchmarks.",
        studyDays: {
            hours: 20,
            description: "Study the System Usability Scale (SUS), Single Ease Question (SEQ), Task Completion Rate (TCR), Time on Task (ToT), and error rates."
        },
        doDays: {
            hours: 22,
            description: "Run moderated usability tests on Week 6 prototype. Test 3 users, compute overall SUS score, map Task Completion Rates, and detail a task-by-task usability issue severity log."
        }
    },
    {
        week: 8,
        title: "Data-Driven Optimization & Iteration Funnels",
        course: "Quantitative User Experience Research (University of Michigan)",
        courseUrl: "https://www.coursera.org/learn/quantitative-user-experience-research",
        problemSolved: "Blind Iterations. Uses live behavioral telemetry to steer design modifications.",
        studyDays: {
            hours: 20,
            description: "Study A/B testing principles, statistical significance, heatmaps, scrollmaps, user session recording analysis, conversion funnels, and click-through rates."
        },
        doDays: {
            hours: 22,
            description: "Audit a live conversion funnel. Draft a detailed A/B test proposal: state the null/alternative hypotheses, design the wireframe variant, and map out the analytics event tracking schema."
        }
    },
    {
        week: 9,
        title: "Scalable Design Systems & Semantic Tokens",
        course: "Creating & Organizing Design Systems in Figma",
        courseUrl: "https://www.figma.com/resource-library/design-systems/",
        problemSolved: "Visual Inconsistency. Standardizes design language into a single source of truth.",
        studyDays: {
            hours: 20,
            description: "Study design system scaling, tokens hierarchy (global/primitive vs. semantic alias vs. component override), dark mode logic, multi-brand themes, and component governance."
        },
        doDays: {
            hours: 20,
            description: "Construct a complete design system for a mobile application including semantic variables, type scales, buttons, inputs, headers, and grid containers, featuring both Light and Dark mode variables."
        }
    },
    {
        week: 10,
        title: "Dev Handoff & Accessibility Compliance",
        course: "Accessibility Fundamentals (Microsoft)",
        courseUrl: "https://learn.microsoft.com/en-us/training/paths/accessibility-fundamentals/",
        problemSolved: "Designs That Die in Dev. Ensures visual mockups match high-performance, accessible code.",
        studyDays: {
            hours: 20,
            description: "Study Web Content Accessibility Guidelines (WCAG 2.2AA/AAA), color contrast formulas, keyboard focus state design, screen reader header hierarchy, aria roles, and redlining specifications."
        },
        doDays: {
            hours: 20,
            description: "Run accessibility audit on Week 9 system. Annotate Figma design with absolute dev specs: spacing tokens, font weights, component properties, border radii, and exact keyboard focus flows."
        }
    }
];

const quotes = [
    { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "Good design is as little design as possible.", author: "Dieter Rams" },
    { text: "If you think good design is expensive, you should look at the cost of bad design.", author: "Ralf Speth" },
    { text: "Rules are what the artist breaks; the memorable never emerges from a formula.", author: "Bill Bernbach" },
    { text: "Focus is a matter of deciding what things you're not going to do.", author: "John Carmack" },
    { text: "The details are not the details. They make the design.", author: "Charles Eames" },
    { text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" }
];

// --- APP STATE MANAGER ---
let state = {
    checkedTasks: {}, // { 'w1_study': true, 'w1_do': false }
    customSubtasks: {}, // { 'w1': [{ id: 1, text: 'abc', completed: false }] }
    taskNotes: {}, // { 'w1_study': 'text note' }
    streakCount: 0,
    lastActiveDate: null,
    currentTheme: 'deep-space',
    
    // Focus space state
    activeFocusTask: {
        id: null, // 'w1_study' or custom subtask ID
        title: 'No Task Selected',
        desc: 'Select a task checklist item from the roadmap to focus on it here.'
    },
    timer: {
        minutesRemaining: 25,
        secondsRemaining: 0,
        durationMinutes: 25,
        mode: 'focus', // 'focus' | 'break'
        isRunning: false,
        timerInterval: null
    },
    breathing: {
        isRunning: false,
        intervalId: null,
        mode: 'inhale' // 'inhale' | 'hold' | 'exhale' | 'hold-out'
    }
};

// --- AUDIO SYNTHESIS SYSTEM ---
let audioCtx = null;
let rainNode = null;
let rainGain = null;
let whiteNode = null;
let whiteGain = null;
let humOsc1 = null;
let humOsc2 = null;
let humGain = null;

function initAudio() {
    if (audioCtx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
}

function playSuccessChime() {
    try {
        initAudio();
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.12); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.24); // G5

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.5);
    } catch (e) {
        console.warn('Audio synthesis failed', e);
    }
}

function playTimerFinishedSound() {
    try {
        initAudio();
        const now = audioCtx.currentTime;
        // Double chime
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, now); // A5
        osc.frequency.setValueAtTime(1320, now + 0.15); // E6
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start(now);
        osc.stop(now + 0.55);
    } catch (e) {
        console.warn(e);
    }
}

// Generate sound nodes
function toggleRainSound(play) {
    try {
        initAudio();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        if (!play) {
            if (rainNode) {
                rainNode.stop();
                rainNode.disconnect();
                rainNode = null;
            }
            return;
        }

        if (rainNode) return; // already playing

        // Synthesize brown noise for rain
        const bufferSize = audioCtx.sampleRate * 2;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            data[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = data[i];
            data[i] *= 3.5; // Gain compensation
        }

        rainNode = audioCtx.createBufferSource();
        rainNode.buffer = buffer;
        rainNode.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 900;

        rainGain = audioCtx.createGain();
        rainGain.gain.value = parseFloat(document.getElementById('sound-rain-volume').value);

        rainNode.connect(filter);
        filter.connect(rainGain);
        rainGain.connect(audioCtx.destination);

        rainNode.start();
    } catch (e) {
        console.warn(e);
    }
}

function toggleWhiteNoise(play) {
    try {
        initAudio();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        if (!play) {
            if (whiteNode) {
                whiteNode.stop();
                whiteNode.disconnect();
                whiteNode = null;
            }
            return;
        }

        if (whiteNode) return;

        const bufferSize = audioCtx.sampleRate * 2;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        whiteNode = audioCtx.createBufferSource();
        whiteNode.buffer = buffer;
        whiteNode.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1500; // soft high cut

        whiteGain = audioCtx.createGain();
        whiteGain.gain.value = parseFloat(document.getElementById('sound-white-volume').value);

        whiteNode.connect(filter);
        filter.connect(whiteGain);
        whiteGain.connect(audioCtx.destination);

        whiteNode.start();
    } catch (e) {
        console.warn(e);
    }
}

function toggleFocusHum(play) {
    try {
        initAudio();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        if (!play) {
            if (humOsc1) {
                humOsc1.stop();
                humOsc1.disconnect();
                humOsc1 = null;
            }
            if (humOsc2) {
                humOsc2.stop();
                humOsc2.disconnect();
                humOsc2 = null;
            }
            return;
        }

        if (humOsc1) return;

        humOsc1 = audioCtx.createOscillator();
        humOsc1.type = 'sine';
        humOsc1.frequency.value = 140; // Left Channel

        humOsc2 = audioCtx.createOscillator();
        humOsc2.type = 'sine';
        humOsc2.frequency.value = 148; // Right Channel -> 8Hz beat (Alpha waves)

        humGain = audioCtx.createGain();
        // Sine waves are loud, scale volume down significantly
        humGain.gain.value = parseFloat(document.getElementById('sound-waves-volume').value) * 0.12;

        const panner1 = audioCtx.createStereoPanner ? audioCtx.createStereoPanner() : null;
        if (panner1) {
            const panLeft = audioCtx.createStereoPanner();
            panLeft.pan.value = -1;
            const panRight = audioCtx.createStereoPanner();
            panRight.pan.value = 1;

            humOsc1.connect(panLeft);
            panLeft.connect(humGain);

            humOsc2.connect(panRight);
            panRight.connect(humGain);
        } else {
            humOsc1.connect(humGain);
            humOsc2.connect(humGain);
        }

        humGain.connect(audioCtx.destination);

        humOsc1.start();
        humOsc2.start();
    } catch (e) {
        console.warn(e);
    }
}

// --- LOCAL STORAGE & PERSISTENCE ---
function saveToLocalStorage() {
    localStorage.setItem('ux_apex_state', JSON.stringify({
        checkedTasks: state.checkedTasks,
        customSubtasks: state.customSubtasks,
        taskNotes: state.taskNotes,
        streakCount: state.streakCount,
        lastActiveDate: state.lastActiveDate,
        currentTheme: state.currentTheme,
        activeFocusTask: state.activeFocusTask
    }));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('ux_apex_state');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.checkedTasks = parsed.checkedTasks || {};
            state.customSubtasks = parsed.customSubtasks || {};
            state.taskNotes = parsed.taskNotes || {};
            state.streakCount = parsed.streakCount || 0;
            state.lastActiveDate = parsed.lastActiveDate || null;
            state.currentTheme = parsed.currentTheme || 'deep-space';
            state.activeFocusTask = parsed.activeFocusTask || {
                id: null,
                title: 'No Task Selected',
                desc: 'Select a task checklist item from the roadmap to focus on it here.'
            };
        } catch (e) {
            console.error('Error reading localStorage', e);
        }
    }
    
    // Check if the streak is still valid before rendering
    checkStreakValidity();
    
    // Apply theme on load
    document.documentElement.setAttribute('data-theme', state.currentTheme);
    document.getElementById('theme-select').value = state.currentTheme;
    updateStreakDisplay();
}

// --- CONFETTI PHYSICS ENGINE ---
function triggerConfetti(x, y) {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#8b5cf6', '#06b6d4', '#10b981', '#ec4899', '#f59e0b'];
    
    // Spawn 65 particles
    for (let i = 0; i < 65; i++) {
        particles.push({
            x: x || window.innerWidth / 2,
            y: y || window.innerHeight / 2,
            vx: (Math.random() - 0.5) * 14,
            vy: (Math.random() - 0.7) * 14 - 6,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 12,
            opacity: 1
        });
    }
    
    let animationId;
    function renderFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let hasActiveParticles = false;
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.45; // Gravity
            p.vx *= 0.98; // Friction
            p.rotation += p.rotationSpeed;
            p.opacity -= 0.016; // Fade out rate
            
            if (p.opacity > 0) {
                hasActiveParticles = true;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                ctx.restore();
            }
        });
        
        if (hasActiveParticles) {
            animationId = requestAnimationFrame(renderFrame);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationId);
        }
    }
    renderFrame();
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = '⚡';
    if (type === 'success') icon = '🏆';
    if (type === 'info') icon = 'ℹ️';
    
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-message">${message}</span>`;
    container.appendChild(toast);
    
    // Auto-remove after animation
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

// --- ROADMAP TIMELINE GENERATION ---
function generateRoadmapUI(filter = 'all') {
    const container = document.getElementById('weeks-container');
    container.innerHTML = '';
    
    roadmapData.forEach(item => {
        const weekNum = item.week;
        const studyId = `w${weekNum}_study`;
        const doId = `w${weekNum}_do`;
        
        const isStudyDone = state.checkedTasks[studyId] === true;
        const isDoDone = state.checkedTasks[doId] === true;
        
        // Calculate progress completion details
        const customList = state.customSubtasks[`w${weekNum}`] || [];
        const customTotal = customList.length;
        const customDone = customList.filter(t => t.completed).length;
        
        const totalMilestones = 2 + customTotal;
        const doneMilestones = (isStudyDone ? 1 : 0) + (isDoDone ? 1 : 0) + customDone;
        const percent = totalMilestones > 0 ? Math.round((doneMilestones / totalMilestones) * 100) : 0;
        
        // Filter verification
        if (filter === 'completed' && percent < 100) return;
        if (filter === 'pending' && percent === 100) return;
        
        // Build card HTML
        const card = document.createElement('div');
        card.className = `week-card ${percent === 100 ? 'week-completed' : ''}`;
        card.id = `week-card-${weekNum}`;
        
        // SVG circle dashoffset computation: circumference = 2 * PI * r = 125.66
        const strokeOffset = 125.66 - (125.66 * percent) / 100;
        
        // Custom subtasks HTML
        let subtasksListHtml = '';
        customList.forEach(sub => {
            subtasksListHtml += `
                <div class="custom-subtask-item ${sub.completed ? 'subtask-completed' : ''}" id="subtask-container-${sub.id}">
                    <div class="subtask-left">
                        <label class="custom-checkbox-container">
                            <input type="checkbox" data-week="${weekNum}" data-subtask-id="${sub.id}" class="subtask-checkbox" ${sub.completed ? 'checked' : ''}>
                            <span class="checkmark"></span>
                        </label>
                        <span class="subtask-text-span">${sub.text}</span>
                    </div>
                    <button class="btn-delete-subtask" data-week="${weekNum}" data-subtask-id="${sub.id}">✕</button>
                </div>
            `;
        });
        
        card.innerHTML = `
            <div class="week-header" data-week="${weekNum}">
                <span class="week-badge">Week ${weekNum}</span>
                <div class="week-header-info">
                    <h2 class="week-title">${item.title}</h2>
                    <p class="week-problem-solved"><strong>Focus Solve:</strong> ${item.problemSolved}</p>
                </div>
                <div class="week-progress-circle">
                    <svg class="week-progress-svg" width="44" height="44">
                        <circle class="week-circle-bg" cx="22" cy="22" r="20"></circle>
                        <circle class="week-circle-fill" id="circle-fill-${weekNum}" cx="22" cy="22" r="20" style="stroke-dashoffset: ${strokeOffset}"></circle>
                    </svg>
                    <div class="week-progress-text" id="week-progress-val-${weekNum}">${percent}%</div>
                </div>
                <svg class="accordion-arrow" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            
            <div class="week-body" id="week-body-${weekNum}">
                <div class="week-body-content">
                    
                    <!-- Syllabus Course link banner -->
                    <div class="course-info-banner">
                        <div class="course-meta">
                            <span class="course-tag">Verified Course</span>
                            <strong>${item.course}</strong>
                        </div>
                        <a href="${item.courseUrl}" target="_blank" class="link-btn">
                            <span>Open Syllabus Link</span>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round"/>
                            </svg>
                        </a>
                    </div>
                    
                    <!-- Tasks grid -->
                    <div class="tasks-grid">
                        
                        <!-- STUDY DAYS TASK CARD -->
                        <div class="task-item-card ${isStudyDone ? 'task-completed' : ''}" id="card-${studyId}">
                            <div class="task-main-row">
                                <label class="custom-checkbox-container">
                                    <input type="checkbox" id="check-${studyId}" class="task-checkbox" data-task-id="${studyId}" ${isStudyDone ? 'checked' : ''}>
                                    <span class="checkmark"></span>
                                </label>
                                <div class="task-text-info">
                                    <div class="task-title-row">
                                        <span class="task-type">📖 Study Milestone (3 Days)</span>
                                        <span class="task-hours-badge">${item.studyDays.hours} hrs</span>
                                    </div>
                                    <p class="task-desc">${item.studyDays.description}</p>
                                </div>
                            </div>
                            
                            <!-- Expandable Notes Area -->
                            <div class="notes-expander" id="notes-container-${studyId}">
                                <textarea class="notes-textarea" id="textarea-${studyId}" placeholder="Write study summaries, bookmarks or code references here...">${state.taskNotes[studyId] || ''}</textarea>
                            </div>
                            
                            <div class="task-footer-controls">
                                <button class="btn-task-action ${state.activeFocusTask.id === studyId ? 'active-focus-task' : ''}" data-action="focus" data-task-id="${studyId}" data-title="W${weekNum} Study: ${item.title}" data-desc="${item.studyDays.description.substring(0,80)}...">
                                    🎯 Focus Task
                                </button>
                                <button class="btn-task-action" data-action="notes" data-task-id="${studyId}">
                                    📝 Notes
                                </button>
                            </div>
                        </div>

                        <!-- DO DAYS PRACTICE CARD -->
                        <div class="task-item-card ${isDoDone ? 'task-completed' : ''}" id="card-${doId}">
                            <div class="task-main-row">
                                <label class="custom-checkbox-container">
                                    <input type="checkbox" id="check-${doId}" class="task-checkbox" data-task-id="${doId}" ${isDoDone ? 'checked' : ''}>
                                    <span class="checkmark"></span>
                                </label>
                                <div class="task-text-info">
                                    <div class="task-title-row">
                                        <span class="task-type">🛠️ Practice / Do Milestone (3 Days)</span>
                                        <span class="task-hours-badge">${item.doDays.hours} hrs</span>
                                    </div>
                                    <p class="task-desc">${item.doDays.description}</p>
                                </div>
                            </div>
                            
                            <!-- Expandable Notes Area -->
                            <div class="notes-expander" id="notes-container-${doId}">
                                <textarea class="notes-textarea" id="textarea-${doId}" placeholder="Link your Figma project file URL or outline study findings here...">${state.taskNotes[doId] || ''}</textarea>
                            </div>
                            
                            <div class="task-footer-controls">
                                <button class="btn-task-action ${state.activeFocusTask.id === doId ? 'active-focus-task' : ''}" data-action="focus" data-task-id="${doId}" data-title="W${weekNum} Practice: ${item.title}" data-desc="${item.doDays.description.substring(0,80)}...">
                                    🎯 Focus Task
                                </button>
                                <button class="btn-task-action" data-action="notes" data-task-id="${doId}">
                                    📝 Notes
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Sandbox custom sub-tasks within week -->
                    <div class="sandbox-subtasks">
                        <div class="sandbox-title-row">
                            <h4>Personal Milestones (Sandbox Sub-tasks)</h4>
                            <span class="text-muted small">${customDone}/${customTotal} Done</span>
                        </div>
                        
                        <div class="custom-subtask-list" id="custom-subtask-list-${weekNum}">
                            ${subtasksListHtml}
                        </div>
                        
                        <!-- Add Custom Goal Form -->
                        <form class="add-subtask-form" data-week="${weekNum}">
                            <input type="text" placeholder="Add custom Figma goal or sub-task for Week ${weekNum}..." required class="add-subtask-input" id="subtask-input-${weekNum}">
                            <button type="submit" class="btn-add-subtask">+ Add Goal</button>
                        </form>
                    </div>

                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// --- ROADMAP STATE CONTROLLERS ---
function toggleWeekAccordion(weekNum) {
    const card = document.getElementById(`week-card-${weekNum}`);
    const body = document.getElementById(`week-body-${weekNum}`);
    
    if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        body.style.maxHeight = '0';
    } else {
        // Collapse others first for nice focus accordion behavior
        document.querySelectorAll('.week-card.expanded').forEach(c => {
            c.classList.remove('expanded');
            c.querySelector('.week-body').style.maxHeight = '0';
        });
        
        card.classList.add('expanded');
        body.style.maxHeight = body.scrollHeight + 'px';
    }
}

function updateWeekPercentage(weekNum) {
    const item = roadmapData.find(d => d.week === weekNum);
    const studyId = `w${weekNum}_study`;
    const doId = `w${weekNum}_do`;
    
    const isStudyDone = state.checkedTasks[studyId] === true;
    const isDoDone = state.checkedTasks[doId] === true;
    
    const customList = state.customSubtasks[`w${weekNum}`] || [];
    const customTotal = customList.length;
    const customDone = customList.filter(t => t.completed).length;
    
    const totalMilestones = 2 + customTotal;
    const doneMilestones = (isStudyDone ? 1 : 0) + (isDoDone ? 1 : 0) + customDone;
    const percent = totalMilestones > 0 ? Math.round((doneMilestones / totalMilestones) * 100) : 0;
    
    // Update SVG circle
    const fillCircle = document.getElementById(`circle-fill-${weekNum}`);
    const textVal = document.getElementById(`week-progress-val-${weekNum}`);
    const card = document.getElementById(`week-card-${weekNum}`);
    
    if (fillCircle && textVal) {
        const strokeOffset = 125.66 - (125.66 * percent) / 100;
        fillCircle.style.strokeDashoffset = strokeOffset;
        textVal.textContent = `${percent}%`;
    }
    
    if (card) {
        if (percent === 100) {
            card.classList.add('week-completed');
        } else {
            card.classList.remove('week-completed');
        }
    }
    
    updateOverallStats();
}

function getElapsedWorkdayHours(today) {
    const start = new Date('2026-06-20T00:00:00');
    const end = new Date('2026-08-31T23:59:59');
    
    // Clear times for clean calendar date comparisons
    const startClean = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const endClean = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    const todayClean = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    if (todayClean < startClean) return 0;
    if (todayClean > endClean) return 416;
    
    let elapsedWorkdays = 0;
    let current = new Date(startClean);
    
    while (current < todayClean) {
        const dayOfWeek = current.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday
        if (dayOfWeek !== 5 && dayOfWeek !== 6) { // Not Friday, not Saturday
            elapsedWorkdays++;
        }
        current.setDate(current.getDate() + 1);
    }
    
    return Math.min(416, elapsedWorkdays * 8);
}

function updateOverallStats() {
    let totalEstimatedHours = 416; // Fixed total training hours
    let completedTasksCount = 0;
    let totalTasksCount = 20; // 2 per week * 10 weeks
    
    roadmapData.forEach(item => {
        const studyDone = state.checkedTasks[`w${item.week}_study`] === true;
        const doDone = state.checkedTasks[`w${item.week}_do`] === true;
        
        if (studyDone) {
            completedTasksCount++;
        }
        if (doDone) {
            completedTasksCount++;
        }
    });
    
    // Add custom subtasks stats
    let totalCustom = 0;
    let completedCustom = 0;
    Object.values(state.customSubtasks).forEach(list => {
        totalCustom += list.length;
        completedCustom += list.filter(t => t.completed).length;
    });
    
    const overallPercentage = Math.round((completedTasksCount / totalTasksCount) * 100);
    
    // Calculate elapsed real-time training hours
    const elapsedHours = getElapsedWorkdayHours(new Date());
    
    // Update Sidebar Elements
    document.getElementById('overall-percentage').textContent = `${overallPercentage}%`;
    document.getElementById('overall-progress-fill').style.width = `${overallPercentage}%`;
    document.getElementById('completed-hours-text').textContent = `${elapsedHours} / ${totalEstimatedHours} Hours`;
    document.getElementById('completed-tasks-text').textContent = `${completedTasksCount} / ${totalTasksCount} Tasks`;
    
    // Update Stats Tab Elements
    document.getElementById('stats-total-hours').textContent = `${elapsedHours} Hours`;
    document.getElementById('stats-completion-rate').textContent = `${overallPercentage}%`;
    document.getElementById('stats-custom-completed').textContent = `${completedCustom} Tasks`;
    
    // Calculate weeks completely finished (100%)
    let weeksUnlockedCount = 0;
    roadmapData.forEach(item => {
        const w = item.week;
        const s = state.checkedTasks[`w${w}_study`] === true;
        const d = state.checkedTasks[`w${w}_do`] === true;
        const custom = state.customSubtasks[`w${w}`] || [];
        const customAllDone = custom.every(t => t.completed);
        
        if (s && d && customAllDone) {
            weeksUnlockedCount++;
        }
    });
    document.getElementById('stats-weeks-unlocked').textContent = `${weeksUnlockedCount} / 10`;
    
    // Refresh Stats Completed Log
    generateCompletedLog();
}

function checkStreakValidity() {
    if (state.lastActiveDate === null) return;
    
    const today = new Date().toDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    // If the last active date is neither today nor yesterday, they missed a day; reset streak.
    if (state.lastActiveDate !== today && state.lastActiveDate !== yesterdayStr) {
        state.streakCount = 0;
        // Don't reset lastActiveDate yet; it will be overwritten when they next complete a task
        saveToLocalStorage();
    }
}

function updateStreakDate() {
    const today = new Date().toDateString();
    
    if (state.lastActiveDate === null) {
        state.streakCount = 1;
        state.lastActiveDate = today;
    } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();
        
        if (state.lastActiveDate === yesterdayStr) {
            state.streakCount += 1;
            state.lastActiveDate = today;
            const suffix = state.streakCount === 1 ? 'day' : 'days';
            showToast(`Awesome consistency! Streak extended to ${state.streakCount} ${suffix}! 🔥`, 'success');
        } else if (state.lastActiveDate !== today) {
            // Streak was broken or starting fresh today
            state.streakCount = 1;
            state.lastActiveDate = today;
        }
    }
    
    updateStreakDisplay();
    saveToLocalStorage();
}

function updateStreakDisplay() {
    const streakElement = document.getElementById('streak-count');
    if (streakElement) {
        const suffix = state.streakCount === 1 ? 'Day' : 'Days';
        streakElement.textContent = `🔥 ${state.streakCount} ${suffix}`;
    }
}

function generateCompletedLog() {
    const logList = document.getElementById('completed-log-list');
    logList.innerHTML = '';
    
    let itemsAdded = 0;
    
    roadmapData.forEach(item => {
        const studyId = `w${item.week}_study`;
        const doId = `w${item.week}_do`;
        
        if (state.checkedTasks[studyId]) {
            addLogItem(logList, `Study: ${item.title}`, `Week ${item.week}`, `${item.studyDays.hours} Hours`);
            itemsAdded++;
        }
        if (state.checkedTasks[doId]) {
            addLogItem(logList, `Practice: ${item.title}`, `Week ${item.week}`, `${item.doDays.hours} Hours`);
            itemsAdded++;
        }
    });
    
    // Custom subtasks completed log
    Object.keys(state.customSubtasks).forEach(weekKey => {
        const weekNum = weekKey.substring(1);
        const list = state.customSubtasks[weekKey] || [];
        list.forEach(sub => {
            if (sub.completed) {
                addLogItem(logList, sub.text, `Week ${weekNum} Custom`, 'Practice Goal');
                itemsAdded++;
            }
        });
    });
    
    if (itemsAdded === 0) {
        logList.innerHTML = `
            <div class="empty-log-state">
                <p class="text-muted">No completed milestones yet. Finish study blocks to unlock achievements!</p>
            </div>
        `;
    }
}

function addLogItem(container, title, weekDesc, badgeText) {
    const div = document.createElement('div');
    div.className = 'log-item';
    div.innerHTML = `
        <div class="log-item-details">
            <span class="log-item-title">${title}</span>
            <span class="log-item-week">${weekDesc}</span>
        </div>
        <span class="log-item-time">${badgeText}</span>
    `;
    container.appendChild(div);
}

// --- TIMER FUNCTIONALITY ---
function startTimer() {
    if (state.timer.isRunning) return;
    
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    state.timer.isRunning = true;
    document.getElementById('timer-play-pause').innerHTML = '<span>⏸</span>';
    document.getElementById('focus-active-badge').style.display = 'block';
    
    const durationMs = (state.timer.minutesRemaining * 60 + state.timer.secondsRemaining) * 1000;
    state.timer.endTime = Date.now() + durationMs;
    
    state.timer.timerInterval = setInterval(() => {
        const msRemaining = Math.max(0, state.timer.endTime - Date.now());
        const totalSeconds = Math.round(msRemaining / 1000);
        
        state.timer.minutesRemaining = Math.floor(totalSeconds / 60);
        state.timer.secondsRemaining = totalSeconds % 60;
        
        updateTimerDisplay();
        
        if (totalSeconds <= 0) {
            timerFinished();
        }
    }, 200);
    
    showToast('Focus session started! Deep focus mode active.', 'info');
}

function pauseTimer() {
    if (!state.timer.isRunning) return;
    
    state.timer.isRunning = false;
    clearInterval(state.timer.timerInterval);
    document.getElementById('timer-play-pause').innerHTML = '<span>▶</span>';
    document.getElementById('focus-active-badge').style.display = 'none';
    
    showToast('Focus timer paused.', 'info');
}

function resetTimer() {
    pauseTimer();
    state.timer.minutesRemaining = state.timer.durationMinutes;
    state.timer.secondsRemaining = 0;
    updateTimerDisplay();
}

function timerFinished() {
    pauseTimer();
    playTimerFinishedSound();
    
    if (state.timer.mode === 'focus') {
        showToast('Great job! Focus session completed. Take a break!', 'success');
        
        // Auto mark active focus task as completed if applicable
        if (state.activeFocusTask.id) {
            const taskId = state.activeFocusTask.id;
            
            // Is it a default task or custom subtask?
            if (taskId.startsWith('w')) {
                state.checkedTasks[taskId] = true;
                const checkbox = document.getElementById(`check-${taskId}`);
                if (checkbox) checkbox.checked = true;
                const card = document.getElementById(`card-${taskId}`);
                if (card) card.classList.add('task-completed');
                
                const wNum = parseInt(taskId.split('_')[0].substring(1));
                updateWeekPercentage(wNum);
            } else {
                // Custom subtask
                Object.keys(state.customSubtasks).forEach(weekKey => {
                    const list = state.customSubtasks[weekKey] || [];
                    const itemIndex = list.findIndex(t => t.id == taskId);
                    if (itemIndex > -1) {
                        list[itemIndex].completed = true;
                        const subCheckbox = document.querySelector(`input[data-subtask-id="${taskId}"]`);
                        if (subCheckbox) subCheckbox.checked = true;
                        const subCard = document.getElementById(`subtask-container-${taskId}`);
                        if (subCard) subCard.classList.add('subtask-completed');
                        
                        const wNum = parseInt(weekKey.substring(1));
                        updateWeekPercentage(wNum);
                    }
                });
            }
            triggerConfetti();
            updateStreakDate();
            saveToLocalStorage();
        }
        
        // Switch to short break preset automatically
        setTimerPreset(5, 'break');
    } else {
        showToast('Break finished! Ready to jump back to work?', 'info');
        setTimerPreset(25, 'focus');
    }
}

function setTimerPreset(minutes, mode) {
    pauseTimer();
    state.timer.durationMinutes = minutes;
    state.timer.minutesRemaining = minutes;
    state.timer.secondsRemaining = 0;
    state.timer.mode = mode;
    
    // Update visual preset state
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.getAttribute('data-time')) === minutes && btn.getAttribute('data-mode') === mode) {
            btn.classList.add('active');
        }
    });
    
    // Update theme clock tag
    const modeText = mode === 'focus' ? 'FOCUS SESSION' : 'RELAXATION BREAK';
    document.getElementById('timer-mode').textContent = modeText;
    
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = String(state.timer.minutesRemaining).padStart(2, '0');
    const secs = String(state.timer.secondsRemaining).padStart(2, '0');
    
    // Update text
    document.getElementById('timer-clock').textContent = `${mins}:${secs}`;
    document.title = `(${mins}:${secs}) UX APEX`;
    
    // Update SVG stroke-dashoffset: circumference = 565.48
    const totalSeconds = state.timer.durationMinutes * 60;
    const currentSeconds = state.timer.minutesRemaining * 60 + state.timer.secondsRemaining;
    const progressPercent = totalSeconds > 0 ? currentSeconds / totalSeconds : 0;
    
    const strokeDash = 565.48 * progressPercent;
    document.getElementById('timer-progress-fill').style.strokeDashoffset = 565.48 - strokeDash;
}

// --- GUIDED BREATHING BOX CONTROLLER ---
function toggleBreathing() {
    const ring = document.getElementById('breathing-ring-element');
    const status = document.getElementById('breathing-status');
    const btn = document.getElementById('breathing-toggle');
    
    if (state.breathing.isRunning) {
        // Stop breathing
        state.breathing.isRunning = false;
        clearInterval(state.breathing.intervalId);
        ring.className = 'breathing-ring';
        status.textContent = 'Breath Control';
        btn.textContent = 'Start Breathing Guide';
        btn.className = 'btn-primary';
    } else {
        // Start box breathing loop
        state.breathing.isRunning = true;
        btn.textContent = 'Stop Breathing Guide';
        btn.className = 'btn-secondary';
        
        let cycle = 0; // 0: inhale, 1: hold, 2: exhale, 3: hold-out
        
        function runBreathingCycle() {
            if (!state.breathing.isRunning) return;
            
            if (cycle === 0) {
                status.textContent = 'Inhale...';
                ring.className = 'breathing-ring inhale';
                cycle = 1;
            } else if (cycle === 1) {
                status.textContent = 'Hold breath...';
                cycle = 2;
            } else if (cycle === 2) {
                status.textContent = 'Exhale...';
                ring.className = 'breathing-ring exhale';
                cycle = 3;
            } else {
                status.textContent = 'Hold empty...';
                cycle = 0;
            }
        }
        
        runBreathingCycle(); // immediate run
        state.breathing.intervalId = setInterval(runBreathingCycle, 3500); // 3.5s transition
    }
}

function updateTrainingCountdown() {
    const countdownText = document.getElementById('training-countdown-text');
    const badge = document.getElementById('training-days-badge');
    if (!countdownText || !badge) return;
    
    const startDate = new Date('2026-06-20T00:00:00');
    const endDate = new Date('2026-08-31T23:59:59');
    const today = new Date();
    
    // Clear time parts for clean day difference math
    const startClean = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const endClean = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    const todayClean = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    const oneDayMs = 24 * 60 * 60 * 1000;
    
    if (todayClean < startClean) {
        const daysToStart = Math.round((startClean - todayClean) / oneDayMs);
        badge.textContent = `Starts Soon`;
        countdownText.textContent = `⏳ Starts in ${daysToStart} ${daysToStart === 1 ? 'day' : 'days'} (June 20)`;
    } else if (todayClean > endClean) {
        badge.textContent = `Completed`;
        countdownText.textContent = `🎉 Training ended on August 31, 2026`;
    } else {
        const totalDurationDays = Math.round((endClean - startClean) / oneDayMs) + 1;
        const elapsedDays = Math.round((todayClean - startClean) / oneDayMs) + 1;
        const remainingDays = totalDurationDays - elapsedDays;
        
        badge.textContent = `Day ${elapsedDays} / ${totalDurationDays}`;
        countdownText.textContent = `🏁 ${remainingDays} ${remainingDays === 1 ? 'day' : 'days'} remaining (ends Aug 31)`;
    }
}

// --- DOM EVENT LISTENERS & INITS ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initial State Loading
    loadFromLocalStorage();
    generateRoadmapUI();
    updateOverallStats();
    updateTrainingCountdown();
    
    // Set random focus quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('focus-quote').textContent = randomQuote.text;
    document.getElementById('focus-author').textContent = `— ${randomQuote.author}`;
    
    // Set active focus task UI display
    document.getElementById('focus-active-title').textContent = state.activeFocusTask.title;
    document.getElementById('focus-active-description').textContent = state.activeFocusTask.desc;
    
    // 2. Navigation Tab Click Handler
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Switch Menu state
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Switch Tab view visibility
            document.querySelectorAll('.tab-view').forEach(view => {
                view.classList.remove('active-view');
            });
            document.getElementById(`tab-${targetTab}`).classList.add('active-view');
            
            // Update Title
            const titlesMap = {
                'roadmap': { title: 'Syllabus Roadmap', subtitle: 'Master UX Design in 10 Weeks & 480 Study/Practice Hours' },
                'focus': { title: 'Focus Studio', subtitle: 'Isolate attention, track study hours, control breathing' },
                'stats': { title: 'Performance Stats', subtitle: 'View dashboard data analytics & complete milestone logs' }
            };
            document.getElementById('view-title').textContent = titlesMap[targetTab].title;
            document.getElementById('view-subtitle').textContent = titlesMap[targetTab].subtitle;
        });
    });
    
    // 3. Quick Focus toggle in Header
    document.getElementById('start-focus-shortcut').addEventListener('click', () => {
        document.querySelector('[data-tab="focus"]').click();
    });

    // 4. Accordion Toggle
    document.getElementById('weeks-container').addEventListener('click', (e) => {
        const header = e.target.closest('.week-header');
        if (header) {
            const weekNum = parseInt(header.getAttribute('data-week'));
            toggleWeekAccordion(weekNum);
        }
    });
    
    // 5. Checkboxes Change Event (Roadmap and Sub-tasks)
    document.getElementById('weeks-container').addEventListener('change', (e) => {
        // Handle Primary Task Checkbox
        if (e.target.classList.contains('task-checkbox')) {
            const taskId = e.target.getAttribute('data-task-id');
            const isChecked = e.target.checked;
            
            state.checkedTasks[taskId] = isChecked;
            
            const card = document.getElementById(`card-${taskId}`);
            if (isChecked) {
                card.classList.add('task-completed');
                playSuccessChime();
                triggerConfetti(e.clientX, e.clientY);
                updateStreakDate();
                showToast('Milestone completed! Keep moving forward.', 'success');
            } else {
                card.classList.remove('task-completed');
                showToast('Milestone reset.', 'info');
            }
            
            const weekNum = parseInt(taskId.split('_')[0].substring(1));
            updateWeekPercentage(weekNum);
            saveToLocalStorage();
        }
        
        // Handle Custom Sub-task Checkbox
        if (e.target.classList.contains('subtask-checkbox')) {
            const weekNum = parseInt(e.target.getAttribute('data-week'));
            const subtaskId = e.target.getAttribute('data-subtask-id');
            const isChecked = e.target.checked;
            
            const subList = state.customSubtasks[`w${weekNum}`] || [];
            const index = subList.findIndex(t => t.id == subtaskId);
            if (index > -1) {
                subList[index].completed = isChecked;
                
                const container = document.getElementById(`subtask-container-${subtaskId}`);
                if (isChecked) {
                    container.classList.add('subtask-completed');
                    playSuccessChime();
                    triggerConfetti(e.clientX, e.clientY);
                    updateStreakDate();
                } else {
                    container.classList.remove('subtask-completed');
                }
                
                updateWeekPercentage(weekNum);
                saveToLocalStorage();
            }
        }
    });
    
    // 6. Action button inside roadmap cards (Focus Task and Notes Expand)
    document.getElementById('weeks-container').addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-task-action');
        if (!btn) return;
        
        const action = btn.getAttribute('data-action');
        const taskId = btn.getAttribute('data-task-id');
        
        if (action === 'notes') {
            const notesDiv = document.getElementById(`notes-container-${taskId}`);
            notesDiv.classList.toggle('visible');
            
            // Adjust card height in accordion
            const weekCard = btn.closest('.week-card');
            const weekNum = weekCard.querySelector('.week-header').getAttribute('data-week');
            const body = document.getElementById(`week-body-${weekNum}`);
            body.style.maxHeight = body.scrollHeight + 150 + 'px';
        }
        
        if (action === 'focus') {
            const taskTitle = btn.getAttribute('data-title');
            const taskDesc = btn.getAttribute('data-desc');
            
            state.activeFocusTask = {
                id: taskId,
                title: taskTitle,
                desc: taskDesc
            };
            
            // Highlight active focus button visually across timeline
            document.querySelectorAll('[data-action="focus"]').forEach(b => {
                b.classList.remove('active-focus-task');
            });
            btn.classList.add('active-focus-task');
            
            // Update Focus Studio elements
            document.getElementById('focus-active-title').textContent = taskTitle;
            document.getElementById('focus-active-description').textContent = taskDesc;
            
            saveToLocalStorage();
            
            // Route user directly to Focus view
            document.querySelector('[data-tab="focus"]').click();
            showToast(`Task locked: '${taskTitle}' is now loaded in Focus Studio!`, 'success');
        }
    });
    
    // 7. Save Note on text-area edits
    document.getElementById('weeks-container').addEventListener('input', (e) => {
        if (e.target.classList.contains('notes-textarea')) {
            const taskId = e.target.id.replace('textarea-', '');
            state.taskNotes[taskId] = e.target.value;
            saveToLocalStorage();
        }
    });
    
    // 8. Custom Sandbox Sub-task creation forms
    document.getElementById('weeks-container').addEventListener('submit', (e) => {
        if (e.target.classList.contains('add-subtask-form')) {
            e.preventDefault();
            const weekNum = parseInt(e.target.getAttribute('data-week'));
            const input = document.getElementById(`subtask-input-${weekNum}`);
            const text = input.value.trim();
            
            if (text) {
                const subId = 'sub_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
                
                if (!state.customSubtasks[`w${weekNum}`]) {
                    state.customSubtasks[`w${weekNum}`] = [];
                }
                
                state.customSubtasks[`w${weekNum}`].push({
                    id: subId,
                    text: text,
                    completed: false
                });
                
                input.value = '';
                saveToLocalStorage();
                
                // Re-render Roadmap card list dynamically without collapsing layout
                generateRoadmapUI();
                
                // Keep Accordion Card expanded
                const card = document.getElementById(`week-card-${weekNum}`);
                card.classList.add('expanded');
                const body = document.getElementById(`week-body-${weekNum}`);
                body.style.maxHeight = body.scrollHeight + 'px';
                
                updateWeekPercentage(weekNum);
                showToast('Custom goal added to roadmap sandbox.', 'success');
            }
        }
    });
    
    // Delete custom sub-task handler
    document.getElementById('weeks-container').addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-delete-subtask')) {
            const weekNum = parseInt(e.target.getAttribute('data-week'));
            const subtaskId = e.target.getAttribute('data-subtask-id');
            
            const list = state.customSubtasks[`w${weekNum}`] || [];
            state.customSubtasks[`w${weekNum}`] = list.filter(item => item.id != subtaskId);
            
            saveToLocalStorage();
            generateRoadmapUI();
            
            // Restore expand state
            const card = document.getElementById(`week-card-${weekNum}`);
            card.classList.add('expanded');
            const body = document.getElementById(`week-body-${weekNum}`);
            body.style.maxHeight = body.scrollHeight + 'px';
            
            updateWeekPercentage(weekNum);
            showToast('Goal removed.', 'info');
        }
    });

    // 9. Timeline Filters Action
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterType = btn.getAttribute('data-filter');
            generateRoadmapUI(filterType);
        });
    });

    // 10. Timer Buttons Listeners
    document.getElementById('timer-play-pause').addEventListener('click', () => {
        if (state.timer.isRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    });
    
    document.getElementById('timer-prev').addEventListener('click', () => {
        resetTimer();
        showToast('Timer block reset.', 'info');
    });
    
    document.getElementById('timer-skip').addEventListener('click', () => {
        timerFinished();
    });
    
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mins = parseInt(btn.getAttribute('data-time'));
            const mode = btn.getAttribute('data-mode');
            setTimerPreset(mins, mode);
        });
    });

    // 11. Audio Mixer Controllers
    const rainToggle = document.getElementById('sound-rain-btn');
    const whiteToggle = document.getElementById('sound-white-btn');
    const wavesToggle = document.getElementById('sound-waves-btn');
    
    rainToggle.addEventListener('click', () => {
        rainToggle.classList.toggle('playing');
        const isPlaying = rainToggle.classList.contains('playing');
        toggleRainSound(isPlaying);
    });
    
    whiteToggle.addEventListener('click', () => {
        whiteToggle.classList.toggle('playing');
        const isPlaying = whiteToggle.classList.contains('playing');
        toggleWhiteNoise(isPlaying);
    });
    
    wavesToggle.addEventListener('click', () => {
        wavesToggle.classList.toggle('playing');
        const isPlaying = wavesToggle.classList.contains('playing');
        toggleFocusHum(isPlaying);
    });
    
    // Volume adjustments live bindings
    document.getElementById('sound-rain-volume').addEventListener('input', (e) => {
        if (rainGain) {
            rainGain.gain.value = parseFloat(e.target.value);
        }
    });
    document.getElementById('sound-white-volume').addEventListener('input', (e) => {
        if (whiteGain) {
            whiteGain.gain.value = parseFloat(e.target.value);
        }
    });
    document.getElementById('sound-waves-volume').addEventListener('input', (e) => {
        if (humGain) {
            // Hum is sine-waves, keep scaled down
            humGain.gain.value = parseFloat(e.target.value) * 0.12;
        }
    });
    
    // Mute All Sounds Button
    document.getElementById('stop-all-sounds').addEventListener('click', () => {
        toggleRainSound(false);
        toggleWhiteNoise(false);
        toggleFocusHum(false);
        
        rainToggle.classList.remove('playing');
        whiteToggle.classList.remove('playing');
        wavesToggle.classList.remove('playing');
        
        showToast('All background sounds silenced.', 'info');
    });

    // 12. Breathing helper listener
    document.getElementById('breathing-toggle').addEventListener('click', () => {
        toggleBreathing();
    });

    // 13. Settings Action Elements
    document.getElementById('reset-data-btn').addEventListener('click', () => {
        if (confirm('Are you absolutely sure you want to clear your roadmap data? This will reset all task checkmarks, notes, and streak count.')) {
            localStorage.removeItem('ux_apex_state');
            
            // Reset local variables
            state.checkedTasks = {};
            state.customSubtasks = {};
            state.taskNotes = {};
            state.streakCount = 0;
            state.lastActiveDate = null;
            state.activeFocusTask = {
                id: null,
                title: 'No Task Selected',
                desc: 'Select a task checklist item from the roadmap to focus on it here.'
            };
            
            // Reapply layout
            generateRoadmapUI();
            updateOverallStats();
            updateStreakDisplay();
            
            document.getElementById('focus-active-title').textContent = state.activeFocusTask.title;
            document.getElementById('focus-active-description').textContent = state.activeFocusTask.desc;
            
            showToast('All progress data cleared successfully.', 'success');
        }
    });
    
    document.getElementById('export-data-btn').addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(localStorage.getItem('ux_apex_state'));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "ux_apex_roadmap_backup.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast('Roadmap progress backup JSON exported!', 'success');
    });
    
    // Theme dropdown listener
    document.getElementById('theme-select').addEventListener('change', (e) => {
        state.currentTheme = e.target.value;
        document.documentElement.setAttribute('data-theme', state.currentTheme);
        saveToLocalStorage();
        showToast(`Theme changed to ${e.target.options[e.target.selectedIndex].text}`, 'info');
    });
});
