---
layout: feature
title: 'Mood'
shortdef: 'mood'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Cnd">Cnd</a></td>
  <td><a href="#CndGen">CndGen</a></td>
  <td><a href="#Des">Des</a></td>
  <td><a href="#Gen">Gen</a></td>
  <td><a href="#GenNec">GenNec</a></td>
  <td><a href="#GenPot">GenPot</a></td>
  <td><a href="#Imp">Imp</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Nec">Nec</a></td>
  <td><a href="#Opt">Opt</a></td>
  <td><a href="#Pot">Pot</a></td>
  <td><a href="#Prs">Prs</a></td>
</tr>
</table>

`Mood` expresses the modality, a speaker's perspective, in finite verbs.
Turkish verbs may carry a wide range of mood information.
Different moods are indicated by a number of suffixes, which also interact with [tense](Tense) and [aspect](Aspect) of the verb.

### <a name="Ind">`Ind`</a>: indicative

The indicative can be considered the default mood. A verb in indicative merely states that something happens, has happened or will happen, without adding any attitude of the speaker.

#### Examples

* *eve gidiyor* 'she is going home'
* *eve gitti* 'she went home'
* _Kaplumbağa yavaş <b>yürüyor</b>._ “The tortoise walks/is walking slowly.” (statement about a specific tortoise; Göksel & Kerslake, 2005, p.340)

### <a name="Gen">`Gen`</a>: generalized modality

Turkish modal system includes a distinction between statements of direct experience (`Ind`) and statements with a more general or theoretical nature (Göksel & Kerslake, 2005, p.295).
This mood is typically marked by the aorist marker on verbs, and with *-DIr* suffix on nominal predicates.

(**NOTE:** this mood interacts with evidentiality.  One may consider the status of evidentiality expressed by this suffix to be "inferred". Hence, an alternative way of marking this could be `Evidential=Infer`, or something similar)

#### Examples

* *park yapılmaz* 'one does not park = no parking'
* *iki, iki daha dört eder* 'two plus two is four'
* *ikinin karesi dörttür* 'two's square is four'
* *Ali işe geç gider* 'Ali goes to work late'
* *hastadır* '(I hypothesize/deduce that) she must be sick'
* _Kaplumbağa yavaş <b>yürür</b>._ “A tortoise walks slowly.” (a general statement about tortoises; Göksel & Kerslake, 2005, p.340)

### <a name="Imp">`Imp`</a>: imperative

In Turkish imperatives are expressed by lack of any tense/aspect/modality marker. The form of imperative may indicate second or third person plural/singular. Note that, forms other than second person singular may indicate a wish rather than a command, so may be marked as `Opt` (see below).

#### Examples

* *eve git* 'go home!'
* *eve gidin* '(you-PLU) go home!'
* *eve gitsin* '(I am ordering him/her to) go home!'

### <a name="Prs">`Prs`</a>: persuasive (**new, not in UD**)

Turkish has a particular form of imperative, where the request is not an order, but an attempt to persuade.

#### Examples

* *eve gitsene* '(please) go home'
* *eve gitsenize* '(you-PLU, please) go home'

### <a name="Opt">`Opt`</a>: optative

Optative suffix (*-(y)A*) in Turkish typically combines with first person markers and expresses a suggestion.
The use with second/third person markers express a wish, but it is rare.
With third person singular agreement the imperative form may also express a wish or suggestion, and more common than *-(y)A* forms.

#### Examples

* *eve gidelim* 'let's go home'
* *bakayım* 'let's me see'
* *gele* 'I wish he/she comes'
* *gelesin* 'I wish you come'

### <a name="Nec">`Nec`</a>: necessitative

This expresses some sort of necessity (must/should/have to in English).

#### Examples

* *eve gitmeli* 'she should go home'
* *eve gitmeliydi* 'she should have gone home'

### <a name="GenNec">`GenNec`</a>: general or hypothetical necessitative

The necessitative suffix can be combined with a suffix of general modality.

#### Examples

* _Siyasi riskteki artış gözden <b>kaçmamalıdır</b>._ “The spike in political risk should not go unnoticed.”

### <a name="Pot">`Pot`</a>: potential

The suffix *-Abil* may indicate ability or possibility.
These moods are normally distinct, and the same verb may express both at the same time (see the last example below).
However, it is also very difficult to disambiguate between these two moods.

#### Examples

* *eve gidebilir* 'she can go home' ('she is capable of going home', or 'she just may go home')
* *yağmur yağabilir* 'it may rain'
* *eve gidemeyebilir* 'she may not be able to go home' (it is possible that she is not capable of going home)

### <a name="GenPot">`GenPot`</a>: general or hypothetical potential

When the potential suffix is combined with the non-past (aorist) suffix, the resulting sentence
either is a statement of generalized validity, or a hypothetical statement (Göksel & Kerslake, 2005, p.346).

#### Examples

* _Kaplumbağa hızlı <b>yürüyemez</b>._ “A tortoise can't walk fast.” (Göksel & Kerslake, 2005, p.488)
* _Masayı şuraya <b>koyabiliriz</b>._ “We can/could put the table here.” (a hypothetical statement)

### <a name="Cnd">`Cnd`</a>: conditional

This expresses conditionality.
It is the primary means of forming conditionals in Turkish ('if ...').
The suffix responsible for this mood is *-sA*.
The suffix is ambiguous between `Cnd` and `Des` (see below).

#### Examples

* *eve gittiyse* 'if she went home'
* *eve gidiyorsa* 'if she is going home'
* *eve giderse* 'if she goes home'
* *eve gidecekdiyse* 'if she was going to go home'
* _Arabayı <b>satsa</b> hepimiz rahatlarız._ “If he sold the car it would be a relief to all of us.” (Göksel & Kerslake, 2005, p.488)

### <a name="CndGen">`CndGen`</a>: general (non-past) conditional

When the conditional suffix is combined with the non-past (aorist) suffix, the resulting sentence
gets a future or generalized predictive reading.

#### Examples

* _Arabayı <b>satarsa</b> hepimiz rahatlarız._ “If he sells the car it will be a relief to all of us.” (Göksel & Kerslake, 2005, p.488)

### <a name="Des">`Des`</a>: desiderative

This mood expresses a wish.
It shares the same form as the `Cnd` mood.
It may be disambiguated by particles (*keşke*: desire, *eğer*: condition) or by the context.
For example, desires do not work well with fixed time references.
In general it is difficult to automatically disambiguate between these two moods.

#### Examples

* *(keşke) uyusa* 'I wish she sleeps'
* *(keşke) uyusaydı* 'I wish she slept'

### References
- Aslı Göksel and Celia Kerslake. _Turkish: A Comprehensive Grammar_.
  London: Routledge, 2005.

<!-- Interlanguage links updated Čt lis 12 09:43:03 CET 2020 -->
