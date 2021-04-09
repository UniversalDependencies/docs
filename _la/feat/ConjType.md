---
layout: feature
title: 'ConjType'
shortdef: 'semantic type of conjugation'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Cmpr">Cmpr</a></td>
  <td><a href="#Expl">Expl</a></td>
</tr>
</table>

This feature is used on a subordinating or co-ordinating conjunction (if present) to mark the semantic type of adverbial clause or co-ordinated member it introduces. 

### <a name="Cmpr">`Cmpr`</a>: subordinating conjunction introducing a comparative clause

This value is used for conjunctions introducing (possibly elliptic) [comparative clauses](la-pos/advcl-cmpr). Since a clausal interpretation is favoured even when the comparative clause is reduced to a noun phrase or similar, the introducing elements (such as *ut*, *sicut*...) are regularly treated as [`SCONJ`](la-pos/SCONJ) rather than as `ADV`.

Such conjunctions usually originate from relative elements (e.g. *quam*, related to the [relative pronoun](la-feat/PronType) *qui*), and can have come to incorporate originally correlated demonstrative elements (like *sic* in in *sicut*, from *sic ... ut ...*).

Note: the `Cmpr` value has been preferred over `Comp`, so as to parallel the `:cmpr` subrelation for clauses.

#### Examples

In the following sentences, comparative conjunctions (and their equivalents in translation) are highlighted with bold typeface.

* *Quedam est in qua tantum eptasillabum intexitur unum: et hoc esse non potest nisi ubi frons est vel cauda, quoniam, **ut** dictum est, in pedibus atque versibus actenditur equalitas carminum et sillabarum.* (Dante, *De vulgari eloquentia*)
    * 'There exists one kind of stanza in which a single heptasyllable is included; but this can only occur where there is a *frons* or a *cauda*, since, **as** I said, in *pedes* and *versus* the principle of equal numbers of lines and syllables must be strictly observed.'
   
* *Nam illud quod est alterius gratia necessitatur ab illo cuius gratia est, **sicut** via necessitatur a termino.* (Dante, *De Monarchia*)  
    * 'For a thing which exists for the sake of something else is necessarily conditioned by that other for whose sake it exists, **as** a route is necessarily conditioned by its terminus.'

* *Manifestum sit omnibus vobis quod, existente me Mantue, questio quedam exorta est, que dilatrata multotiens ad apparentiam magis **quam** ad veritatem, indeterminata restabat.* (Dante, *Questio de aqua et terra*)
    * 'Be it known to you all that when I was in Mantua a certain discussion arose, which, following the appearance rather **than** truth, received manifold expansion, but remained undecided.'

### <a name="Expl">`Expl`</a>: co-ordinating conjunction introducing an explicative block

This value is introduced for those [connectors](la-pos/CCONJ) introducing [explanations](la-dep/conj-expl), reformulations, or similar, of a preceding element of the sentence; this element and its "expansion" are marked as co-ordinated.

Many of such conjunctions originate from crystallised [paratactic](la-dep-parataxis) expressions with the general meaning of "that is", "as it is known", etc., and so often incorporate verbal elements, and the general tendency is towards univerbation. 


#### Examples

In the following sentences, explicative conjunctions (and their equivalents in translation) are highlighted with bold typeface. The conjoined elements are underlined

* *Liquet igitur <u>quod</u> superius dixi, <u>me</u> **scilicet** <u>esse devotissimum et amicum</u>, nullatenus esse presumptum.* (Dante, *Letters*, XIII)
    * 'It is clear then that <u>what</u> I said above, **that is** <u>that I am your servant and friend</u>, is in no way presumptuous.'
   
* *et Adalpertus dux direxit <u>missos suos</u>, **id est** <u>Roffridi et Leo schabinus seu Adalprando</u> qui ambulaverunt [--].* (LLCT)  
    * 'And the *dux* Adalpertus sent <u>his legates</u>, **that is**, <u>Roffridi and the *schabinus* Leo or Adalprandus</u> who went [...]'






