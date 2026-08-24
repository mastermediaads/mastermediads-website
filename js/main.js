// Master Media Ads - Interactive Scripts (Light Cyan & Yellow Theme)

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            });
        });
    }

    // --- Interactive Campaign ROI Calculator ---
    const budgetRange = document.getElementById('budgetRange');
    const budgetValue = document.getElementById('budgetValue');
    const estReach = document.getElementById('estReach');
    const estClicks = document.getElementById('estClicks');
    const estConversions = document.getElementById('estConversions');
    const platformBtns = document.querySelectorAll('.platform-btn');
    const campaignGoal = document.getElementById('campaignGoal');

    let currentPlatformCpc = 0.25;

    function formatNumber(num) {
        return num.toLocaleString('en-US');
    }

    function calculateCampaignEstimates() {
        if (!budgetRange) return;
        const budget = parseFloat(budgetRange.value);
        budgetValue.textContent = formatNumber(budget);

        // Estimation logic
        const cpc = currentPlatformCpc;
        const estClicksCount = Math.round(budget / cpc);
        const estClicksMin = Math.round(estClicksCount * 0.85);
        const estClicksMax = Math.round(estClicksCount * 1.25);

        const estImpressionsMin = Math.round(estClicksMin * 45);
        const estImpressionsMax = Math.round(estClicksMax * 65);

        let convRateMin = 0.025; // 2.5%
        let convRateMax = 0.045; // 4.5%
        let unitText = "عميل محتمل / مبيعة";

        if (campaignGoal) {
            if (campaignGoal.value === 'sales') {
                convRateMin = 0.02;
                convRateMax = 0.04;
                unitText = "طلب مكتمل";
            } else if (campaignGoal.value === 'leads') {
                convRateMin = 0.04;
                convRateMax = 0.08;
                unitText = "عميل مهتم (Lead)";
            } else {
                convRateMin = 0.01;
                convRateMax = 0.02;
                unitText = "تفاعل ومتابع جديد";
            }
        }

        const conversionsMin = Math.round(estClicksMin * convRateMin);
        const conversionsMax = Math.round(estClicksMax * convRateMax);

        if (estReach) estReach.textContent = `${formatNumber(estImpressionsMin)} - ${formatNumber(estImpressionsMax)}`;
        if (estClicks) estClicks.textContent = `${formatNumber(estClicksMin)} - ${formatNumber(estClicksMax)}`;
        if (estConversions) estConversions.textContent = `${formatNumber(conversionsMin)} - ${formatNumber(conversionsMax)} ${unitText}`;
    }

    if (budgetRange) {
        budgetRange.addEventListener('input', calculateCampaignEstimates);
    }

    if (campaignGoal) {
        campaignGoal.addEventListener('change', calculateCampaignEstimates);
    }

    platformBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            platformBtns.forEach(b => {
                b.classList.remove('active', 'border-cyan-500', 'bg-cyan-50', 'text-cyan-800', 'shadow-sm');
                b.classList.add('border-slate-200', 'bg-slate-50', 'text-slate-600');
            });
            btn.classList.add('active', 'border-cyan-500', 'bg-cyan-50', 'text-cyan-800', 'shadow-sm');
            btn.classList.remove('border-slate-200', 'bg-slate-50', 'text-slate-600');
            currentPlatformCpc = parseFloat(btn.dataset.cpc || 0.25);
            calculateCampaignEstimates();
        });
    });

    // Initial calculation
    calculateCampaignEstimates();

    // --- Portfolio Filtering ---
    const filterBtns = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-cyan-600', 'text-white', 'border-b-2', 'border-yellow-400');
                b.classList.add('bg-slate-100', 'text-slate-700');
            });
            btn.classList.add('active', 'bg-cyan-600', 'text-white', 'border-b-2', 'border-yellow-400');
            btn.classList.remove('bg-slate-100', 'text-slate-700');

            const filter = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (filter === 'all' || itemCategory === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contactForm');
    const formSuccessMessage = document.getElementById('formSuccessMessage');
    const resetFormBtn = document.getElementById('resetFormBtn');

    if (contactForm && formSuccessMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('formName').value;
            const phone = document.getElementById('formPhone').value;
            const brand = document.getElementById('formBrand').value;
            const service = document.getElementById('formService').value;
            const message = document.getElementById('formMessage').value;

            const serviceNames = {
                'paid-ads': 'حملات إعلانية ممولة',
                'media-production': 'إنتاج فيديو وإعلانات UGC',
                'social-media': 'إدارة السوشيال ميديا',
                'branding': 'تصميم هوية وتطوير متجر',
                'consulting': 'استشارة تسويقية شاملة'
            };

            const selectedService = serviceNames[service] || service;

            const waText = encodeURIComponent(
                `*طلب جديد من موقع Master Media Ads:*\n\n` +
                `👤 *الاسم:* ${name}\n` +
                `📱 *الجوال:* ${phone}\n` +
                `🏢 *المشروع:* ${brand || 'غير محدد'}\n` +
                `🎯 *الخدمة:* ${selectedService}\n` +
                `📝 *التفاصيل:* ${message || 'طلب استشارة سريعة'}`
            );

            // Show success overlay
            formSuccessMessage.classList.remove('hidden');

            // Open WhatsApp link in new tab after brief delay
            setTimeout(() => {
                window.open(`https://wa.me/9647770836888?text=${waText}`, '_blank');
            }, 800);
        });

        if (resetFormBtn) {
            resetFormBtn.addEventListener('click', () => {
                contactForm.reset();
                formSuccessMessage.classList.add('hidden');
            });
        }
    }

    // --- Navbar Background Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
    });

});
