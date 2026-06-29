---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of a nominal'
udver: '2'
---

`acl` is a clausal modifier of a nominal. The head of the `acl` relation is the noun being modified, and the dependent is the head of the clause that modifies the noun.
In Lithuanian, the label `acl` is used in two cases:
1) To mark a finite clause or a participle that modifies a nominal:

~~~ sdparse
Aš noriu paprasto būdo gauti nuolaidą . \n I want a-simple way to-get a-discount .
acl(būdo, gauti)
acl(way, to-get)
~~~

2) To mark both finite and non-finite clauses that modify a nominal and are connected to the main clause by subordinating conjunctions such as _kaip (as / how), kad (that), jog (that), kai (when), kada (when)_, or by adverbials such as _kodėl (why), kur (where)_.

~~~ sdparse
Faktas , kad niekam nerūpi . \n It-is-the-fact that nobody cares .
acl(Faktas, nerūpi)
acl(It-is-the-fact, cares)
~~~

~~~ sdparse
Tai buvo laikas , kai nustojome bendrauti . \n It was a-time when we-stopped communicating .
acl(laikas, nustojome)
acl(a-time, we-stopped)
~~~

~~~ sdparse
Ieškosime būdo , kaip įgyvendinti savo tikslą . \n We’ll-look-for a-way how to-accomplish our goal .
acl(būdo, įgyvendinti)
acl(a-way, to-accomplish)
~~~

When a clause describes a pronoun (or its prepositional construction) and begins not with a relative pronoun, but with the conjunction _kad (that)_, such elements are annotated with the `acl` label.

~~~ sdparse
Mūsų nestebina tai , kad lyja . \n We are-not-surprised at-that that it-is-raining .
acl(tai, lyja)
acl(at-that, it-is-raining)
~~~

Note that a major subtype of adnominal clauses is relative clauses, which have their own relation label, [acl:relcl](). Plain `acl` should not be used in annotation of relative clauses.
<!-- Interlanguage links updated Po 29. června 2026, 18:11:26 CEST -->
