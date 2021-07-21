---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

#DA FARE

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Con">Con</a></td>
  <td><a href="#Dem">Dem</a></td>
  <td><a href="#Emp">Emp</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Int">Int</a></td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Rcp">Rcp</a></td>
  <td><a href="#Rel">Rel</a></td>
  <td><a href="#Tot">Tot</a></td>
</tr>
</table>

This feature typically applies to [pronouns](cs-pos/PRON),
[determiners](cs-pos/DET), pronominal [numerals](cs-pos/NUM)
(quantifiers) and pronominal [adverbs](cs-pos/ADV).

Uso su tutti gli elementi che hanno un'origine pronominale, indipendentemente dalal categoria (indi anche congiunzioni ecc.)

Presenza anche di PartType

### <a name="Con">`Con`</a>: contrastive

Aggiungere riferimento a discussione su Git: https://github.com/UniversalDependencies/docs/issues/732

anche ceterus, uter. Elemento -ter


### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner, numeral or adverb

These are to some extent parallel to interrogatives.

Ci includiamo anche i cosiddetti determinativi della tradizione: accezione più alta di "riferimento specifico", con oscillazione rispetto a quelli personali

#### Examples

* _tento&nbsp;_ “this”
* _tamten&nbsp;_ “that”
* _takový&nbsp;_ “such”
* _týž&nbsp;_ “same”
* _tolik&nbsp;_ “so many”
* _tolikátý&nbsp;_ “so-maniest” (ordinal number)
* _tolikrát&nbsp;_ “so many times”
* _tady&nbsp;_ “here”
* _tam&nbsp;_ “there”
* _teď&nbsp;_ “now”
* _tehdy&nbsp;_ “then”
* _tak&nbsp;_ “so”

### <a name="Emp">`Emp`</a>: emphatic determiner

Emphatic pro-adjectives (determiners) emphasize the nominal they depend on.
There are similarities with reflexive and demonstrative pronouns / determiners.

Uso anche con o, ecce... relazione con Form=Emp?

Eliminazione di questa categoria considerando che è estremamente limitata, non ben definita, e coperta da Form=Emp? E.g.: idem = is in forma emnfatica (-dem)

idem -> Dem (Prs? oscilla come is), Form=Emp
ipse -> Dem (Prs?), Form=Emp (è anche etimologicamente un rafforzativo di is)
solum, solus -> Con
totidem -> Dem, Num=Card, Form=Emp


#### Examples

* _sám_ as in _<b>Sám</b> prezident se přišel podívat._ “President <b>himself</b> came to see it.”

### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner, numeral or adverb

#### Examples

* aliquis

### <a name="Int">`Int`</a>: interrogative pronoun, determiner, numeral or adverb

Note that possessive interrogative determiners (_whose_) can be
distinguished by the [Poss]() feature.

Citare esclamativi e uso in ccomp anche indirette od oggettive

#### Examples: 

* _kdo&nbsp;_ “who”
* _co&nbsp;_ “what”
* _jaký&nbsp;_ “what kind of”
* _který&nbsp;_ “which”
* _čí&nbsp;_ “whose”
* _kolik&nbsp;_ “how many”
* _kolikátý&nbsp;_ “how-maniest” (ordinal number)
* _kolikrát&nbsp;_ “how many times”
* _kde&nbsp;_ “where”
* _kam&nbsp;_ “where to”
* _kdy&nbsp;_ “when”
* _jak&nbsp;_ “how”
* _proč&nbsp;_ “why”

### <a name="Neg">`Neg`</a>: negative pronoun, determiner or adverb

#### Examples

* _nikdo&nbsp;_ “nobody”
* _nic&nbsp;_ “nothing”
* _nijaký&nbsp;_ “no (kind)”
* _ničí&nbsp;_ “no one's”
* _žádný&nbsp;_ “no, none”
* _nikde&nbsp;_ “nowhere”
* _nikam&nbsp;_ “(to) nowhere”
* _nikdy&nbsp;_ “never”
* _nijak&nbsp;_ “no way” (lit. “no-how”)

### <a name="Prs">`Prs`</a>: personal or possessive personal pronoun or determiner

See also the [Poss]() feature that distinguishes normal personal
pronouns from possessives. Note that `Prs` also includes reflexive
personal/possessive pronouns (e.g. _se / svůj;_ see the
[Reflex]() feature).

#### Examples

* _já, ty, on, ona, ono, my, vy, oni, ony, ona, se&nbsp;_ “I, you, he, she, it, we, you, they, they, they, oneself”
* _můj, tvůj, jeho, její, náš, váš, jejich, svůj&nbsp;_ “my, your, his/its, her, our, your, their, one's own”



### <a name="Rcp">`Rcp`</a>: reciprocal

### <a name="Rel">`Rel`</a>: relative pronoun, determiner, numeral or adverb

Note that this class heavily overlaps with
interrogatives, yet there are pronouns that are only relative.

#### Examples: 

* _jenž, což&nbsp;_ “which, that” (relative but not interrogative pronouns)
* _jehož&nbsp;_ “whose” (possessive relative pronoun)

### <a name="Tot">`Tot`</a>: total (collective) pronoun, determiner or adverb

#### Examples

* _každý&nbsp;_ “every, everybody, everyone, each”
* _všechno&nbsp;_ “everything, all”
* _všude&nbsp;_ “everywhere”
* _vždy&nbsp;_ “always”
