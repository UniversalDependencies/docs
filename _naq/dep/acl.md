---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for clauses that modify a nominal. The acl relation contrasts with the [advcl](naq-dep/advcl) relation, which is used for adverbial clauses that modify a predicate. The head of the `acl` relation is the noun that is modified, and the dependent is the head of the clause that modifies the noun.

~~~ sdparse
Kō re mati n ta ǃkhoema ǀgausa . \n Look PDIR how they IPFV run way .
acl(ǀgausa, ǃkhoema)
acl(way, run)
~~~

~~~ sdparse
tsî ts ga satsa sîsen ǁaeb ai \n and you POT you work time on
acl(ǁaeb, sîsen)
acl(time, work)
~~~

A relative clause is an instance of `acl`, characterized by coreferentiality of the head noun with a constituent inside the embedded clause (either at the end of the clause or relized not overtly). [acl:relcl]() subtype is used in Khoekhoe in such cases.

~~~ sdparse
tsaoǃoreb hîa mûǂuidaos ai mâ b \n ashtray.3M.SG that windowsill on stand REL.3M.SG'
acl(tsaoǃoreb, mâ)
acl(ashtray.3M.SG, stand)
~~~

~~~ sdparse
ǀguri hâ tsūǃgâ-i \n alone stand incident'
acl(tsūǃgâ-i, stand)
acl(incident, hâ)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:14:43 CEST -->
