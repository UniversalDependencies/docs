---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: 2
---

`acl` is used for clauses that modify a noun (in contrast to [advcl]() which is used for clauses that modify a predicate). Relative clauses may precede the noun, and may be formed with (1) or without (2) the relativizer 的 _de_. Clausal modifiers may also be postnominal, in which case they are simply juxtaposed after the noun without any linking function words (3-5).

~~~ sdparse
人／NOUN 説/VERB 的/PART 話/NOUN \n people say REL words \n words that people say
acl(話, 説)
mark:rel(説, 的)
nsubj(説, 人)
~~~

~~~ sdparse
治/VERB 病/NOUN 方面/NOUN 的/PART 問題/NOUN \n cure illness aspect GEN matter \n the matter regarding the aspect of curing illnesses
acl(方面, 治)
obj(治, 病)
nmod(問題, 方面)
case(方面, 的)
~~~

Postnominal clausal modifiers (known as "descriptive clauses" in Li & Thompson, 1981) are headed by V2 in a [(NP1) V1 NP2 V2-clause] structure, where NP2 is the direct object of V1 and the V2-clause describes information regarding NP2. This analysis is contingent on the [(NP1) V1 NP2 V2-clause] sequence being a single sentence with one intonational phrase and no pause in between.

~~~ sdparse
有/VERB 機會/NOUN 學壞/VERB \n exist chance learn-bad \n There is a chance of learning from bad people.
obj(有, 機會)
acl(機會, 學壞)
~~~

~~~ sdparse
我們/PRON 突然/ADV 有/VERB 事/NOUN 要/AUX 忙/VERB \n we suddenly have things need be-busy-at \n 1PL suddenly have things that need busy attending to.
acl(事, 忙)
~~~

~~~ sdparse
我/PRON 昨天/NOUN 收/VERB 到/VERB 信/NOUN 說/VERB 我/PRON 帳户/NOUN 没/VERB 錢/NOUN 了/PART \n 1SG yesterday receive arrive letter say 1SG account not-have money PART \n I received a letter yesterday saying that my bank account is empty.
acl(信, 說)
~~~

### References

- Li, Charles N., and Sandra A. Thompson. 1981. Mandarin Chinese: A Functional Reference Grammar. University of California Press.
