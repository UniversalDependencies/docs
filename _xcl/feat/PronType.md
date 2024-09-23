---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Art">Art</a></td>
  <td><a href="#Dem">Dem</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Int">Int</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Rcp">Rcp</a></td>
  <td><a href="#Rel">Rel</a></td>
  <td><a href="#Tot">Tot</a></td>
</tr>
</table>

In Classical Armenian, PronType as a lexical feature, which is tagged on [adverbs](xcl-pos/ADV), [determiners](xcl-pos/DET), [interjections](xcl-pos/INTJ), and [pronouns](xcl-pos/PRON).

### <a name="Art">`Art`</a>: article

Article is a special case of determiner that bears the feature of
[definiteness](xcl-feat/Definite). By contrast to <a href="https://universaldependencies.org/hy/feat/Aspect.html">Modern Eastern Armenian</a>, the `Def` value is marked on the article.

#### Examples

* մի/_mi_ “a/an”, =ն/_=n_ (enclitic) “the”.

### <a name="Dem">`Dem`</a>: demonstratives

The feature characterizes demonstrative pronouns, determiners, adverbs, adpositions (grammaticalized from adverbs) and interjections. In Classical Armenian, demonstratives express a three-fold distinction of [deixis](xcl-feat/Deixis).

#### Examples

* Pronoun: սա/_sa_ “this one”, դա/_da_ “that one (yours)”, նա/_na_ “that one”
* Determiner: այս/_ays_ “this”, այդ/_ayd_ “that (yours)”, այն/_ayn_ “that”
* Adverb/adposition: աստի/_asti_ “from here”, այտի/_ayti_ “from there”, անտի/_anti_ “from there”
* Interjections: ահաւասիկ/_ahawasik_ “behold”, ահաւադիկ/_ahawadik_ “behold”, ահաւանիկ/_ahawanik_ “behold”

### <a name="Ind">`Ind`</a>: indefinite pronoun or determiner

Indefinite pronouns and determiners are further subclassified to distinguish "some" vs. "any" etc. by means of the [Definite](xcl-feat/Definite) feature.

#### Examples:

* ինչ/_inčʻ_ “any, anything”

### <a name="Int">`Int`</a>: interrogative pronoun, determiner or adverb

Refer to a nominal, adjectival or adverbial modifier in an interrogative clause.

#### Examples:

* Pronoun/determiner: ի՞նչ/_i?nčʻ_ “which, which one?”
* Adverb: ե՞րբ/_e?rb_ “when”

### <a name="Prs">`Prs`</a>: personal, possessive or reflexive personal pronoun or determiner

Personal pronouns can be further subdivided into personal proper, possessive and reflexive pronouns using the features [Poss](xcl-feat/Poss) and [Reflex](xcl-feat/Reflex).

#### Examples

* Personal: ես/_es_ “I”
* Possessive: իմ/_im_ “my”
* Reflexive: իւր/_iwr_ “oneself”

### <a name="Rcp">`Rcp`</a>: reciprocal pronoun

#### Examples

* միմեանք/_mimeankʻ_ “each other”

### <a name="Rel">`Rel`</a>: relative pronoun, determiner or adverb

Pronouns, determiners and adverbs that mark the beginning of a relative clause.

#### Examples:

* Pronoun/determiner: որ/_or_ “who; which”
* Adverb: որպէս/_orpēs_ “how”

### <a name="Tot">`Tot`</a>: total (collective) pronoun or determiner

Express every representative or all representatives of a class of entities. 

#### Examples

* ամենայն/_amenayn_ “all”

### References

Jensen, Hans. 1959. _Altarmenische Grammatik._ Heidelberg: Winter.

Meillet, Antoine. 1913. _Altarmenisches Elementarbuch._ Heidelberg: Winters (<a href="https://archive.org/details/altarmenischesel00meil/page/n5/mode/2up" target="_blank">Internet Archive</a>)

Meillet, Antoine. 1962. _Études de linguistique et de philologie arméniennes. I: Recherches sur la syntaxe comparée de l'arménien. Suivies de la composition en arménien._ Lisbonne: Imprensa Nacional de Lisboa.
