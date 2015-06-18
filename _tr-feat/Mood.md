---
layout: feature
title: 'Mood'
shortdef: 'mood'
---

`Mood` expresses the modality, speakers perspective, in finite verbs. Turkish verbs may carry a wide range of mood information. Different moods are indicated by a number of suffixes, which also interact with tense and aspect of the verb.

### `Ind`: indicative

The indicative can be considered the default mood. A verb in indicative merely states that something happens, has happened or will happen, without adding any attitude of the speaker.

#### Examples

* *eve gidiyor* 'she is going home'
* *eve gitti* 'she went home'

### `Imp`: imperative

In Turkish imperatives are expressed by lack of any tense/aspect/modality marker. The form of imperative may indicate second or third person plural/singular. Note that, forms other than second person singular may indicate a wish rather than a command, so may be marked as `Opt` (see below).

#### Examples

* *eve git* 'go home!'
* *eve gidin* '(you-PLU) go home!'
* *eve gitsin* '(I am ordering him/her to) go home!'

### `Prs`: persuasive (**new, not in UD**)

Turkish has a particular form of imperative, where the request is not an order, but an attempt to persuade.

#### Examples

* *eve gitsene* '(please) go home'
* *eve gitsenize* '(you-PLU, please) go home'

### `Nar`: narrative (**propsed change: currently listed as `Tense`**)

Narrative, or evidential, is a mood that expresses speaker's perspective of not witnessing, or verifying the action. This is realized with the suffix *-mIş*. Without additional tense modifiers, it refers to a past (perfect) action. However, can be combined with other tense markers.

#### Examples

* *eve gitmiş*  '(evidently) she went home'
* *eve gidecekmiş* '(evidently) she will go home'
* *eve gidiyormuş* '(evidently) she is going home (now)'
* *eve gitmeliymiş* '(evidently) she has to go home'
* *eve gitmemişmiş* '(evidently) she had gone home (by the time I arrived)'

### `Cnd`: conditional

This expresses conditionality. It is the primary means of forming conditionals in Turkish ('if ...'). The suffix responsible for this mood is *-sA*. The suffix is ambiguous between `Cnd` and `Des` (see below).

####

* *eve gittiyse* 'if she went home'
* *eve gidiyorsa* 'if she is going home'
* *eve giderse* 'if she goes home'
* *eve gidecekdiyse* 'if she was going to go home'

### `Des`: desiderative

This mood expresses a wish. This mood shares the same form as the `Cnd` mood. It may be disambiguated by particles (*keşke*: desire, *eğer*: condition) or by the context. For example, desires do not work well fixed time references. In general it is difficult to automatically disambiguate between these two moods.

#### Examples

* *(keşke) uyusa* 'I wish she sleeps'
* *(keşke) uyusaydı* 'I wish she slept'

### `Opt`: optative

Optative suffix (*-(y)A*) in Turkish typically combines with first person markers and expresses a suggestion. The use with second/third person markers express a wish, but it is rare. With third person singular agreement the imperative form may also express a wish or suggestion, and more common than *-(y)A* forms.

#### Examples

* *eve gidelim* 'let's go home'
* *bakayım* 'let's me see'
* *gele* 'I wish he/she comes'
* *gelesin* 'I wish you come'

### `Nec`: necessitative

This expresses some sort of necessity (mush/shuld/have to in English). 

#### Examples

* *eve gitmeli* 'she should go home'
* *eve gitmeliydi* 'she should have gone home'

### `Gen`: generalized modality (**new proposal, not in UD**)

Turkish modal system includes a distinction between statements of direct experience (`Ind`) and statements with a more general or theoretical nature (Göksel & Kerslake, 2005, p.295). This mood is typically marked by the aorist marker on verbs, and  with *-DIr* suffix on nominal predicates.

#### Examples

* *park yapılmaz* 'one does not park = no parking'
* *iki, iki daha dört eder* 'two plus two is four'
* *ikinin karesi dörttür* 'two's square is four'
* *Ali işe geç gider* 'Ali goes to work late'
* *hastadır* '(I hypothesize/deduce that) she must be sick'

### `Abil`: abilitative or potentiality (**new proposal, not in UD**)

The suffix *-Abil* may indicate ability or possibility. These moods are normally distinct, and the same verb may express both at the same time (see the last example sentence). However, it is also very difficult to disambiguate between these two moods.

An option here is allowing two labels, and let the annotater decide for using one or both.

#### Examples
* *eve gidebilir* 'she can go home' ('she is capable of going home', or 'she just may go home') 
* *yağmur yağabilir* 'it may rain' 
* *eve gidemeyebilir* 'she may not be able to go home' (it is possible that she is not capable of going home)
