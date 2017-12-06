---
layout: base
title:  'Working Group on Expletives'
udver: '2'
---

# Working Group on Expletives

As a tentative definition of expletives, we can characterize them as pro-forms (typically third person pronouns or locative pro-adverbs) that occur in core argument positions but are non-referential (and therefore not assigned a semantic role). There are two main issues regarding expletives in UD:

1. In which constructions are expletives found?
2. Should expletives be treated as core arguments or not?

Below we first review the range of constructions where expletives have been claimed to exist and then discuss the relation between expletives and core arguments. 

## Subject Expletives

Expletives in subject position have traditionally been postulated in (at least) three types of constructions:

1. Weather verbs and more generally "intrinsically impersonal verbs"
2. Existential sentences
3. Extraposition of clausal subjects

### Weather verbs (and more generally "intrinsically impersonal verbs")
Weather verbs are 0-place predicates like "rain" and "snow", which typically take an expletive pronoun as their subject in languages that do not allow pro-drop. In this case, the predicate never assigns a semantic role to its subject and there is no other potential argument in the clause. The Swedish and Norwegian UD treebanks currently use `expl` for the subject of weather verbs, while Dutch uses `nsubj`.

~~~ sdparse
det regnar \n it rains
expl(regnar, det)
~~~

"Intrinsically impersonal verbs" encompasses a more general category of verbs, not only 0-place predicates but also 1-place predicates, that typically take an expletive pronoun as their subject, without any parallelism to a construction with a full subject. This is the case in French for the deficient verb "falloir" (be necessary). In the current French treebanks, all preverbal explective "il" clitics are treated as plain subjects (nsubj).

~~~ sdparse
il faut 3 nouveaux recrutements \n it is-necessary 3 new recruitments
~~~

~~~ sdparse
* 3 nouveaux recrutements faut
~~~

**Joakim:** Could you add the dependencies to this example? In particular, what relation is assigned to "recrutements"?

Finnish is a partial pro-drop language, where subject pronouns can be dropped in the first and second person, but not the third. However, weather verbs do not take overt subjects except optionally in spoken language.

~~~ sdparse
nyt (se) taas sataa \n
now (it) again rains
~~~

The Finnish-FTB treebank regularly annotates "se" as `expl`, but the original Finnish treebank consistently uses `nsubj`.

### Existential sentences

Existential sentences (sometimes called presentation sentences) are sentences that involve an intransitive verb and an indefinite noun phrase that is interpreted as the logical subject of the verb but does not occur in the canonical subject position, which is instead filled by an expletive. 

~~~ sdparse
en katt sitter på mattan \n a cat sits on the mat
nsubj(sitter, katt)
obl(sitter, mattan)
~~~
~~~ sdparse
det sitter en katt på mattan \n it sits a cat on the mat
expl(sitter, det)
nsubj(sitter, katt)
obl(sitter, mattan)
~~~

The Swedish and Norwegian UD treebanks treat the dummy pronoun as an expletive and analyzes the indefinite noun phrase as `nsubj` to capture the parallelism to the simple intransitive sentence. However, there are good arguments that the indefinite noun phrase syntactically behaves as an object in the second sentence. The Dutch UD treebank also treats the indefinite noun phrase as `nsubj` (and it seems to behave like a subject in Dutch) but analyzes the putative expletive as `advmod` (which is a pronominal adverb similar to English "there"). 

For French, the traditionally called "impersonal construction" encompasses various cases of extraposed subjects, including indefinite noun phrases, possible for some intransitive verbs (those taking "être" as auxiliary, but not only). There too are arguments to view the postverbal indefinite NP as a direct object (in particular, it is pronominalized using the quantitative "en" clitic). 

~~~ sdparse
Trois candidats sont arrivés \n Three candidates are arrived
~~~
~~~ sdparse
Il est arrivé 3 candidats \n It is arrived 3 candidates
~~~
~~~ sdparse
Il en est arrivé trois \n It of-it is arrived three
~~~


