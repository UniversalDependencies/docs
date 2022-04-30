---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (xcomp) of a verb or an adjective is a predicative or clausal complement without its own subject. The reference of the subject is necessarily determined by an argument external to the xcomp. This is often referred to as obligatory control. 

In Norwegian `xcomp` is used for infinitival clauses

~~~ sdparse
Han har tidligere lovet å vende tilbake \n He has previously promised to return
xcomp(lovet,vende)
~~~

This relation is also used for cases of obligatory secondary predication

~~~ sdparse
presidentens ambisiøse helseplan kjørte seg fullstendig fast \n the president's ambitious health plan got completely stuck
xcomp(kjørte,fast)
~~~

`xcomp` is also used for copula-like verbs such as `bli` "become", *kalle* "call", *hete* "named" in Norwegian.

~~~ sdparse
Mennesket kan bli edelt \n Man can become noble
xcomp(bli,edelt)
~~~

<!-- Interlanguage links updated St lis 3 20:59:11 CET 2021 -->
