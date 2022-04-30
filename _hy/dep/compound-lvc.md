---
layout: relation
title: 'compound:lvc'
shortdef: 'light compound verb'
udver: '2'
---

This subtype of `compound` covers light verbs in Armenian.

~~~ sdparse
Նա միայն բաց արեց պատուհանները ։ \n He only open did the-windows .
compound:lvc(արեց, բաց)
compound:lvc(did, open)
~~~

~~~ sdparse
վեր - վեր թռչել \n high - high to-jump
compound:lvc(թռչել, վեր-1)
compound:lvc(to-jump, high-6)
compound:redup(վեր-1, վեր-3)
compound:redup(high-6, high-8)
punct(վեր-3, --2)
punct(high-8, --7)
~~~

~~~ sdparse
թույլ տալ \n permission to-give
compound:lvc(տալ, թույլ)
compound:lvc(to-give, permission)
~~~
<!-- Interlanguage links updated St lis 3 20:58:45 CET 2021 -->