~~~ sdparse
Quelques personnes nageaient dans le bassin quand l'alarme retentit \n A-few people were-swimming in the pool when the alarm sounded
~~~
~~~ sdparse
Il nageait quelques personnes dans le bassin ... \n it was-swimming a-few people in the pool ...
~~~

Finnish, despite being partial pro-drop, have obligatory expletives in constructions similar to these, often explained by reference to the topic-comment structure of the language. Here are some relevant examples:

~~~ sdparse
Lapsia leikkii kadulla \n
children play in-street
~~~
~~~ sdparse
Kadulla leikkii lapsia \n
in-street play children
~~~
~~~ sdparse
*Leikkii lapsia kadulla \n
play children in-street
~~~
~~~ sdparse
Sitä leikkii lapsia kadulla \n
EXP play children in-street
~~~

Again, Finnish-FTB uses `expl` but the original Finnish treebank does not.

### Impersonal passive and medio-passive

French passives or medio-passives can occur with a pre-nominal subject (interpreted as the canonical object), or with a direct object and expletive "il" subject:

~~~ sdparse
Plus de 100 000 exemplaires ont été vendus \n More than 100 000 copies have been sold
~~~
~~~ sdparse
Il a été vendu plus de 100 000 exemplaires \ It has been sold more than 100 000 exemplaires
~~~
~~~ sdparse
Plus de 100 000 exemplaires se sont vendus \n More than 100 000 copies REFL are sold
~~~
~~~ sdparse
Il s'est vendu plus de 100 000 exemplaires \ It REFL is sold more than 100 000 exemplaires
~~~

### Extraposition of clausal subjects
Extraposition of clausal subjects exhibit a similar parallelism to simple clausal subjects:

~~~ sdparse
att hon kom förvånade mig \n that she came surprised me
csubj(förvånade, kom)
obj(förvånade, mig)
~~~
~~~ sdparse
det förvånade mig att hon kom \n it surprised me that she came
expl(förvånade, det)
csubj(förvånade, kom)
obj(förvånade, mig)
~~~

Swedish, Norwegian and Dutch all follow English in using `expl` for the expletive pronoun and `csubj` for the clause. English uses the same type of annotation for expletives with raising verbs, even though they have no parallel construction without the expletive.

~~~ sdparse
it seems that she came
csubj(seems, came)
expl(seems, it)
~~~
~~~ sdparse
* that she came seems
~~~

The clause can also be infinitival. For instance in French the extraposition is particularly frequent for the subject of a copula+adjective construction:

~~~ sdparse
Il est parfois difficile de rester calme \n It is sometimes difficult to stay calm
~~~

~~~ sdparse
Il est possible que Paul soit déjà parti \n It is possible that Paul be already gone
~~~

The same type of construction is found in Finnish, but only Finnish-FTB uses `expl`. In the original Finnish treebank the expletive appears to be labeled `nsubj` and the clause `ccomp`. Perhaps this is a competing analysis.

## Object Expletives

Expletives in object position have been assumed in (at least) two types of constructions:

1. Extraposed complement clauses
2. Inherent reflexives

Extraposed complement clauses, with or without a corresponding expletive pronoun, typically occur together with a predicative `xcomp` as in the following examples.

~~~ sdparse
jag fann förvånande att hon kom \n I found surprising that she came
nsubj(fann, jag)
xcomp(fann, förvånande)
ccomp(fann, kom)
~~~
~~~ sdparse
jag fann det förvånande att hon kom \n I found it surprising that she came
nsubj(fann, jag)
expl(fann, det)
xcomp(fann, förvånande)
ccomp(fann, kom)
~~~

Inherent reflexives are verbs that can only be used with a reflexive pronoun in object position and do not occur as transitive verbs with ordinary objects. UD currently assumes that the reflexive pronoun in this case is non-referental and therefore should be analysed as an expletive.

~~~ sdparse
hon kände sig sjuk \n she felt herself sick
nsubj(kände, hon)
expl(kände, sig)
~~~
~~~ sdparse
*hon kände honom sjuk \n she felt him sick
~~~

## Right dislocation (?)

