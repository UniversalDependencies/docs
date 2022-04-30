---
udver: '2'
layout: relation
title: 'acl:relat'
shortdef: 'relational adnominal clause'
---

The `acl:relat` subtype of the [acl]() relation is used for adnominal clause with relational morphology.

~~~ sdparse
Иниквъи ӄычавполпэрэгэм ынкъам пъомпъомъёчгынъым ынкъам иԓгытэвкинэт яаёԓӄыԓтэ . \n She.said take and mushroom and bathe-REL use .
parataxis(Иниквъи, ӄычавполпэрэгэм)
parataxis(She.said, take)
orphan(ӄычавполпэрэгэм, пъомпъомъёчгынъым)
orphan(take, mushroom)
cc(пъомпъомъёчгынъым, ынкъам-3)
cc(mushroom, and-12)
orphan(ӄычавполпэрэгэм, яаёԓӄыԓтэ)
orphan(take, use)
cc(яаёԓӄыԓтэ, ынкъам-5)
cc(use, and-14)
acl:relat(яаёԓӄыԓтэ, иԓгытэвкинэт)
acl:relat(use, bathe-REL)
punct(Иниквъи, .-8)
punct(She.said, .-17)
~~~

“She said: «Take a soap and a basket for mushrooms as well as bathing accessories».”
<!-- Interlanguage links updated St lis 3 20:58:33 CET 2021 -->
