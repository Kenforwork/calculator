(function () {
  function createCalculatorWidget() {
    const button = document.createElement('button');
    button.innerText = '打開計算機';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.padding = '10px 15px';
    button.style.background = '#4CAF50';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.bottom = '70px';
    container.style.right = '20px';
    container.style.width = '200px';
    container.style.background = '#fff';
    container.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    container.style.borderRadius = '5px';
    container.style.padding = '10px';
    container.style.display = 'none';

    const input1 = document.createElement('input');
    input1.type = 'number';
    input1.placeholder = '輸入數字1';
    input1.style.width = '100%';
    input1.style.marginBottom = '5px';
    input1.style.padding = '5px';

    const input2 = document.createElement('input');
    input2.type = 'number';
    input2.placeholder = '輸入數字2';
    input2.style.width = '100%';
    input2.style.marginBottom = '5px';
    input2.style.padding = '5px';

    const calcButton = document.createElement('button');
    calcButton.innerText = '計算加法';
    calcButton.style.width = '100%';
    calcButton.style.padding = '5px';
    calcButton.style.background = '#4CAF50';
    calcButton.style.color = '#fff';
    calcButton.style.border = 'none';
    calcButton.style.borderRadius = '3px';
    calcButton.style.cursor = 'pointer';

    const result = document.createElement('div');
    result.innerText = '結果：';
    result.style.marginTop = '10px';
    result.style.fontWeight = 'bold';

    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(calcButton);
    container.appendChild(result);
    document.body.appendChild(button);
    document.body.appendChild(container);

    button.addEventListener('click', () => {
      container.style.display = container.style.display === 'none' ? 'block' : 'none';
    });

    calcButton.addEventListener('click', () => {
      const num1 = parseFloat(input1.value);
      const num2 = parseFloat(input2.value);
      if (isNaN(num1) || isNaN(num2)) {
        result.innerText = '請輸入有效數字';
      } else {
        result.innerText = `結果：${num1 + num2}`;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createCalculatorWidget);
  } else {
    createCalculatorWidget();
  }
})();
