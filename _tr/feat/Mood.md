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
  <td><a href="#CndGenPot">CndGenPot</a></td>
  <td><a href="#CndPot">CndPot</a></td>
  <td><a href="#Des">Des</a></td>
  <td><a href="#DesPot">DesPot</a></td>
  <td><a href="#Gen">Gen</a></td>
  <td><a href="#GenNec">GenNec</a></td>
  <td><a href="#GenNecPot">GenNecPot</a></td>
  <td><a href="#GenPot">GenPot</a></td>
  <td><a href="#GenPotPot">GenPotPot</a></td>
  <td><a href="#Imp">Imp</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Nec">Nec</a></td>
  <td><a href="#NecPot">NecPot</a></td>
  <td><a href="#Opt">Opt</a></td>
  <td><a href="#Pot">Pot</a></td>
  <td><a href="#PotPot">PotPot</a></td>
  <td><a href="#Prs">Prs</a></td>
</tr>
</table>

`Mood` expresses the modality, a speaker's perspective, in finite verbs.
Turkish verbs may carry a wide range of mood information.
Different moods are indicated by a number of suffixes, which also interact with [tense](Tense) and [aspect](Aspect) of the verb.

Similar to the [Voice]() feature, a Turkish verb may have multiple
Mood values expressed on a single verb.
Currently we concatenate the individual mood values,
but this is far from a good solution
(see issues [#197](https://github.com/UniversalDependencies/docs/issues/197) and
[#125](https://github.com/UniversalDependencies/docs/issues/125#issuecomment-112512320)
for the discussion).

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

### <a name="NecPot">`NecPot`</a>: necessitative potential

A combination of the necessitative and potential suffixes yields the meaning of “should be able to”.

#### Examples

* _Benim buradaki büyükelçim de, müşavirim de Çince <b>konuşabilmeli</b>._ “Both my ambassador and consultant here should be able to speak Chinese.”

### <a name="GenNec">`GenNec`</a>: general or hypothetical necessitative

The necessitative suffix can be combined with a suffix of general modality.

#### Examples

* _Siyasi riskteki artış gözden <b>kaçmamalıdır</b>._ “The spike in political risk should not go unnoticed.”

### <a name="GenNecPot">`GenNecPot`</a>: general or hypothetical necessitative potential

Both necessitative and potential can be combined with a suffix of general modality.

#### Examples

* _<b>söyleyebilmelidir</b>_ “should be able to say”

### <a name="Pot">`Pot`</a>: potential

The suffix *-Abil* may indicate ability or possibility.
These moods are normally distinct, and the same verb may express both at the same time (see `PotPot` below).
However, it is also very difficult to disambiguate between these two moods.

#### Examples

* *eve gidebilir* 'she can go home' ('she is capable of going home', or 'she just may go home')
* *yağmur yağabilir* 'it may rain'

### <a name="PotPot">`PotPot`</a>: potential expressed twice

The mood we mark as `Pot` may be expressed multiple times in some
verbs, particularly in negative forms.
In most cases this expresses ability and possibility at the same time
(someting *may* (not) have potential to happen).

#### Examples

* _Gel<b>e</b>me<b>yebil</b>eceğini biliyordum _ "I knew he/she may not be able to come"

### <a name="GenPot">`GenPot`</a>: general or hypothetical potential

When the potential suffix is combined with the non-past (aorist) suffix, the resulting sentence
either is a statement of generalized validity, or a hypothetical statement (Göksel & Kerslake, 2005, p.346).

#### Examples

* _Kaplumbağa hızlı <b>yürüyemez</b>._ “A tortoise can't walk fast.” (Göksel & Kerslake, 2005, p.488)
* _Masayı şuraya <b>koyabiliriz</b>._ “We can/could put the table here.” (a hypothetical statement)

### <a name="GenPotPot">`GenPotPot`</a>: generallized modality and potential expressed twice

Similar to above, a generalized statement / hypothesis may have both ability and
potential expressed.

#### Examples

* *eve gidemeyebilir* 'she may not be able to go home' (it is possible that she is not capable of going home)

### <a name="CndGenPot">`CndGenPot`</a>: conditional predicate with generallized modality and potential

A generalized statement / hypothesis may also be conditional and express ability or potential.


#### Examples

* *eve zamanında gid<b>ebilirse</b> yemek yapacak* 'if he/she can go home, he/she will cook'

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

### <a name="CndPot">`CndPot`</a>: conditional potential

The potential modality can be combined with the conditional suffix.

#### Examples

* _durumların çoğu tartışma olmadan <b>çözülebilse</b>_ “if most situations could be resolved without conflict”

### <a name="Des">`Des`</a>: desiderative

This mood expresses a wish.
It shares the same form as the `Cnd` mood.
It may be disambiguated by particles (*keşke*: desire, *eğer*: condition) or by the context.
For example, desires do not work well with fixed time references.
In general it is difficult to automatically disambiguate between these two moods.

#### Examples

* *(keşke) uyusa* 'I wish she sleeps'
* *(keşke) uyusaydı* 'I wish she slept'

### <a name="DesPot">`DesPot`</a>: desiderative potential

A combination of the desiderative and potential suffixes yields the meaning of “want to be able to”.

#### Examples

* _Dünyaya <b>yayabilsek</b>._ “If we could spread it to the world.”

### References

* Aslı Göksel and Celia Kerslake. _Turkish: A Comprehensive Grammar_.
  London: Routledge, 2005.

<!-- Interlanguage links updated St lis 3 20:58:23 CET 2021 -->
