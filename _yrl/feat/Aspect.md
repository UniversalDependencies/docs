---
layout: feature
title: 'Aspect'
shortdef: 'aspect'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Hab">Hab</a></td>
  <td><a href="#Imp">Imp</a></td>
  <td><a href="#Iter">Iter</a></td>
  <td><a href="#Perf">Perf</a></td>
  <td><a href="#Prog">Prog</a></td>
  <td><a href="#Prosp">Prosp</a></td>
  <td><a href="#Frus">Frus</a></td>
  <td><a href="#Freq">Freq</a></td>
  <td><a href="#Compl">Freq</a></td>
</tr>
</table>

Cross-linguistically, aspect is typically a feature of [verbs](u-pos/VERB). In Nheengatu, it also occurs with other parts of speech, e.g., [nouns](u-pos/NOUN), [subordinating conjunctions](u-pos/SCONJ), [adverbs](u-pos/ADV), and specially [particles](u-pos/PART).

Aspect is a feature that specifies duration of the action in time,
whether the action has been completed etc. In some languages
(e.g. English), some [tenses](Tense) are actually combinations of
tense and aspect. In other languages (e.g. Czech), aspect and tense
are separate, although not completely independent of each other.

In Czech and other Slavic languages, aspect is a lexical feature.
Pairs of imperfective and perfective verbs exist and are often
morphologically related but the space is highly irregular and the
verbs are considered to belong to separate lemmas.


### <a name="Imp">`Imp`</a>: imperfect aspect

The action took / takes / will take some time span and there is no
information whether and when it was / will be completed.

#### Examples

* [cs] _péci_ “to bake” (Imp); _<b>pekl</b> chleba_ “he baked / was
  baking a bread”

### <a name="Perf">`Perf`</a>: perfect aspect

The action has been / will have been completed. Since there is
emphasis on one point on the time scale (the point of completion),
this aspect does not work well with the present tense. For example,
Czech morphology can create present forms of perfective verbs but
these actually have a future meaning.

#### Examples

* [cs] _upéci_ “to bake” (Perf); _<b>upekl</b> chleba_ “he baked / has
  baked a bread”

### <a name="Prosp">`Prosp`</a>: prospective aspect

In general, prospective aspect can be described as relative future:
the action is/was/will be expected to take place at a moment that
follows the reference point; the reference point itself can be
in past, present or future.
In the English sentence
_When I got home yesterday, John called and said he would arrive soon,_
the last clause _(he would arrive soon)_ is in prospective aspect.
Nevertheless, English does not have overt affixal morphemes dedicated
to the prospective aspect, and we do not need the label in English.
But other languages do; the _-ko_ suffix in Basque is an example.

Note that this value was called `Pro` in UD v1 and it has been renamed `Prosp`
in UD v2.

#### Examples

* [eu] _Liburua <b>irakurriko</b> behar du._ lit. _book-a read-Prosp must AUX_ “He must go to read a book.”

### <a name="Prog">`Prog`</a>: progressive aspect

English progressive tenses (_I am eating, I have been doing &hellip;_)
have this aspect. They are constructed analytically (auxiliary +
present participle) but the _-ing_ participle is so bound to
progressive meaning that it seems a good idea to annotate it with this
feature (we have to distinguish it from the past participle somehow;
we may use both the "Tense" and the "Aspect" features).

In languages other than English, the progressive meaning may be
expressed by morphemes bound to the main verb, which makes this value
even more justified. Example is Turkish with its two distinct progressive
morphemes, _-yor_ and _-mekte._

#### Examples

* [tr] _eve <b>gidiyor</b>_ “she is going home (now)”
* [tr] _eve <b>gitmekte</b>_ “she is going home (now)”
* [tr] _eve <b>gidiyordu</b>_ “she was going home (when I saw her)”
* [tr] _eve <b>gimekteydi</b>_ “she was going home (when I saw her)”

### <a name="Hab">`Hab`</a>: habitual aspect

English simple present has this aspect.

#### Examples

* [en] _he <b>attends</b> classes of Japanese_

### <a name="Iter">`Iter`</a>: iterative / frequentative aspect

Denotes repeated action. Attested e.g. in Hungarian.
Iteratives also exist in Czech with this name but their meaning is rather habitual.
They can be formed
only from imperfective verbs and they are usually not classified as a separate
aspect; they are just `Aspect=Imp.`

Note: This value is new in UD v2 but a similar value has been used in UD v1
as language-specific for Hungarian, though it was called _frequentative_ there
(`Freq`).

#### Examples

* [hu] _üt_ “hit”, _<b>ütöget</b>_ “hit several times”

### <a name="Frus">`Frus`</a>: frustative aspect

"Frustrative is a grammatical marker that expresses the non-realization of some expected outcome implied by the proposition expressed in the marked clause." (Overall 2017)

