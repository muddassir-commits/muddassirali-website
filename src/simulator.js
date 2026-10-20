/**
 * Interactive 60-Second PropTech WhatsApp AI Lead Qualifier Simulator
 * Inspired by 21st.dev interactive components & Magic UI
 */

export function initQualifierSimulator(containerId = 'qualifier-simulator') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const chatBody = container.querySelector('.sim-chat-body');
  const actionArea = container.querySelector('.sim-action-area');
  const statusIndicator = container.querySelector('.sim-status-text');

  if (!chatBody || !actionArea) return;

  let currentStep = 0;

  const conversationSteps = [
    {
      userMsg: "Hi, I saw your ad for Skyline Residences. Can I get the brochure and pricing details?",
      botTypingTime: 700,
      botMsg: "Hi there! 👋 Here is the official project brochure and pricing breakdown for Skyline Residences [PDF • 4.8 MB]. Are you looking for self-use or high-yield investment?",
      options: [
        { text: "Family / Self-Use 🏡", next: 1, tag: "Self-Use" },
        { text: "Investment Portfolio 📈", next: 1, tag: "Investment" }
      ]
    },
    {
      botTypingTime: 800,
      botMsg: "Got it! We have 3BHK & 4BHK configurations. What budget bracket are you optimizing for?",
      options: [
        { text: "₹1.50 Cr – ₹2.25 Cr", next: 2, tag: "1.5-2.25Cr" },
        { text: "₹2.50 Cr+ (Penthouse)", next: 2, tag: "2.5Cr+" }
      ]
    },
    {
      botTypingTime: 900,
      botMsg: "Perfect! We have 2 exclusive corner units matching your criteria. Would you like to schedule a private VIP site walkthrough this Saturday?",
      options: [
        { text: "Saturday 11:30 AM (Confirm)", next: 3, tag: "Sat 11:30AM" },
        { text: "Sunday 03:00 PM (Confirm)", next: 3, tag: "Sun 3PM" }
      ]
    },
    {
      botTypingTime: 1000,
      botMsg: "✅ Walkthrough Confirmed! Calendar invite sent to your WhatsApp. Lead qualified and synced to HubSpot CRM via Veloxis Lead Engine in 43 seconds.",
      options: [
        { text: "🔄 Replay Simulator", next: 0, isReset: true }
      ]
    }
  ];

  function renderOptions(options) {
    actionArea.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'sim-option-btn text-xs font-medium px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-300 transition-all cursor-pointer shadow-sm';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => handleOptionClick(opt));
      actionArea.appendChild(btn);
    });
  }

  function appendMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = isUser 
      ? 'flex justify-end mb-3 animate-fade-in' 
      : 'flex justify-start mb-3 animate-fade-in';

    const bubble = document.createElement('div');
    bubble.className = isUser
      ? 'max-w-[85%] bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-xs font-normal shadow-sm leading-relaxed'
      : 'max-w-[85%] bg-white text-slate-800 rounded-2xl rounded-tl-sm px-4 py-2.5 text-xs font-normal border border-slate-200 shadow-sm leading-relaxed';

    bubble.innerHTML = text;
    msgDiv.appendChild(bubble);
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.id = 'sim-typing-indicator';
    typingDiv.className = 'flex justify-start mb-3';
    typingDiv.innerHTML = `
      <div class="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-3.5 py-2 text-xs flex items-center space-x-1.5 shadow-sm">
        <span class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style="animation-delay: 0.15s"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style="animation-delay: 0.3s"></span>
      </div>
    `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    if (statusIndicator) statusIndicator.textContent = 'Veloxis AI is typing...';
  }

  function hideTyping() {
    const el = document.getElementById('sim-typing-indicator');
    if (el) el.remove();
    if (statusIndicator) statusIndicator.textContent = 'Veloxis AI Lead Qualifier • Online';
  }

  function handleOptionClick(option) {
    if (option.isReset) {
      resetSimulator();
      return;
    }

    appendMessage(option.text, true);
    actionArea.innerHTML = '';
    showTyping();

    const stepData = conversationSteps[option.next];
    setTimeout(() => {
      hideTyping();
      appendMessage(stepData.botMsg, false);
      renderOptions(stepData.options);
      currentStep = option.next;
    }, stepData.botTypingTime || 800);
  }

  function resetSimulator() {
    chatBody.innerHTML = '';
    currentStep = 0;
    const initial = conversationSteps[0];
    appendMessage(initial.userMsg, true);
    showTyping();
    setTimeout(() => {
      hideTyping();
      appendMessage(initial.botMsg, false);
      renderOptions(initial.options);
    }, 700);
  }

  // Initial render
  resetSimulator();
}
