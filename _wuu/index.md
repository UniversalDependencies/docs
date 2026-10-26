---
layout: base
title:  'Shanghainese UD'
udver: '2'
---

# UD for Shanghainese <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

Shanghainese is grammatically very similar to Mandarin Chinese (see [Chinese UD](/zh/index.html)), with differences being primarily lexical. Therefore, this documentation is not exhaustive; it only highlights the differences from the Chinese UD guidelines. If a topic is not specifically addressed here, please refer to and apply the rules from the Chinese UD.

Lacking a standardised orthography and with the nature of primarily colloquial usage, a same Shanghainese word may be transcribed in multiple different Chinese characters. This documentation aims to list out as many verions as possible for a decent coverage.

## Tokenization and Word Segmentation

* The principles of the [Penn Chinese Trebank](https://doi.org/10.1017/S135132490400364X) are followed.
* Function words are treated as separate tokens, even when phonologically or morphologically attached to verbs. These include items such as 了 _leh_, marking the perfective aspect, and 勒 _leh_, indicating the continuation of an action.
* Combined use of sentence-final particles are treated as a single token, unless they are syntactically different (e.g., one indicating the end of a sentence and the other one marking a question).
* Negators include 勿 _veh_ (also 伐, 弗) and 没 _meh_. They are not separated from the token if:
  * They are an integrated part of the word, which is very common.
  * It is difficult to find an "original form" of a negated word in Shanghainese (there is not always a corresponding word).

## Morphology

### Tags

* Shanghainese includes 15 universal POS tags, currently excluding [SYM]() and [X]().
* Particles ([PART](), see also [`PART` in Chinese UD](/zh/pos/PART.html)):
  * Mandarin Chinese particles 的 _de_, 地 _de_, and 得 _de_ exactly correspond to a same multifunctional Shanghainese particle in 个 _eh_ (also transcribed as 呃, 额) that functions as a genitive, relativiser, nominaliser, or adverbialiser.
    * The character 个 _eh_ can also be a classifier, which follows the same usage in Mandarin and is thus not a particle in such case.
  * Shanghainese sentence-final particles include 伐 _vah_, 了 _leh_ (also 嘞), and 啦 _'la_. Combined use is also very common in Shanghainese, especially in rhetorical questions (such as 伐啦 _veh 'la_).
* Nouns ([NOUN](), see also [`NOUN` in Chinese UD](/zh/pos/NOUN.html)):
  * Words tagged as [NOUN]() include regular nouns, classifiers, temporal nouns, position words, and localisers.
  * Temporal nouns, despite typically being the adjunct of verbs, are always tagged as a noun.
* Pronouns ([PRON](), see also [`PRON` in Chinese UD](/zh/pos/PRON.html)):
  * Personal pronouns:
    * There are no polite forms of personal pronouns in Shanghainese.
    * 吾 _ngu_ (first singular)
    * 阿拉 _ah 'la_ (first plural)
    * 侬 _non_ (second singular)
    * 㑚 (also 拿) _na_ (second plural)
    * 渠 (also 伊) _yi_ (third singular)
    * 渠拉 (also 伊拉) _yi 'la_ (third plural)
    * Possessive case of the pronouns are constructed by appending 个 _eh_ (genitive particle).
  * Demonstrative pronouns:
    * There are two demonstrative pronouns in Shanghainese:
      * 搿 (also 葛) _geh_ "this/these" or "here"
      * 埃 (also 伊) _i_ "that/those" or "there"
    * They also form derived forms: 搿搭 _geh teh_ "here", 埃搭 _i teh_ "there", and 埃面搭 _i mie teh_ "there".
* All other tagging rules are the same as Mandarin Chinese.

### Features

Additional features are currently not included.

## Syntax

* Shanghainese syntax is essentially the same as [Chinese syntax](/zh/index.html#syntax).
* Oblique nominal ([obl](), see also [`obl` in Chinese UD](/zh/dep/obl.html))
  * Shanghainese 被 _be_ corresponds to the same Mandarin word 被 _bei_. See [`obl:agent` in Chinese UD](/zh/dep/obl-agent.html).
  * Mandarin word 把 _ba_ corresponds to Shanghainese 拿 _no_ and 帮 _paon_ . See [`obl:patient` in Chinese UD](/zh/dep/obl-patient.html).
* Relation subtypes are currently not considered.
* 34 relation types are present, excluding [expl](), [list](), and [fixed]().

## Treebanks

There is only one Shanghainese UD treebank:

  * [Shanghainese-ShUD](../treebanks/wuu_shud/index.html)

