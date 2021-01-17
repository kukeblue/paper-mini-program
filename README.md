# paper-mini-program
# vote_frontend CSS命名规范

项目css命名规范，以及可配置样式清单

## BEN

BEM 的意思是 块(Block)、元素(Element)、修饰符(Modifier)，其基本命名规则就是组件名+元素名+修饰符名

- 块(Block)， 一个块就是一个独立有实际意义的组件或模块，并且每一个块在逻辑和功能上是相互独立的。例如，button,form等。
- 元素(Element)， 它属于块的一部分，没有独立的意义，在语义上要绑定到它的块上。例如，from-item绑定在form块上;form-item-label元素又是绑定在from-item块上的。

- 修饰符(Modifier)，它是块或元素的标志，用来表示它们的外观、行为、或状态。例如button-circle 圆形按钮,button-success成功状态的按钮。

## 在BEN的规范下，本项目会增加以下约束

* BEN的修饰符我们用_下标表示，例如 `block-item_success`、 `block-item_active` 以区分元素和修饰符
* 开头c代表component,表示组件,可能在多个页面用到，所以修改带有c的class，可能会有多个地方组件收到影响
* 开头common表示公用样式，如`common-text`,全局多处会用到该样式

---