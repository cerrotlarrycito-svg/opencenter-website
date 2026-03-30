/* ============================================
   OpenCenter 全局交互
   ============================================ */

// 移动端导航菜单切换
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });

    // 点击导航链接后自动关闭菜单
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('active');
      });
    });
  }

  // Tab切换（委员会与工作组）
  var tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = this.getAttribute('data-tab');

      // 切换按钮状态
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      // 切换内容面板
      document.querySelectorAll('.tab-content').forEach(function (panel) {
        panel.classList.remove('active');
      });
      var targetPanel = document.getElementById('tab-' + target);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 导航栏滚动效果
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.12)';
      } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
      }
    });
  }

  // 研究成果分类筛选
  var filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        document.querySelectorAll('.report-card-full').forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-type') === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // 加入我们表单提交
  var submitJoin = document.getElementById('submitJoin');
  if (submitJoin) {
    submitJoin.addEventListener('click', function () {
      var form = document.getElementById('joinForm');
      var success = document.getElementById('joinSuccess');
      if (form && success) {
        form.style.display = 'none';
        success.style.display = 'block';
      }
    });
  }

  // 开源能力自测
  var submitQuiz = document.getElementById('submitQuiz');
  if (submitQuiz) {
    submitQuiz.addEventListener('click', function () {
      var total = 0;
      var answered = 0;
      for (var i = 1; i <= 7; i++) {
        var selected = document.querySelector('input[name="q' + i + '"]:checked');
        if (selected) {
          total += parseInt(selected.value);
          answered++;
        }
      }
      if (answered < 7) {
        alert('请完成所有题目后再提交');
        return;
      }
      var level = '';
      if (total >= 24) {
        level = '优秀（领先级）：贵单位开源治理体系较为成熟，建议持续优化并参与行业标准制定。';
      } else if (total >= 18) {
        level = '良好（成长级）：贵单位已具备一定开源治理基础，建议在合规与安全方面进一步加强。';
      } else if (total >= 12) {
        level = '一般（起步级）：贵单位开源治理尚处于起步阶段，建议系统性规划开源管理体系。';
      } else {
        level = '待提升（初始级）：贵单位开源治理需要全面建设，建议尽快制定开源管理制度。';
      }
      document.getElementById('quizScore').textContent = '您的评估得分：' + total + '/28';
      document.getElementById('quizLevel').textContent = level;
      document.getElementById('quizForm').style.display = 'none';
      document.getElementById('quizResult').style.display = 'block';
    });
  }

  // 重新自测
  var retakeQuiz = document.getElementById('retakeQuiz');
  if (retakeQuiz) {
    retakeQuiz.addEventListener('click', function () {
      document.getElementById('quizResult').style.display = 'none';
      document.getElementById('quizForm').style.display = 'block';
      // 清空选项
      document.querySelectorAll('.quiz-options input').forEach(function (input) {
        input.checked = false;
      });
    });
  }
});
