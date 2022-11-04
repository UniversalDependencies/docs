---
layout: base
title:  'Chinese UD'
udver: '2'
---

# UD for Chinese <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

## Tokenization and Word Segmentation

* As a language without whitespace, most of the Chinese treebanks are pre-tokenized manually or automatically.

See more details on Chinese [tokenization](tokenization.html).


## Morphology

This is an overview only. For more detailed discussion and examples, see the list of [Chinese POS tags](pos-index.html) and details for each treebank in [Chinese morphology](morphology.html).


### Tags

* Chinese uses all 17 universal POS categories, including particles ([PART](https://universaldependencies.org/zh/pos/PART.html)).
* The following words are particles in Chinese:
  * the genitive/associative/relativizer/nominalizer marker 的 _de_
  * 得 _de_ in V-得 extent/descriptive constructions (see [compound:ext]())
  * the manner adverbializer 地 _de_
  * the “et cetera” markers 等 _děng_
  * sentence-final particles (句末助詞 _jùmuò zhùcí_)
  * and the object relativizer 所 _suǒ_.
* Possessive determiners are considered determiner ([DET](https://universaldependencies.org/zh/pos/DET.html))
  instead of pronoun ([PRON](https://universaldependencies.org/zh/pos/PRON.html))
  * 其 _qí_ “his/her/its; their”
  * 本 _běn_ “our”
* Chinese auxiliary verbs ([AUX](https://universaldependencies.org/zh/pos/AUX.html)) are:
  * Modal and modal-like auxiliaries, which are preverbal and do not have to be adjacent to the verb
    * can be pre-modified by the negator 不 _bù_ but cannot take object and be post-modified by aspect marker
    * 能 _néng_ “be able to”
    * 會 _huì_ “will”
    * 可以 _kěyǐ_ “can”
    * 應該 _yīnggāi_ “should”
    * 肯 _kěn_ “be willing to”
    * 敢 _gǎn_ “dare”
    * 有 _yǒu_ (perfective)
    * 沒有 / méiyǒu (negative perfective)
    * Note that certain modal auxiliaries can also function as main verbs, usually when they have a direct object or full clausal complement
  * Copulae, in the narrow sense of pure linking words for nonverbal predication
    * 是 _shì_
    * 為 _wéi_
  * Aspect markers, which must come immediately after the verb
    * 了 _le_ (perfective)
    * 著/着 _zhe_ (durative)
    * 過 _guo_ (experiential)


### Features

Since Chinese is mostly isolating, few features are needed in the treebanks:

* [NounType]()`=Clf` is used to distinguish classifiers from common [NOUN]()s
* [Person]() is used to categorize personal pronouns
* [NumType]() is used for cardinal (`Card`) and ordinal (`Ord`) numerals
* [Number]()`=Plur` is used in the rare cases where a plural suffix is used: 我們 _wǒmen_ “we” vs. 我 _wǒ_ “I”
* [Polarity]()`=Neg` is used with the negators 不, 未, 沒, 別, 無


## Syntax

<!--The following table lists the 52 syntactic relations used in UD v2 for Mandarin Chinese, [36 of which are standard UD relations](https://universaldependencies.org/u/dep/) and 16 of which are specific to Mandarin Chinese.-->

This is an overview only. For more detailed discussion and examples, see the list of [Chinese POS tags](dep-index.html) and details for each treebank in [Chinese syntax](syntax.html).

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj](https://universaldependencies.org/zh/dep/nsubj.html)) is a noun phrase in the nominative case, without preposition.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
* For the purpose of UD the objects are divided to core objects, labeled [obj](https://universaldependencies.org/zh/dep/obj.html) or [iobj](https://universaldependencies.org/zh/dep/iobj.html), and oblique objects, labeled [obl:arg](https://universaldependencies.org/zh/dep/obl-arg.html).
  * All prepositional objects are considered oblique.
  * A clausal complement, which is labeled [ccomp](https://universaldependencies.org/zh/dep/ccomp.html), is a full clause that functions like an object of verb. It has its own subject and it is not obligatorily coreferent with any of the arguments of the matrix verb. On the contrary, the open clausal complement labled [xcomp](https://universaldependencies.org/zh/dep/xcomp.html) functions like an object of another verb, but unlike the ccomp dependent, it obligatorily lacks an overt subject.
    * Extra attention has to be paid to the distinction of subject-less ccomp from subject-control xcomp.
* In Mandarin Chinese oblique nominal may include prepositional phrases, preverbal coverb phrases where we treat the coverbs as prepositions, and comparative objects introduced by 比 _bǐ_ “than”. They are labeled [obl](https://universaldependencies.org/zh/dep/obl.html). Other cases are:
  * For nominals that don’t include a nominal marker, specifically locational pronouns and nouns, such as 這裡 _zhèlǐ_ “here”, 那裡 _nàlǐ_ “there”, 前面 _qiánmiàn_ “front side”.
  * For temporal nouns functioning as adjuncts, see [obl:tmod](https://universaldependencies.org/zh/dep/obl-tmod.html).
  * For nominals introduced by 被 bèi and 把 bǎ, see [obl:agent]() and [obl:patient](https://universaldependencies.org/zh/dep/obl-agent.html), respectively.
* In passive clauses, the subject is labeled with [nsubj:pass](https://universaldependencies.org/zh/dep/nsubj-pass.html) or [csubj:pass](https://universaldependencies.org/zh/dep/csubj-pass.html), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass](https://universaldependencies.org/zh/dep/aux-pass.html).

### Non-verbal Clauses

* Different copula words in Mandarin Chinese are labeled [cop](https://universaldependencies.org/zh/dep/cop.html):
  * The copula verb 是 _shi_ (be) is used in equational, possessive and benefactory nonverbal clauses.
  * The words 為 _wéi_ “be, be as” and 非 _fēi_ “not be” are also included if they are the only verb in a sentence.

### Compounds

* Compounds are very frequent in basically disyllabic Mandarin Chinese. The compound relation is used primarily for noun-noun compounds. The latter nominal is typically the head of the compound.
  * For verb and verb-object compounds, see [compound:dir](https://universaldependencies.org/zh/dep/compound-dir.html), [compound:ext](https://universaldependencies.org/zh/dep/compound-ext.html), [compound:vo](https://universaldependencies.org/zh/dep/compound-vo.html), and [compound:vv](https://universaldependencies.org/zh/dep/compound-vv.html).
  * This applies to any nominal preceding and modifying another nominal unless the relationship between the two is a possessive one (see [nmod](https://universaldependencies.org/zh/dep/nmod.html)).

### Relations Overview

* The following relation subtypes are used in Chinese:
  * [nsubj:pass](https://universaldependencies.org/zh/dep/nsubj-pass.html) for nominal subjects of passive verbs
  * [csubj:pass](https://universaldependencies.org/zh/dep/csubj-pass.html) for clausal subjects of passive verbs
  * [obl:arg](https://universaldependencies.org/zh/dep/obl-arg.html) for prepositional objects
  * [obl:agent](https://universaldependencies.org/zh/dep/obl-agent.html) for agents of passive verbs
  * [obl:patient](https://universaldependencies.org/zh/dep/obl-patient.html) for objects in BA construction
  * [obl:tmod](https://universaldependencies.org/zh/dep/obl-tmod.html) for temporal modifiers
  * [aux:pass](https://universaldependencies.org/zh/dep/aux-pass.html) for passive auxiliaries
  * [dislocated:vo](https://universaldependencies.org/zh/dep/dislocated-vo.html) for dislocated objects of verb-object compound
  * [advmod:df](https://universaldependencies.org/zh/dep/advmod-df.html) for duration or frequency adverbial modifiers
  * [discourse:sp](https://universaldependencies.org/zh/dep/discourse-sp.html) for sentence particles
  * [mark:adv](https://universaldependencies.org/zh/dep/mark-adv.html) for manner adverbializers
  * [mark:rel](https://universaldependencies.org/zh/dep/mark-rel.html) for adjectival, relativizer, and nominalizer 的 DE
  * [case:loc](https://universaldependencies.org/zh/dep/case-loc.html) for cardinal numbers that are attached as children of the counted noun but govern its case
  * [compound:dir](https://universaldependencies.org/zh/dep/compound-dir.html) for directional verb compounds
  * [compound:ext](https://universaldependencies.org/zh/dep/compound-ext.html) for extent and descriptive verb compounds
  * [compound:vo](https://universaldependencies.org/zh/dep/compound-vo.html) for verb-object compounds
  * [compound:vv](https://universaldependencies.org/zh/dep/compound-vv.html) for verb-verb compounds

* The following relation types are not used in Chinese at all:
  [expl]()


## Treebanks

There are [6](../treebanks/zh-comparison.html) Chinese UD treebanks:

  * [UD_Chinese-GSD](../treebanks/zh_gsd/index.html)
  * [UD_Chinese-GSDSimp](../treebanks/zh_gsdsimp/index.html)
  * [UD_Chinese-PUD](../treebanks/zh_pud/index.html)
  * [UD_Chinese-HK](../treebanks/zh_hk/index.html)
  * [UD_Chinese-CFL](../treebanks/zh_cfl/index.html)
  * [UD_Chinese-PatentChar](../treebanks/zh_patentchar/index.html)

