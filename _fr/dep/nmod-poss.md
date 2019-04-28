---
layout: relation
title:  'nmod:poss'
shortdef : 'possessive nominal modifier'
udver: '2'
---

The relation `nmod:poss` is used only in corpora **UD_French-PUD** for a possessive nominal modifier expressed by a possessive determiner (_mon_, _ton_, _son_, _ma_, _ta_, _sa_, _mes_, _tes_, _ses_, _notre_, _votre_, _leur_, _nos_, _vos_, _leurs_).

~~~ sdparse
Toute notre vie  \n All our life
nmod:poss(vie, notre)
~~~

In all other treebanks, the [det]() relation is used.