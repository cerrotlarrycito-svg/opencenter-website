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
});
