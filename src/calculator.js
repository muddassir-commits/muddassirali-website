/**
 * Interactive PropTech Ad Spend Leakage & Pipeline Recovery Calculator
 * Provides direct commercial value and demonstrates real authority.
 */

export function initLeakageCalculator(containerId = 'leakage-calculator') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const slider = container.querySelector('#spend-slider');
  const spendDisplay = container.querySelector('#spend-display');
  const wastedSpendDisplay = container.querySelector('#wasted-spend-display');
  const lostLeadsDisplay = container.querySelector('#lost-leads-display');
  const recoveredPipelineDisplay = container.querySelector('#recovered-pipeline-display');
  const recoveryBar = container.querySelector('#recovery-progress-bar');

  if (!slider) return;

  function formatINR(val) {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  }

  function calculate() {
    const spend = parseInt(slider.value, 10);
    // Estimated average unoptimized CPA in Real Estate (from 749 audit): ₹1,250
    const totalLeads = Math.floor(spend / 1250);
    
    // 60% of leads never get contacted in <60s and drop off
    const lostLeads = Math.floor(totalLeads * 0.60);
    
    // Budget burned on lost/unresponsive leads
    const wastedSpend = Math.floor(spend * 0.56);
    
    // Veloxis recovered site visits & qualified pipeline
    const recoveredSiteVisits = Math.floor(lostLeads * 0.32);
    // Average property ticket size: ₹75L, estimated 2% conversion from site visit
    const pipelineRecovered = recoveredSiteVisits * 7500000 * 0.02;

    if (spendDisplay) spendDisplay.textContent = formatINR(spend);
    if (wastedSpendDisplay) wastedSpendDisplay.textContent = formatINR(wastedSpend);
    if (lostLeadsDisplay) lostLeadsDisplay.textContent = `${lostLeads.toLocaleString()} Leads / Mo`;
    if (recoveredPipelineDisplay) recoveredPipelineDisplay.textContent = formatINR(pipelineRecovered);

    if (recoveryBar) {
      const percentage = Math.min(94, Math.max(35, (spend / 5000000) * 100));
      recoveryBar.style.width = `${percentage}%`;
    }
  }

  slider.addEventListener('input', calculate);
  calculate();
}