(marie: for French the extraposed complement clause is better and more generally described as right dislocation, of either a subject or a complement clause, with a coreferential indefinite pronoun "ça". The left dislocation is also possible, but it seems it has different prosodic properties, suggesting that the dislocated element is not part of the clause.

~~~ sdparse
Qu'il parte m'a peiné \n That he left me-accusative has hurt
~~~

~~~ sdparse
ça m'a peiné qu'il parte \n It me-accusative has hurt that he left
~~~

~~~ sdparse
J'ai trouvé surprenant qu'il parte \n I found surprising that he left
~~~

~~~ sdparse
J'ai trouvé ça surprenant qu'il parte \n I found it surprising that he left
~~~

More generally, informal French allows dislocating any kind of argument, with appropriate clitics.

~~~ sdparse
Il les a cassées ses lunettes Paul \n He them-fem-acc has broken his sunglasses Paul
~~~


## Clitic doubling

For some languages, like Spanish or Greek, clitic pronouns can cooccur with the full noun phrase they refer to.

~~~ sdparse
Lo vimos a Juan \n Him we-saw (a) Juan
~~~

In French, this is possible for the nominative clitic, but in direct interrogative clauses only:
~~~ sdparse
Jean vient-il ? \n John comes-he ?
~~~



## Expletives and Core Arguments

Expletives typically behave like core arguments syntactically in that they satisfy many of the standard tests for subjecthood and objecthood. In some constructions (weather verbs, inherent reflexives), they are the only candidate for the given core argument relation and differ from a normal argument only in being non-referential and lacking a semantic role. In other constructions (existentials, extraposition of subject/complement clauses), the core argument properties are split between the expletive, which often satisfies most of the formal criteria, and a referential phrase that is assigned the semantic role normally associated with the core argument relation.

There are at least three possible ways of treating expletives in relation to core arguments:

1. Treat expletives as distinct from core arguments. In constructions where the expletive is the sole candidate for a given core argument relation, that relation is not used at all. In constructions where the core argument properties are split, the referential phrase is assigned the core argument relation. This is the approach taken in the current UD taxonomy and it implies that `nsubj` and `obj` are restricted to referential subjects and object, respectively. Thus, in existential sentences, the expletive is labeled `expl` and the logical subject is labeled `nsubj`. A modified version of this scheme would be to introduce subtypes of `expl` to indicate whether the expletive occurs in subject or object position.
2. Treat expletives as a subtype of core arguments but allow another referential phrase to instantiate the same core argument relation. In existential constructions, the expletive would then be assigned the relation `nsubj:expl` and the logical subject would still be labeled `nsubj`.
3. Treat expletives as a subtype of core argments and do not allow another referential phrase to instantiate the same core argument relation. In existential constructions, if the expletive is labeled `nsubj:expl`, the logical subject could no longer be labeled `nsubj`.

The following table summarizes the different relations that would be used for different constructions in the three different schemes.

| Construction | Scheme | Expletive | Referential |
| Weather verb | 1 | expl (expl:nsubj) | |
|  | 2 | nsubj:expl | |
|  | 3 | nsubj:expl | |
| Existential sentence | 1 | expl (expl:nsubj) | nsubj |
|  | 2 | nsubj:expl | nsubj |
|  | 3 | nsubj:expl | obj? |
| Extraposed clausal subject | 1 | expl (expl:nsubj) | csubj |
|  | 2 | nsubj:expl | csubj |
|  | 3 | nsubj:expl | ccomp |
| Extraposed complement clause | 1 | expl (expl:obj) | ccomp |
|  | 2 | obj:expl | ccomp |
|  | 3 | obj:expl | ccomp |
| Inherent reflexive | 1 | expl (expl:obj) | |
|  | 2 | obj:expl | |
|  | 3 | obj:expl | |


## Expletives in UD v2.1 treebanks

Out of 102 treebanks from 60 languages in UD version 2.1: 39 treebanks contain expletives (the expl relation)

The 39 treebanks are from the following 20 languages:
 * Arabic (only in the PUD treebank, influence from English?)
 * Bulgarian
 * Croatian
 * Danish
 * Dutch
 * English
 * Finnish (?)
 * French
 * Galician
 * German
 * Greek
 * Italian
 * Norwegian
 * Portuguese
 * Romanian
 * Russian (?)
 * Sanskrit (? only 1 instance)
 * Slovenian
 * Swedish
 * Ukrainian
 
 
[Statistics per treebank](http://folk.uio.no/liljao/expl-stats_v2.1.txt) (absolute expletive counts, total, and proportion of expletives out of all tokens)

### Examples and explanations

(Translations are provided by Google translate in many cases, feel free to correct if you know the language in question!)

* Bulgarian
  * В дискусията, предполагам, ще се засегнат важни въпроси. (expletive "се" is a reflexive pronoun, transl. "In the discussion, I suppose, will affect important issues".)
* Croatian:
  * Seb Bytyci, izvršni ravnatelj Instituta za balkansku politiku, slaže se s time. (expletive "se" is a reflexive pronoun, transl. "Seb Bytyci, executive director of the Institute for Balkan Policy, agrees.")
* Danish:
  * Så skal der rafles om husholdningspengene. (expletive "der", transl. "So, there will be discussions about household money")
* Dutch:
  * Overigens is het ook niet uitgesloten, dat het stichtingsbestuur van Sparta zelf ook wijzigingen zal ondergaan. (expletive "het", transl. "Moreover, it is also not excluded that the foundation of Sparta itself will undergo changes.")
* English:
  * There has been talk that the night curfew might be implemented again. (expletive "there")
* Finnish:
  * According to Holmberg and Nikanne (2002), Finnish has obligatory expletives in at least existential and extraposition constructions. However, the `expl` relation is only used in Finnish-FTB.
    * Se oli paska homma, että Jyrki loppu. (Translation: It was a shit thing for Jyrki to end.)
* French:
  * Il ne se représenta pas en 1972. (expletive "se", transl. "He did not represent himself in 1972.")
* Galician:
  * Ás cinco remátase de traballar. (expletive clitic "-se", transl. "At five it is over to work")
* German:
  * Die Party ist vorbei, heißt es nun. (expletive "es", transl. "The party is over, it is now said")
* Greek:
  * Πιστεύω ότι είναι δίκαιο να το αναγνωρίσουμε αυτό. (expletive "το", transl. "I believe it is fair to recognize this.")
* Italian:
  * L'intrigo internazionale si è svolto tra Beirut, Ginevra e Tripoli nel 1990. (expletive "si", transl. "International intrigue took place between Beirut, Geneva and Tripoli in 1990.")
* Norwegian:
  * Det var veldig positivt at han klarte å senke tiden sin (expletive "Det", transl. "It was very positive that he managed to lower his time")
* Portuguese:
  * Na confusão que se segue, parte um primeiro tiro [...] (expletive "se", transl. "In the confusion that follows, a first shot [...]") 
* Romanian:
  * Dar asemenea lucruri nu le știai decât din zvonuri vagi. (expletive "le", transl. "But you knew such things only from vague rumors.")
* Russian:
  * Или это снег таял на груди? (expletive "это", transl. "Or was it snow melting on his chest?")
* Slovenian:
  * V takšnem primeru se lahko bolnikovo stanje celo poslabša. (expletive "se", transl. "In this case, the patient's condition may even deteriorate.")
* Swedish:
  * Det är viktigt för dig att känna till de här nyheterna. (expletive "Det", transl. "It is important for you to be familiar with these news")
* Ukrainian:
  * Залишити слід на папері — це був вирішальний крок. (expletive "це", transl. "Leave the mark on paper - it was a decisive step.")

## References

Anders Holmberg and Urpo Nikkane. [Expletives, Subjects and Topics in Finnish](http://www.zacharski.org/papers/ghz/Expletives_subjects_and_topics.pdf). In 
Peter Svenonius (ed.) *Subjects, expletives, and the EPP*. Oxford University Press. 2002.
