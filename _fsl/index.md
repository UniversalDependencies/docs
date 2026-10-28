---
layout: base
title:  'French Sign Language UD'
udver: '2'
---

# UD for French Sign Language <span class="flagspan"><img class="flag" src="../../flags/svg/FR.svg" /></span>

## Tokenization and Word Segmentation

Sign languages contain both lexical signs, which are quite easy to isolate, and non-lexicalized sequences, which can be more delicate to segment. Moreover, additionnal information is regularly present with the sign, realized simultaneously, so our segmentation allows us is to gather in one token all the elements articulated together. Lexical signs are transcribed by a gloss in French corresponding to the closest translation in French. For non lexical signs, the gloss is more as a description of the sign. Theses glosses are presented in square brackets, with uppercase for lexical signs and lowercase for non lexical signs. The additional and simultaneous information is described in the features. 
 - The English transcription, similar to the French transcription, presented in the `Gloss` feature. The treebank can be easily converted into a English-based transcribed corpus. Following examples are given in English.
 - Most tokens are composed of one sign between square brackets `[]`. If more than one word in written French is used to describe the token, a dash `-` is used inbetween the words (ex: *[stop-suddently]*, *[fence-between-stakes]*).
 - Some token include the pattern *[]-[]*, which indicates morphological compound, generally incorporating numeral signs (ex: *[DURING-HOUR]-[EIGHT]* 'during eight hours', realized by a move with two hands where the number of visible fingers indicates the number of hours)
 - The use of dactylology (signing each letter) is represented with the following pattern *[A]-[B]-[C]-[D]*, with single letters in brackets, giving one token.
 - Double brackets are used when the token has been anonymized, the gloss is thus a more vague description of the token (ex: if a specific city has to be anonymized, such as *[PARIS]*, it appears as *[[CITY]]*).
 - Some elements that can be found outside the brackets, indicating that the sign is part of a larger class of sign:
   - `POSS[]` - a standardized possessive hand configuration with can vary in person depending on its movement and direction;
   - `PNT[]` - a pointing sign, with the configuration of the pointing index, allowing the signer to interact with the signing space, which can be used to create/activate different discourse referent or for spatial descriptions
   - `PNT-SURFACE[]` - also a pointing sign, with the configuration of the pointing palm
   - `PRF[]` - signals the use of a proform, close to the concept of classifiers in the broader SL linguistic field, which is the use of one hand configuration (standardized or not) to refer to/incarnate into an element of the current discourse
     - This type can appear with an additional information, as `PRF(DH)[]` or `PRF(NDH)[]` specifying if the proform is realized with the dominant of non-dominant hand, if nothing is specified, it is realized with two hands. 
   - `SST[]` - signals the use of a Shape and Size Transfert, describing iconically some physical characteristics of an element of discourse
   - `SignedName[]` - signals the use of any sign used as a name (ex: in another context the sign might mean 'long hair' or 'umbrella' or not be interpretable, but in this case it refers to a specific person)
   - These elements are thus the lemma of the concerned signs. 
 - Multiword tokens are not used.
 - Lemmas are used to group inflected signs belonging to a unique paradigm (ex: *[CUT]* and *[CUT-in-pieces]* have both the lemma *[CUT]*).
   - all tokens belonging to one of the classes described before have a common lemma (ex: *POSS[...]* are grouped under the lemma *POSS*)
   - if tokens present with a mix of standardized and non-standardized element, the lemma is only the standardized form
   - all tokens including fingerspelling are grouped under the lemma *FingerSpelling*
 - the lexicon of French and LSF obviously don't always share a one to one correspondance for each lemma
   - if the sign correspond to several words in French, we tried to always select the same word in French (ex: *'too'* and *'same'* always described as *[TOO]*)
   - if one word in French can be encoded by two different signs, two strategies were employed
     - if the 2 signs give more semantic specification, multiple words were used to encode the sign (ex: *[DURING-HOUR]*, since the word *'hour'* in French, as in English, can be use as a punctual reference, or as a duration, LSF uses different signs, similar to the German distinction *Uhr-Stunde*)
     - if the 2 signs have the same semantic content, the second sign encountered was encoded with a number *[NAME2]* (as *[ADORE]* and *[ADORE2]* that can be observed in the corpus)
 - Some signs present with the additional description *PI_* inside the brackets (ex: *[PI_TYPICAL]*, *[PI_THIS-ONE]*). This description is characteristic of the French Deaf community. Different signs are called "*PI*", this name comes from the mouthing realized simultaneously with these signs. They have different meanings and forms, which are also described, however the mention of this specific denomination was important for us to not erase as it is part of the Deaf culture itself. It is thus an example of the limitation when it comes to describing LSF with written French, and one solution we suggest so far.