"The frustrative is a functional element found in a number of languages which expresses, in its typical use, that an action did not have its intended consequences [...]" (Salanova)

'The frustrative particle in Kimaragang marks unrealized expectations or intentions, counter-actuals, etc." (Kroeger 2017)

#### References

Kroeger, Paul. 2017. Frustration, culmination, and inertia in Kimaragang grammar. *Glossa: a journal of general linguistics* 2(1): 56. 1–29, DOI: [https://doi.org/10.5334/gjgl.146](https://doi.org/10.5334/gjgl.146)

Overall, S. (2017). A Typology of Frustrative Marking in Amazonian Languages. In A. Aikhenvald & R. Dixon (Eds.), *The Cambridge Handbook of Linguistic Typology* (Cambridge Handbooks in Language and Linguistics, pp. 477-512). Cambridge: Cambridge University Press. doi:10.1017/9781316135716.015

Salanova, Andrés Pablo. *A semantics for frustratives.* [https://www.mcgill.ca/linguistics/files/linguistics/a_semantics_for_frustratives.pdf](https://www.mcgill.ca/linguistics/files/linguistics/a_semantics_for_frustratives.pdf)

#### Examples

Examples cited by Avila (2021) (our English translations):

* [yrl] _Indé rewewé <b>yepé</b> kutara [...]&nbsp;_  “You were flying fast in vain [...]” (Casasnovas, 93)
* [yrl] _Apurakí-putari <b>yepé</b>, ixé se maraari. &nbsp;_  “I wanted to work, but I'm tired.” (Magalhães, 96, adap.)

### <a name="Freq">`Freq`</a>: frequentative aspect

The frequentative aspect is marked in Nheengatu with the suffixes *-wara* and *-wera*. These suffixes attach to verbs or nouns, adverbs, etc. conveying the clause predicate, see Avila (2021, p. 809-810 and p. 824-825). They express that a state or event holds on continually or occurs repeatedly with a very high frequency.  While *-wara* applies to predicates denoting present events, *-wera* specify that the event is located in the past. Typically, *-wara* translates as *always* in English.

#### References

van Geenhoven, Veerle. 2005. Atelicity, pluractionality, and adverbial quantification. In H. J. Verkuyl, H. de Swart & A. van Ho out (Eds.), *Perspectives on Aspect* (Studies In Theoretical Psycholinguistics, pp. 107-124). Dordrecht: Springer.

#### Examples

Examples cited by Avila (2021) (our English translations):

* [yrl] _<b>Ikewara</b> aikú, reyuri ramé, resika se piri.&nbsp;_  “I'm always here, when you come, come visit me."
* [yrl] _<b>Amanduariwara</b> ne resé. &nbsp;_  “I always remember you.”
* [yrl] _Ixé se <b>rukawara</b> aikú, ti xinga asemu kwá suí. &nbsp;_  “I'm always at home, I hardly leave here.”
* [yrl] _Ta <b>upukawera</b> tẽ paá, ma ti ta umaã tá resé. &nbsp;_  “They actually laughed, but didn't look at them.”

### <a name="Compl">`Compl`</a>: completive aspect

Following  Avila (2021, p. 586), the completive aspect is marked in Nheengatu with the particle *pawa* (often reduced to *páu* or *pá*), which Cruz (2011, p. 396) analyses as incorporation of the homonymous verb meaning 'to finish'. The completive aspect indicates "that an action has been performed thoroughly or to completion" (Bybee; Perkins; Pagliuca, 1994, p. 18). Nheengatu sentences with the completive aspect often correspond to English translation equivalents with adverbs such as "completely". In other situations, completion of the event expressed by the clause main predicate denotes involvement of all members of a plural group referred to by the subject in case of an intransitive verb or the object in case of a transitive verb (Bybee; Perkins; Pagliuca, 1994, p. 57).

#### References

Bybee, J., Perkins, R., Pagliuca, W. 1994. *The evolution of grammar: tense, aspect, and modality in the languages of the world*. Chicago: Univesity of Chicago Press.

#### Examples

Examples cited by Avila (2021) (our English translations):

* [yrl] _Usú <b>pawa</b>, ti ana umanduári umunhã aintá ruka.&nbsp;_  “They all go, they no longer remember to make their houses."
* [yrl] _Ape Pirá-itá Manha umukanhemu <b>pawa</b> aintá suí maã uxari waá kwera aintá supé. &nbsp;_  “Then the Mother of Fishes made disappear everything she had given them.”
* [yrl] _Remaã yuíri mayé ií umuyasuka <b>pawa</b> se awa-itá pixunasawa! &nbsp;_  “See also how the water washed away all the blackness from my hair!”
* [yrl] _Pepuri <b>pawa</b> paraná upé. &nbsp;_  “Everyone jump into the river.”
* [yrl] _Uka aíwa ukukúi <b>pá</b> wã. &nbsp;_  “The old house has already completely collapsed.”
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:41:36 CET -->
