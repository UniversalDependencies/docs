---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

The `flat` relation is used to combine the elements of an expression where none of the immediate components can be identified as the sole head using standard substitution tests. Flat expressions are annotated with a flat structure, where all subsequent components in the expression are attached to the first one using the flat label.

In UD_Classical_Armenian-CAVaL, an unspecialized `flat` relation is used for personal names and foreign expressions. In these functions, it corresponds to specialized `flat:name` and `flat:foreign` tags, respectively, used in some other treebanks.

~~~ sdparse
ետես Սիմովն Պետրոս \n Simon Peter saw it
flat(Սիմովն, Պետրոս)
flat(Simon, Peter)
~~~

~~~ sdparse
ասէ ց նա ՝ տաղիթա կումի ՝ \n said unto her , Talitha cumi
flat(տաղիթա, կումի)
ccomp(ասէ, տաղիթա)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:55 CET -->
