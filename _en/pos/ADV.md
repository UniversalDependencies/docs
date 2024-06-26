---
layout: postag
title: 'ADV'
shortdef: 'adverb'
udver: '2'
---

The English `ADV` tag covers all uses of PTB tags RB, RBR, RBS, and WRB except the clausal negation _not_ and reduced forms of it, which become [PART]().
It also covers the abbreviations "i.e." and "e.g.", which PTB tags as FW.

## ADVs with `PronType`

Pro-forms tagged as `ADV` receive a [PronType]() feature. Such items are listed in the tables below.

WH Lemma (`WRB`) | `PronType`
------|-----------
_how_, _why_ | `PronType=Int` or `PronType=Rel`
_when_, _where_, _whither_ | `PronType=Dem` or `PronType=Int` or `PronType=Rel`
_however_,[^1] _whenever_, _wherever_ | `PronType=Int` or `PronType=Rel`
_wherein_ | `PronType=Rel`

[^1]: _However_ tagged as `RB` (the most frequent usage) does not receive `PronType`.

[PronType]()=`Rel` applies when these trigger a relative construction—see [acl:relcl]() for details.
When they are interrogative, they receive `PronType=Int`. When they simply help specify a place or time, they are `PronType=Dem`.
For example:

WH Lemma | `PronType=Dem` | `PronType=Int` | `PronType=Rel`
---------|       :--:     |     :----:     |    :---:     
_when_   | _<b>When</b> the clock struck twelve, the spell wore off._ | _<b>When</b> did the spell wear off?_ | _the moment <b>when</b> the clock struck twelve_
_wherever_ | -- | _<b>Wherever</b> he lives, I won't rest until I find him._[^2] | _<b>Wherever</b> you see a stain, apply a dab of cleaner._

[^2]: This is a special type of interrogative clause known as an _exhaustive conditional adjunct_ (*CGEL* pp. 761–764). In this construction the interrogative _WH-ever_ word alternates with _no matter WH_ or _regardless of WH_ (_No matter where he lives..._).

Non-WH lemmas are less ambiguous:

Non-WH Lemma | `PronType`
-------------|-----------
_here_, _now_, _then_, _there_ | `PronType=Dem`
_neither_, _never_, _nowhere_ | `PronType=Neg`
_always_, _everywhere_ | `PronType=Tot`
_anyplace_, _anytime_, _anywhere_ | `PronType=Ind`
_someplace_, _sometime(s)_, _somewhere_ | `PronType=Ind`
_ever_, _either_ | `PronType=Ind`

See also: [PRON](), [DET]()

<!-- Interlanguage links updated Ne 5. května 2024, 18:19:33 CEST -->
