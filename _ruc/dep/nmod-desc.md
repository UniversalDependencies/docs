---
layout: relation
title: 'nmod:desc'
shortdef: 'descriptor modifier in nominal'
udver: '2'
---

In Ruuli, the `nmod:desc` relation is used for nominal descriptors, i.e. nouns that modify a name and provide classification or disambiguation (e.g. titles and roles). These elements are optional and can be omitted without affecting grammaticality.

<!-- Descriptors differ from [appos]() in that they function as modifiers rather than full nominals. They are also distinct from [flat:name](), which is used for multiword names without internal syntactic structure. -->

Typical cases include nouns of titles and roles associated with personal names.

### Examples

~~~ sdparse
opurezidenti wa iyanga ojenero Kaguta Museveni \n president of country general Kaguta Museveni
nmod:desc(Kaguta-5, ojenero)
nmod:desc(Kaguta-12, general)
flat:name(Kaguta-5, Museveni-6)
flat:name(Kaguta-12, Museveni-13)
appos(opurezidenti, ojenero)
appos(president, general)
~~~

~~~ sdparse
mwami Saito \n Mr Saito
nmod:desc(Saito-2, Mwami)
nmod:desc(Saito-5, Mr)
~~~

~~~ sdparse
onanka oiba \n what's_his_name husband
nmod:desc(onanka, oiba)
nmod:desc(onanka, husband)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:18 CEST -->
