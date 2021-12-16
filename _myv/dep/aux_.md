---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "myv/dep/aux.html"
udver: '2'
---

An auxiliary of a clause is a [non-main verb](myv-pos/AUX) of the
clause.

Exception: An auxiliary verb used in negation
is not labeled `aux` but [aux:neg]().

~~~ sdparse
Да , эряви капшамс ! \n Yeah , have _to hurry_ !
aux(капшамс, эряви)
~~~

~~~ sdparse
Тедиде вана савсь молемс Моргоненьгак . \n This year , even Morgo had _to go_ along .
aux(молемс, савсь)
~~~

~~~ sdparse
Миненек савкшны аволь ансяк ловномс , сави тонавтнемс сёрмадомо. \n Not only are we having _to read_ , we have to learn to write .
aux(ловномс, савкшны)
~~~

<!-- Interlanguage links updated St lis 3 20:58:40 CET 2021 -->
