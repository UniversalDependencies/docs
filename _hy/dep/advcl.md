---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.),
as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose
clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ sdparse
Դեպքը պատահեց , երբ մթնում էր ։ \n The-accident happened , when it-was getting-dark .
advcl(պատահեց, մթնում)
advcl(happened, getting-dark)
~~~

~~~ sdparse
Եթե գիտեք ով է արել , պետք է ասեք ուսուցչին ։ \n If you-know who has-done , you must tell the-teacher .
advcl(ասեք, գիտեք)
advcl(must, you-know)
~~~

~~~ sdparse
Նա շտապում էր , որ ժամանակին տեղ հասնի ։ \n He rushed , in-order-to arrive in-time .
advcl(շտապում, հասնի)
advcl(rushed, arrive)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:10 CET 2020 -->
