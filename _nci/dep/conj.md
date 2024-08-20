---
udver: '2'
layout: relation
title: 'conj'
shortdef: 'conjunction'
---

The conjunction relation is used for the following cases:
* Explicit conjunction, with a coordinator, e.g. *auh* "and", this includes a punctuation separated list where the final element has the coordinator
* Side-by-side phrases without a coordinator, but where they share the same function with respect to their head and that function cannot be duplicated (e.g. `obj`, `subj`)
* Side-by-side phrases where in order to obtain the required interpretation, neither one can be omitted (cf. [#36](https://github.com/ftyers/UD_Classical_Nahuatl-FloCo/issues/36))

## Examples

### Explicit coordination

### Side-by-side phrases without coordinator

### Side-by-side phrases with interpretation requirement

~~~ sdparse
Auh <b>intla zan ipan otlathuic, in zan ye oncan pilcac</b>, ic moyollalia.\n "Y <b>si le amaneció, ahí estaba colgado</b>, se ponía tranquilo su corazón.
conj(otlathuic, pilcac)
root(moyollalia)
mark(otlathuic, intla)
advmod(pilcac, oncan)
obl(otlathuic, ipan)
~~~

## See also

* [`parataxis:speech`]()
* [`parataxis:shared`]()

<!-- Interlanguage links updated Ne 5. května 2024, 18:20:58 CEST -->
