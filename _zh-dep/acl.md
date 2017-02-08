---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: 2
---

`acl` is used for clauses that modify a noun (in contrast to [advcl]() which is used for clauses that modify a predicate). Clausal modifiers may precede the noun, and may be formed with (1) or without (2) the relativizer 的 _de_. They may also be postnominal, in which case they are simply juxtaposed after the noun without any linking function words (3-5).

~~~ sdparse
人/NOUN[people] 説/VERB[say] 的/PART[REL] 話/NOUN[words] \n "words (that) people say"
acl(話, 説)
mark:rel(説, 的)
nsubj(説, 人)
~~~

~~~ sdparse
治/VERB[cure] 病/NOUN[illness] 方面/NOUN[aspect] 的/PART[GEN] 問題/NOUN[matter] \n "the matter regarding the aspect of curing illnesses"
acl(方面, 治)
obj(治, 病)
nmod(問題, 方面)
case(方面, 的)
~~~

Postnominal clausal modifiers (known as "descriptive clauses" in Li & Thompson, 1981) are headed by V2 in a [(NP1) V1 NP2 V2-clause] structure, where NP2 is the direct object of V1 and the V2-clause describes information regarding NP2. This analysis is contingent on the [(NP1) V1 NP2 V2-clause] sequence being a single sentence with one intonational phrase and no pause in between.

~~~ sdparse
有/VERB[exist] 機會/NOUN[chance] 學壞/VERB[learn-bad] \n "There is a chance of learning from bad people."
obj(有, 機會)
acl(機會, 學壞)
~~~

~~~ sdparse
我們/PRON[1PL] 突然/ADV[suddenly] 有/VERB[have] 事/NOUN[things] 要/AUX[need] 忙/VERB[be-busy-at] \n "We suddenly have things that need busy attending to."
acl(事, 忙)
~~~

~~~ sdparse
我/PRON[1SG] 昨天/NOUN[yesterday] 收/VERB[receive] 到/VERB[arrive] 信/NOUN[letter] 說/VERB[say] 我/PRON[1SG] 帳户/NOUN[account] 没/VERB[not-have] 錢/NOUN[money] 了/PART \n "I received a letter yesterday saying that my bank account is empty."
acl(信, 說)
~~~

### References

- Li, Charles N., and Sandra A. Thompson. 1981. Mandarin Chinese: A Functional Reference Grammar. University of California Press.