## Morphology

### Tags
 - LSF uses the universal tags: `ADJ`, `ADP`, `ADV`, `CCONJ`, `INTJ`, `NOUN`, `NUM`, `PRON`, `PROPN`, `PUNCT`, `SCONJ`, `VERB`, `X`
 - The following tags are not used: `AUX`, `DET`, `PART`, `SYM`
 - Using the upos categories for the tokens in LSF is not trivial. Some tests were used to distinguish between different upos.
    - To distinguish between `NOUN` and `VERB`, we tested what negation would be used on the given token. This test originated from the observation that `VERB` are negated by the sign *[NO]*, while the `NOUN` are negated by the sign *[THERE-IS-NOT]*.
### Features

 - Universal features used: `Number`, `Voice`, `PronType`
 - Many language-/modality-specific feature were added: 
    - for a better description of the manual modality: `NDH` (non-dominant hand), `NDHHeld` (held sign from the non-dominant hand), `DHHeld` (held sign from the dominant hand), `TwoH` (sign realized with two hands, only in the case of `PNT`, `SST` or signs more commonly realized with one hand), `Rep` (identical repetition)
    - related to non-manual modality: `Exp` (facial expression), `Exp[lex]` (lexicalized facial expression, it is part of the sign itself), `Trs` (torso movement, usually for role shift/change of personal transfer), `Gaze`, `GazeHeld`, `NMM` (non-manual modality)
    - for the use of space: `Loc` (locus), `Src` (source), `Tgt` (target)
    - for the iconicity: `PT` (personal transfer, similar to a role shift in the broader sign language literature), `PTReal` (personal transfer realization), `ST` (situational transfer, when different proforms are used to represent the situation from an external point of view), `STReal` (situational transfer realization)
    - for reported speech: `Reported`, which is only marked on the head of the reported segment
    - for the grammatical roles incorporated in the sign: `Subj`, `Obj`, `Agent` (in case of passive construction), `Instr`, `Manner`
 - If more than one element has to be described for a specific feature, it is added with a `+` sign (ex: *PRF(DH)[ANIMÉ]+PRF(NDH)[tram]*)



## Syntax
 
 - French Sign Language uses 16 relation types: `cc`, `comp`, `compound`, `conj`, `discourse`, `dislocated`, `flat`, `mod`, `parataxis`, `punct`, `reparandum`, `root`, `subj`, `uped`, `unk`, `vocative` 
 - Nonverbal predicates do not make use of copula constructions. 
 - The following subtypes are used for French Sign Language:
   - `compound:svc` for serial verb constructions 
   - `conj:appos` for a second denomination of a previous element 
   - `conj:chaining` for the articulation of different event with the use of different iconic processes as a coherent chain, such as proforms, PTs or STs 
   - `conj:contr` for a contrastive construction in which an element is mentioned just a contrasting point to insist on a second one 
   - `conj:dbl` for doubling of syntactic element across the sentence 
   - `conj:illustrate` for the use of two tokens for the same referent or event, with an standardized and iconic sign, the latter one as an illustration of the first 
   - `conj:reform` for a reformulation of a previous constituent 
   - `conj:zoom` for a addition of an element more specific then the previous one 
   - `discourse:participant` for an introduction of the speaker before reported speech

## Treebanks

There is one French Sign Language UD treebank:
  - [French Sign Language-STKAutogramm](../treebanks/fsl_stkautogramm/index.html)

