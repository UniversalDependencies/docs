---
layout: base
title:  'UD_Middle_Armenian-ArmTDP'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Middle Armenian ArmTDP

Language: [Middle Armenian](/axm/index.html) (code: `axm`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.18 release.

The following people have contributed to making this treebank part of UD: Anna S. Danielyan, Marat M. Yavrumyan.

Repository: [UD_Middle_Armenian-ArmTDP](https://github.com/UniversalDependencies/UD_Middle_Armenian-ArmTDP)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udaxm_armtdp218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: legal, medical

Questions, comments?
General annotation questions (either Middle Armenian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Middle_Armenian-ArmTDP/issues).
If you want to collaborate, please contact [adanielyan&nbsp;(æt)&nbsp;ysu&nbsp;•&nbsp;am].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

A Universal Dependencies treebank for Middle Armenian developed for UD originally by the ArmTDP team led by Marat M. Yavrumyan at the Yerevan State University.



The UD_Middle_Armenian-ArmTDP treebank is derived from the Middle Armenian component of the ArmTDP v3.0 (Հայերենի ծառադարան), a comprehensive corpus of the Armenian language across various genres. Adhering strictly to Universal Dependencies (UD) guidelines, the dataset was manually annotated by the ArmTDP team. The processing pipeline—including tokenization and POS-tagging—utilized a hybrid approach of glossary-based automation followed by rigorous manual revision. As the only manually verified corpus of Middle Armenian, it provides exhaustive morphological and syntactic annotations, featuring complete dependency trees for every sentence.


## Acknowledgments

This work was supported by the Higher Education and Science Committee of the Ministry of Education, Science, Culture and Sports of the Republic of Armenia (Research Project № 27TARGET-6B173). The main contributor, Anna S. Danielyan, was involved in COST Action CA21167 — Universality, Diversity and Idiosyncrasy in Language Technology ([UniDive](https://unidive.lisn.upsaclay.fr/)).


## References

This treebank can also be referenced:

```tex
@misc{UD_Middle_Armenian-ArmTDP,
title={% raw %}{{{% endraw %}UD_Middle_Armenian-ArmTDP}: Universal Dependencies for Middle Armenian},
url={https://github.com/UniversalDependencies/UD_Middle_Armenian-ArmTDP},
author={
Anna S. Danielyan and Marat M. Yavrumyan
},
year={2026},
}
```

## Format

UD_Middle_Armenian-ArmTDP data conforms to [CoNLL-U](http://universaldependencies.org/format.html) format with the following specifics:
* Sentence-level comments:
* Document titles are present as `# doc_title = Քննութիւն բնութեան մարդոյ`.
* Document boundaries are present as `# newdoc id = legal/medical-xxxx`.
* Sentence-level paragraph boundaries are present as `# newpar id = newdoc-xxxx`.
* Sentence boundaries are present as `# sent_id = newdoc-newparxxxx`.
* XPOSTAG column is currently unused.
* No enhanced dependencies or empty nodes present in DEPS column.
* MISC column:
* `SpaceAfter=No` markers are present.
* Document, paragraph, sentence, and token ids are 4-character base-32 numbers. They survive treebank updates.




# Statistics of UD Middle Armenian ArmTDP

## POS Tags

[ADJ](axm_armtdp-pos-ADJ.html) – [ADP](axm_armtdp-pos-ADP.html) – [ADV](axm_armtdp-pos-ADV.html) – [AUX](axm_armtdp-pos-AUX.html) – [CCONJ](axm_armtdp-pos-CCONJ.html) – [DET](axm_armtdp-pos-DET.html) – [NOUN](axm_armtdp-pos-NOUN.html) – [NUM](axm_armtdp-pos-NUM.html) – [PART](axm_armtdp-pos-PART.html) – [PRON](axm_armtdp-pos-PRON.html) – [PROPN](axm_armtdp-pos-PROPN.html) – [PUNCT](axm_armtdp-pos-PUNCT.html) – [SCONJ](axm_armtdp-pos-SCONJ.html) – [VERB](axm_armtdp-pos-VERB.html)

## Features

[AdpType](axm_armtdp-feat-AdpType.html) – [Animacy](axm_armtdp-feat-Animacy.html) – [Aspect](axm_armtdp-feat-Aspect.html) – [Case](axm_armtdp-feat-Case.html) – [Definite](axm_armtdp-feat-Definite.html) – [Degree](axm_armtdp-feat-Degree.html) – [Deixis](axm_armtdp-feat-Deixis.html) – [Deixis[psor]](axm_armtdp-feat-Deixis-psor.html) – [ExtPos](axm_armtdp-feat-ExtPos.html) – [Mood](axm_armtdp-feat-Mood.html) – [NameType](axm_armtdp-feat-NameType.html) – [Number](axm_armtdp-feat-Number.html) – [NumForm](axm_armtdp-feat-NumForm.html) – [NumType](axm_armtdp-feat-NumType.html) – [Person](axm_armtdp-feat-Person.html) – [Polarity](axm_armtdp-feat-Polarity.html) – [PronType](axm_armtdp-feat-PronType.html) – [Reflex](axm_armtdp-feat-Reflex.html) – [Style](axm_armtdp-feat-Style.html) – [Subcat](axm_armtdp-feat-Subcat.html) – [Tense](axm_armtdp-feat-Tense.html) – [Typo](axm_armtdp-feat-Typo.html) – [VerbForm](axm_armtdp-feat-VerbForm.html) – [Voice](axm_armtdp-feat-Voice.html)

## Relations

[acl](axm_armtdp-dep-acl.html) – [acl:relcl](axm_armtdp-dep-acl-relcl.html) – [advcl](axm_armtdp-dep-advcl.html) – [advcl:relcl](axm_armtdp-dep-advcl-relcl.html) – [advmod](axm_armtdp-dep-advmod.html) – [advmod:emph](axm_armtdp-dep-advmod-emph.html) – [amod](axm_armtdp-dep-amod.html) – [appos](axm_armtdp-dep-appos.html) – [aux](axm_armtdp-dep-aux.html) – [aux:caus](axm_armtdp-dep-aux-caus.html) – [case](axm_armtdp-dep-case.html) – [cc](axm_armtdp-dep-cc.html) – [ccomp](axm_armtdp-dep-ccomp.html) – [compound:lvc](axm_armtdp-dep-compound-lvc.html) – [compound:redup](axm_armtdp-dep-compound-redup.html) – [conj](axm_armtdp-dep-conj.html) – [cop](axm_armtdp-dep-cop.html) – [csubj](axm_armtdp-dep-csubj.html) – [csubj:outer](axm_armtdp-dep-csubj-outer.html) – [det](axm_armtdp-dep-det.html) – [det:poss](axm_armtdp-dep-det-poss.html) – [discourse](axm_armtdp-dep-discourse.html) – [dislocated](axm_armtdp-dep-dislocated.html) – [fixed](axm_armtdp-dep-fixed.html) – [iobj](axm_armtdp-dep-iobj.html) – [mark](axm_armtdp-dep-mark.html) – [nmod](axm_armtdp-dep-nmod.html) – [nmod:npmod](axm_armtdp-dep-nmod-npmod.html) – [nmod:poss](axm_armtdp-dep-nmod-poss.html) – [nsubj](axm_armtdp-dep-nsubj.html) – [nsubj:outer](axm_armtdp-dep-nsubj-outer.html) – [nsubj:pass](axm_armtdp-dep-nsubj-pass.html) – [nummod](axm_armtdp-dep-nummod.html) – [obj](axm_armtdp-dep-obj.html) – [obl](axm_armtdp-dep-obl.html) – [orphan](axm_armtdp-dep-orphan.html) – [parataxis](axm_armtdp-dep-parataxis.html) – [punct](axm_armtdp-dep-punct.html) – [root](axm_armtdp-dep-root.html) – [xcomp](axm_armtdp-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 27 sentences, 1028 tokens and 1093 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 178 tokens (17%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
<li>This corpus contains 65 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 50 types of multi-word tokens. Examples: զմարդն, զայս, զկինն, զորդիսն, յոչ, զիր, զքրիստոնէ, յայլ, յիւրմէն, Զբերդտուքն, զամենայն, զամէնն, զայլն, զայն, զայնոք, զայնպիսիքն, զաչսն, զարեան, զգանկտվորացն, զգլուխն, զերկու, զթոյնքն, զիժն, զինքն, զիրենց, զիւր, զխայթածն, զկէս, զմարմինն, զմեղապարտսն, զպտղաբեր, զտուրտվելն, յայլազգեացն, յայն, յանթքն, յաչսն, յապաշխարութիւն, յառ, յարքունի, յերանացն, յերկիրն, յերկու, յիժ, յորդեցն, յօձիցն, չապրի, չառնու, չկարէ, չկշտանայ, չցաւէ.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: INTJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): թէ, ոչ, որ, չ</li>
</ul>

<ul>
<li>This corpus contains 16 lemmas tagged as pronouns (PRON): ամէն, այլ, այն, այնոք, այնպիսի, այս, զինչ, ինչ, ինք, իրք, մէկ, նա, նոքա, ոմանք, որ, ոք</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as determiners (DET): ամենայն, ամէն, այլ, այն, այս, իր, իւր, հայնց, մի</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as PRON and sometimes as DET: ամէն, այլ, այն, այս</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): եմ, լինիլ, տալ</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as AUX and sometimes as VERB: լինիլ, տալ</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: է, լինի, չէ, չտայ, տայ, են, լինին</li>
    <li>VERB: ելնէ, ուռենայ, կայ, մեռնի, անուանի, լինի, խայթէ, կենայ, սպաննէ, տան</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: սպաննել, Զընդանելն, ածել, այրել, գնալն, դարցնելոյն, լինել, խայթել, ծախել, կտրել</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: հոտած, լել, խայթած, կատարեալ, մեռած, սղարել, սպանած, տուրտվել</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>



<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Hum
    <ul>
      <li>NOUN: մարդ, մարդն, թագաւորին, կինն, որդիսն, քրիստոնէ, թագաւորն, Աստուծոյ, ազգին, ազգն</li>
      <li>PROPN: Քրիստոսի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nhum
    <ul>
      <li>NOUN: խայթածն, օձս, արիւն, խայթածէն, մարմինն, ազգ, աչսն, արեան, գին, գինն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Coll
    <ul>
      <li>NOUN: արիւն, արեան, այրեաց, անաչառութեամբ, ապաշխարութիւն, առ, ծուլութեան, հնազանդութեամբ, հնազանդութիւն, մեղայն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>AUX-Fin: են, լինին</li>
      <li>DET: իրենց</li>
      <li>NOUN: աչսն, թոյնքն, որդիսն, ձեռսն, այլազգեացն, անդամսն, անթքն, բերդտուքն, գանկտվորացն, գնոցն</li>
      <li>PRON: այնոք, այնպիսիքն, նոքա, ոմանք</li>
      <li>VERB-Fin: տան, առնուն, գան, լինին, անուանին, ասեն, եկէք, ծախեն, ուղղեն, չգան</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ptan
    <ul>
      <li>NOUN: արծուիք, երանացն, մեղանք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>AUX-Fin: է, լինի, չէ, չտայ, տայ</li>
      <li>DET: իւր, իր</li>
      <li>NOUN: խայթածն, մարդն, օձս, խայթածէն, մարդ, մարմինն, քրիստոնէ, ազգ, գին, գինն</li>
      <li>PRON: որ, ինքն, այսոր, այս, իւրմէն, այլն, այն, այնոր, ինքս, իւրն</li>
      <li>PROPN: Քրիստոսի</li>
      <li>VERB-Fin: ելնէ, ուռենայ, կայ, մեռնի, անուանի, լինի, խայթէ, կենայ, սպաննէ, ցաւէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>NOUN: խայթածէն, բաժնէն, գիջութենէն, կնկնէն, կրակէն, որդեցն, ջամբռէ, տաքութենէն</li>
      <li>PRON: իւրմէն, նմանէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>DET: իր, իրենց, իւր</li>
      <li>NOUN: մարդն, աչսն, կինն, որդիսն, գինն, դարպասն, ձեռսն, քրիստոնէ, ազգն, անդամսն</li>
      <li>PRON: ամէնն, այլն, այն, այնոք, այնպիսիքն, ինքն</li>
      <li>VERB-Inf: տուրտվելն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: արեան, թագաւորին, օձի, երկրին, խայթածին, տաճկին, Աստուծոյ, ազգին, այլազգեացն, ասխան</li>
      <li>PRON: այսոր, այնոր, իւրն, նմայ</li>
      <li>PROPN: Քրիստոսի</li>
      <li>VERB-Inf: դարցնելոյն, շարժելոյն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>PRON: նորա</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>NOUN: կամայ, անաչառութեամբ, աւրինակովն, կամաւք, հնազանդութեամբ, ջրով, սիրղով, ցաւով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>DET: իւր, իր</li>
      <li>NOUN: խայթածն, արիւն, մարդ, օձս, ազգ, գին, թոյնքն, իժ, մարմինն, օձ</li>
      <li>PRON: որ, ինքն, այս, ինքս, մէկն, նոքա, ոմանք, ոք</li>
      <li>VERB-Inf: Զընդանելն, գնալն</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>NOUN: խայթածն, մարդն, խայթածէն, մարմինն, աչսն, գինն, դարպասն, թագաւորին, թոյնքն, կինն</li>
      <li>PRON: այլն, այնպիսիքն, մէկն</li>
      <li>VERB-Inf: Զընդանելն, գնալն, դարցնելոյն, շարժելոյն, տուրտվելն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>NOUN: մարդ, քրիստոնէ, ազգ, արեան, արիւն, կամայ, օձ, օձի, ատօրօս, գին</li>
      <li>PROPN: Քրիստոսի</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADV: այլ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: յոլով, պատեհ, անպսակ, արժան, արքունի, գաղտուկ, դեղին, դժար, դժնիկ, թանձր</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Fin: չէ, չտայ</li>
      <li>PART: չ, ոչ</li>
      <li>VERB-Fin: կշտանայ, չգան, չկայ, չմեռնի, չուննայ, չսպաննէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX-Fin: է, լինի, տայ, են, լինին</li>
      <li>VERB-Fin: ելնէ, ուռենայ, կայ, մեռնի, անուանի, լինի, խայթէ, կենայ, սպաննէ, տան</li>
      <li>VERB-Inf: սպաննել, Զընդանելն, ածել, այրել, գնալն, դարցնելոյն, լինել, խայթել, ծախել, կտրել</li>
      <li>VERB-Part: հոտած, լել, խայթած, կատարեալ, մեռած, սղարել, սպանած, տուրտվել</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: է, լինի, չէ, են</li>
      <li>VERB-Fin: ելնէ, կայ, ուռենայ, անուանի, մեռնի, խայթէ, տան, ցաւէ, առնուն, ասեն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Part: հոտած, լել, խայթած, կատարեալ, մեռած, սղարել, սպանած, տուրտվել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX-Fin: լինի, չտայ, տայ, լինին</li>
      <li>VERB-Fin: լինի, այնէ, գան, լինին, սպաննէ, ամուսնանայ, առնու, աւերէ, բերէ, բորբոքէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: գիտացիր, եկէք, թող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: է, լինի, չէ, են</li>
      <li>VERB-Fin: ելնէ, կայ, ուռենայ, անուանի, մեռնի, խայթէ, տան, ցաւէ, առնուն, ասեն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: լինի, չտայ, տայ, լինին</li>
      <li>VERB-Fin: լինի, գան, լինին, սպաննէ, ամուսնանայ, այնէ, առնու, աւերէ, բերէ, բորբոքէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: կայր</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: է, լինի, չէ, չտայ, տայ, են, լինին</li>
      <li>VERB-Fin: ելնէ, ուռենայ, կայ, մեռնի, անուանի, լինի, խայթէ, կենայ, սպաննէ, տան</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB-Fin: խայթէ, սպաննէ, տան, այնէ, առնուն, ասեն, ելնէ, կարէ, ունենայ, ունի</li>
      <li>VERB-Inf: սպաննել, Զընդանելն, ածել, այրել, դարցնելոյն, խայթել, ծախել, կտրել, ձենել, տանել</li>
      <li>VERB-Part: հոտած, կատարեալ, սղարել, սպանած, տուրտվել</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>AUX-Fin: չտայ, տայ</li>
      <li>VERB-Fin: հասցնէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB-Fin: ուռենայ, կայ, մեռնի, անուանի, ելնէ, լինի, կենայ, ցաւէ, ասի, գան</li>
      <li>VERB-Inf: գնալն, լինել, շարժելոյն</li>
      <li>VERB-Part: հոտած, լել, խայթած, մեռած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: խրատվի, կտրվի</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Art
    <ul>
      <li>DET: մի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: անդ, աստ</li>
      <li>DET: այս, այն, հայնց</li>
      <li>PRON: այս, այսոր, այն, այնոր, այնոք, այնպիսիքն, նմայ, նմանէ, նորա</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: այլ</li>
      <li>PRON: զինչ, ինչ, իրք, այլն, մէկն, ոմանք, ոք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Poss
    <ul>
      <li>DET: իւր, իր, իրենց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ինքն, իւրմէն, ինքս, իւրն, նոքա</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: երբ, ուր</li>
      <li>PRON: որ, ինչ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: ամենայն, ամէն</li>
      <li>PRON: ամէնն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 2, Բ, երկու, երեք, 3, 4, Գ, ԳՃ, Դ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: իր</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>2
    <ul>
      <li>VERB-Fin: գիտացիր, եկէք, թող, տեսնուս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: է, լինի, չէ, չտայ, տայ, են, լինին</li>
      <li>DET: իւր, իր, իրենց</li>
      <li>PRON: ինքն, իւրմէն, ինքս, իւրն, նոքա</li>
      <li>VERB-Fin: ելնէ, ուռենայ, կայ, մեռնի, անուանի, լինի, խայթէ, կենայ, սպաննէ, տան</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Post
        <ul>
          <li>ADP: նման</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: զ, ի, յ, ընդ, առանց, որպէս, քան, առ, զարդ, ըստ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Deixis</a>
    <ul>
      <li>Prox
        <ul>
          <li>ADV: աստ</li>
          <li>DET: այս</li>
          <li>PRON: այս, այսոր</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: անդ</li>
          <li>DET: այն</li>
          <li>PRON: այն, այնոր, այնոք, նմայ, նմանէ, նորա</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Deixis[psor]</a>
    <ul>
      <li>Prox
        <ul>
          <li>NOUN: օձս, ս</li>
          <li>PRON: ինքս</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>NOUN: նն</li>
          <li>PRON: ինքն, իւրն</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADJ
        <ul>
          <li>ADP: ի</li>
        </ul>
      </li>
      <li>ADP
        <ul>
          <li>ADP: քան</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: ընդ, ի</li>
        </ul>
      </li>
      <li>PART
        <ul>
          <li>VERB-Fin: թող</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>DET: ամէն</li>
          <li>PRON: ինչ</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>SCONJ: քաւէլ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NameType</a>
    <ul>
      <li>Prs
        <ul>
          <li>PROPN: Քրիստոսի</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Armenian
        <ul>
          <li>NUM: Բ, Գ, ԳՃ, Դ</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>NUM: 2, 3, 4</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: երկու, երեք</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Style</a>
    <ul>
      <li>Arch
        <ul>
          <li>AUX-Fin: լինի, լինին</li>
          <li>DET: իւր</li>
          <li>NOUN: երանացն, մեղանք, քիրտն</li>
          <li>PRON: իւրմէն, իւրն, նմանէ</li>
          <li>VERB-Fin: ելնէ, ուռենայ, անուանի, մեռնի, խայթէ, տան, ցաւէ, ասեն, երթայ, լինի</li>
        </ul>
      </li>
      <li>Rare
        <ul>
          <li>NOUN: կամայ</li>
        </ul>
      </li>
      <li>Var
        <ul>
          <li>ADJ: աւրինադրակից</li>
          <li>ADP: զերդ, զերթ</li>
          <li>ADV: յերբ, աւրինաւոր</li>
          <li>NOUN: աւրինակովն, բերդտուքն, զաւդվածքն, իրավունք, խոստովանհայրքն, կնկնէն, ուռիցն</li>
          <li>SCONJ: նայ</li>
          <li>VERB-Inf: Զընդանելն, դարցնելոյն</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Subcat</a>
    <ul>
      <li>Intr
        <ul>
          <li>VERB-Fin: ուռենայ, կայ, մեռնի, անուանի, ելնէ, լինի, կենայ, ցաւէ, ասի, գան</li>
          <li>VERB-Inf: գնալն, լինել, շարժելոյն</li>
          <li>VERB-Part: հոտած, լել, խայթած, մեռած</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB-Fin: խայթէ, սպաննէ, տան, այնէ, առնուն, ասեն, ելնէ, ունենայ, ունի, վճարէ</li>
          <li>VERB-Inf: սպաննել, Զընդանելն, ածել, այրել, դարցնելոյն, խայթել, ծախել, կտրել, ձենել, տանել</li>
          <li>VERB-Part: հոտած, կատարեալ, սղարել, սպանած, տուրտվել</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: յարիւն</li>
          <li>VERB-Part: սպանած</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: եմ, լինիլ.</li>
</ul>

<ul>
<li>This corpus uses 2 lemmas as auxiliaries (<a>aux</a>). Examples: լինիլ, եմ.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc-ADP(զ) (1)</li>
      <li>VERB-Fin--NOUN-Nom (47)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Nom (7)</li>
      <li>VERB-Inf--NOUN-Nom (2)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Nom (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(զ) (14)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(զ) (1)</li>
      <li>VERB-Fin--NOUN-Nom (8)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(զ) (2)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-Acc-ADP(զ) (4)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Nom-ADP(զ) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(զ) (4)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(զ) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(ի)-ADP(ի) (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>advmod:emph</a>, <a>aux:caus</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>csubj:outer</a>, <a>det:poss</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>compound</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>vocative</a>, <a>expl</a>, <a>clf</a>, <a>flat</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
