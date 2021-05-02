---
layout: relation
title:  'dep:emo'
shortdef : 'emotional root dependency'
udver: '2'
---

`dep:emo` is used for the relation between an emotional root and its postbase for the morpheme-level annotations.

```
Qugina-k-a-nka					.
quginag(EMO)–ke(EMO→V)-[Ind.Trns]-[1Sg.3Pl]	.
"I am spooked out from them."
```

~~~ sdparse
qugina k a nka . \n spooked to-feel-R-toward Ind.Trns 1Sg.3Pl .
dep:emo(k, qugina)
dep:emo(to-feel-R-toward, spooked)
~~~
