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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udaxm_armtdp219)<br />
Download all treebanks: [UD 2.19](/#download)

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
* `Lang=` markers are present.
* Form (Translit) and lemma (LTranslit) transliterations are present.
* Document, paragraph, sentence, and token ids are 4-character base-32 numbers. They survive treebank updates.




# Statistics of UD Middle Armenian ArmTDP

## POS Tags

[ADJ](axm_armtdp-pos-ADJ.html) – [ADP](axm_armtdp-pos-ADP.html) – [ADV](axm_armtdp-pos-ADV.html) – [AUX](axm_armtdp-pos-AUX.html) – [CCONJ](axm_armtdp-pos-CCONJ.html) – [DET](axm_armtdp-pos-DET.html) – [INTJ](axm_armtdp-pos-INTJ.html) – [NOUN](axm_armtdp-pos-NOUN.html) – [NUM](axm_armtdp-pos-NUM.html) – [PART](axm_armtdp-pos-PART.html) – [PRON](axm_armtdp-pos-PRON.html) – [PROPN](axm_armtdp-pos-PROPN.html) – [PUNCT](axm_armtdp-pos-PUNCT.html) – [SCONJ](axm_armtdp-pos-SCONJ.html) – [VERB](axm_armtdp-pos-VERB.html)

## Features

[Abbr](axm_armtdp-feat-Abbr.html) – [AdpType](axm_armtdp-feat-AdpType.html) – [Aspect](axm_armtdp-feat-Aspect.html) – [Case](axm_armtdp-feat-Case.html) – [Connegative](axm_armtdp-feat-Connegative.html) – [Definite](axm_armtdp-feat-Definite.html) – [Degree](axm_armtdp-feat-Degree.html) – [Deixis](axm_armtdp-feat-Deixis.html) – [Deixis[psor]](axm_armtdp-feat-Deixis-psor.html) – [ExtPos](axm_armtdp-feat-ExtPos.html) – [Foreign](axm_armtdp-feat-Foreign.html) – [Mood](axm_armtdp-feat-Mood.html) – [NameType](axm_armtdp-feat-NameType.html) – [Number](axm_armtdp-feat-Number.html) – [NumForm](axm_armtdp-feat-NumForm.html) – [NumType](axm_armtdp-feat-NumType.html) – [Person](axm_armtdp-feat-Person.html) – [Person[psor]](axm_armtdp-feat-Person-psor.html) – [Polarity](axm_armtdp-feat-Polarity.html) – [Poss](axm_armtdp-feat-Poss.html) – [PronType](axm_armtdp-feat-PronType.html) – [Reflex](axm_armtdp-feat-Reflex.html) – [Style](axm_armtdp-feat-Style.html) – [Subcat](axm_armtdp-feat-Subcat.html) – [Tense](axm_armtdp-feat-Tense.html) – [Typo](axm_armtdp-feat-Typo.html) – [VerbForm](axm_armtdp-feat-VerbForm.html) – [Voice](axm_armtdp-feat-Voice.html)

## Relations

[acl](axm_armtdp-dep-acl.html) – [acl:relcl](axm_armtdp-dep-acl-relcl.html) – [advcl](axm_armtdp-dep-advcl.html) – [advcl:relcl](axm_armtdp-dep-advcl-relcl.html) – [advmod](axm_armtdp-dep-advmod.html) – [advmod:emph](axm_armtdp-dep-advmod-emph.html) – [amod](axm_armtdp-dep-amod.html) – [appos](axm_armtdp-dep-appos.html) – [aux](axm_armtdp-dep-aux.html) – [aux:caus](axm_armtdp-dep-aux-caus.html) – [case](axm_armtdp-dep-case.html) – [cc](axm_armtdp-dep-cc.html) – [ccomp](axm_armtdp-dep-ccomp.html) – [compound](axm_armtdp-dep-compound.html) – [compound:lvc](axm_armtdp-dep-compound-lvc.html) – [conj](axm_armtdp-dep-conj.html) – [cop](axm_armtdp-dep-cop.html) – [csubj](axm_armtdp-dep-csubj.html) – [csubj:outer](axm_armtdp-dep-csubj-outer.html) – [dep](axm_armtdp-dep-dep.html) – [det](axm_armtdp-dep-det.html) – [discourse](axm_armtdp-dep-discourse.html) – [dislocated](axm_armtdp-dep-dislocated.html) – [fixed](axm_armtdp-dep-fixed.html) – [flat](axm_armtdp-dep-flat.html) – [flat:name](axm_armtdp-dep-flat-name.html) – [flat:range](axm_armtdp-dep-flat-range.html) – [flat:redup](axm_armtdp-dep-flat-redup.html) – [iobj](axm_armtdp-dep-iobj.html) – [mark](axm_armtdp-dep-mark.html) – [nmod](axm_armtdp-dep-nmod.html) – [nmod:npmod](axm_armtdp-dep-nmod-npmod.html) – [nmod:poss](axm_armtdp-dep-nmod-poss.html) – [nsubj](axm_armtdp-dep-nsubj.html) – [nsubj:outer](axm_armtdp-dep-nsubj-outer.html) – [nsubj:pass](axm_armtdp-dep-nsubj-pass.html) – [nummod](axm_armtdp-dep-nummod.html) – [obj](axm_armtdp-dep-obj.html) – [obl](axm_armtdp-dep-obl.html) – [obl:agent](axm_armtdp-dep-obl-agent.html) – [orphan](axm_armtdp-dep-orphan.html) – [parataxis](axm_armtdp-dep-parataxis.html) – [punct](axm_armtdp-dep-punct.html) – [root](axm_armtdp-dep-root.html) – [xcomp](axm_armtdp-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 252 sentences and 5647 tokens.</li>
</ul>

<ul>
<li>This corpus contains 1291 tokens (23%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): թէ, մի, ոչ, որ, չ</li>
</ul>

<ul>
<li>This corpus contains 21 lemmas tagged as pronouns (PRON): ամենեքեան, ամէն, այլն, այն, այնպիսի, այս, դու, ես, զինչ, ինչ, ինք, իր, իրար, մենք, նա, նոյն, որ, որտեղ, ոք, սա, սոյն</li>
</ul>

<ul>
<li>This corpus contains 18 lemmas tagged as determiners (DET): ամենայն, ամէն, այլ, այն, այս, իմ, ինչ, իր, իրենց, իւր, հայնց, մեր, մէկ, մը, մի, ն, նոյն, քանի</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as PRON and sometimes as DET: ամէն, այն, այս, ինչ, իր, նոյն</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): եմ, լինիմ, կու, պիտի, տալ</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: տալ</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: է, լինի, տայ, են, չէ, չլինի, եմ, ենք, էի, լինին</li>
    <li>VERB: ունի, լինի, առ, լից, ելնէ, աւծնէ, դիր, լեսէ, կապէ, լուայ</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: սպաննել, խընդրել, տեսանել, Զընդանելն, բարձրանալ, գնալն, գոզել, դարցնելոյն, թարգմանել, թըրքել</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: հոտած, ասցել, խառնած, ծարուրած, փորձած, ածել, այրել, ասացեալ, գրել, դարձեալ</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: եռից</li>
      <li>AUX-Fin: են, ենք, լինին, չենք</li>
      <li>DET: իմոց, իրենց, մերոց</li>
      <li>NOUN: նշանքն, ջղերն, գրաստնոյ, ոտվին, աչսն, դեղերս, հայոց, որդիսն, բազկացն, բանք</li>
      <li>PRON: իրար, այնոք, ամենեսեան, այնպիսիքն, իրաց, մեզ, նոքա, ոմանք, որոց, որք</li>
      <li>VERB-Fin: ասեն, առնուն, լինին, տան, առնուին, գան, ճանչենան, յիշեցէք, անուանին, առնէին</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ptan
    <ul>
      <li>NOUN: աչքն, աչք, զաւդվածքն, ոտքն, փողքն, աւծնելիք, շլնիքն, փառք, թոյնքն, մօրուքն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: մեծի, բարեպաշտի, իմաստնո, հանճարաշատին, մտախոհի, սրբոյ</li>
      <li>AUX-Fin: է, լինի, տայ, չէ, չլինի, եմ, էի</li>
      <li>DET: իւր, իր, իմ, իմոյ</li>
      <li>NOUN: դեղ, նուկի, ջուրն, քիթն, մազն, աւր, դուռն, ջուր, գրաստն, գլուխն</li>
      <li>PRON: որ, ինք, այս, դու, ես, այնոր, այսոր, ինքն, իրմէ, այն</li>
      <li>PROPN: Զոհալն, Փայլածուն, Արեգակն, Լուսին, Լուսաբեր, Հրատն, Լուսաբերն, Լուսնթագ, Լուսինն, Լուսնթագն</li>
      <li>VERB-Fin: ունի, լինի, առ, լից, ելնէ, աւծնէ, դիր, լեսէ, կապէ, լուայ</li>
      <li>VERB-Part: ասացեալ, դարձեալ, երդուեալ, կատարեալ, հաւաքեալ, շարագրեալ, տեսեալ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>NOUN: խայթածէն, գրէ, ալկէ, աչիցն, արենէն, արքայէն, բաժնէն, բակլայէ, բերնէն, գիջութենէն</li>
      <li>PRON: իրմէ, իւրմէն, իւրմէ, նմանէ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: աչսն, որդիսն, ծնողսն, ձեռսն, անդամսն, աւուրս, երդմունս, զանցանս, թվիսն, խոստմունս</li>
      <li>PRON: իս, ամենեսեան</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: եւթնհարիւրերորդի, ութերորդի, սրբոյ, քսաներորդի</li>
      <li>DET: մերոց</li>
      <li>NOUN: գրաստուն, աւուրն, Աստուծոյ, գրաստնոյ, ձիոյ, ցաւուս, արեան, արքային, թագաւորին, հայոց</li>
      <li>PRON: իրար, այնոր, այսոր, իր, ինձ, իւրն, նմայ, իրաց, մեզ, նմին</li>
      <li>PROPN: Քրիստոսի, ՀԵԹՄՈՅ, Ուսուֆին, Պաղտըտայ, Ստեփաննոսի</li>
      <li>VERB-Inf: դարցնելոյն, խմելոյն, մտցնելոյ, շարժելոյն, քրտնելոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: մեծի, բարեպաշտի, եռից, իմաստնո, հանճարաշատին, մտախոհի</li>
      <li>DET: իմոյ, իմոց</li>
      <li>NOUN: տեառն, իշխանի, մեղաց, ԵՐԳՈՅ, ԵՐԳՈՑ, աստուծոյ, եպիսկոպոսի, իմաստասիրաց, ծառայի, հոգւոյ</li>
      <li>PRON: նորա, սորին</li>
      <li>PROPN: Տարսաիճի, ԱՐԵՒԵԼՑՒՈՅ, Ապի, Գրիգորիոսի, Ըռայշիտայ, ԼԱՄԲՐՈՆԱՑՒՈՅ, Կոստանդեայ, Կօռիկոսայ, Ճընայ, ՄԽԻԹԱՐԱՅ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>NOUN: ջրով, գինով, հրամանաւ, ձիթով, գոզով, քացխով, Աստուծով, ազգաւ, ամաւք, անաչառութեամբ</li>
      <li>PRON: իրովն</li>
      <li>VERB-Inf: տքալով</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>NOUN: դեղ, նուկի, ջուրն, քիթն, մազն, աւր, դուռն, ջուր, գրաստն, գլուխն</li>
      <li>PRON: որ, ինք, այս, դու, ես, ինքն, այն, այնոք, սա, ինքս</li>
      <li>PROPN: Զոհալն, Փայլածուն, Արեգակն, Լուսին, Լուսաբեր, Հրատն, Լուսաբերն, Լուսնթագ, Լուսինն, Լուսնթագն</li>
      <li>VERB-Inf: Զընդանելն, գնալն, տուրտվելն</li>
      <li>VERB-Part: ասացեալ, դարձեալ, երդուեալ, կատարեալ, հաւաքեալ, շարագրեալ, տեսեալ</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: ն</li>
      <li>NOUN: ջուրն, քիթն, մազն, դուռն, գրաստն, գլուխն, գրաստուն, երեսն, խայթածն, նշանքն</li>
      <li>PROPN: Զոհալն, Փայլածուն, Արեգակն, Հրատն, Լուսաբերն, Լուսինն, Լուսնթագն, Աղեղնաւորն, Այծեղջիւրն, Առիւծն</li>
      <li>VERB-Inf: Զընդանելն, գնալն, դարցնելոյն, խմելոյն, շարժելոյն, տուրտվելն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>NOUN: դեղ, նուկի, աւր, ջուր, ձէթ, դրամ, բժշկութիւն, երես, մարմին, աչք</li>
      <li>PROPN: Լուսին, Լուսաբեր, Լուսնթագ, Հրատ, Քրիստոս, Զաքէոս, Ստեփանոս, Քրիստոսի, Արեգակ, Թորոս</li>
      <li>VERB-Inf: մտցնելոյ, տքալով, քրտնելոյ</li>
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
      <li>ADJ: աղէկ, մեծ, գեղեցիկ, փոքր, շող, բարակ, թանձր, յերկայն, շատ, հաստ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: ճշմարտագէտն, մեծն</li>
      <li>ADV: շատն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Fin: չէ, չլինի, չենք</li>
      <li>PART: չ, մի, ոչ</li>
      <li>VERB-Fin: չայնէ, չայրէր, չաջողցաւ, չգան, չլինի, չկայ, չկենայ, չհասնի, չձգէ, չմեռնի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>AUX: է, լինի, տայ, են, եմ, ենք, էի, լինին, պիտի</li>
      <li>AUX-Fin: է, լինի, տայ, են, եմ, ենք, էի, լինին</li>
      <li>VERB-Fin: լինի, կայ, ուտէ, ելնէ, լինին, սպաննէ, տեսնուս, ցամքի, աջողնայ, առի</li>
      <li>VERB-Inf: սպաննել, Զընդանելն, գնալն, գոզել, դարցնելոյն, թարգմանել, թըրքել, լինել, խմելոյն, ծախել</li>
      <li>VERB-Part: հոտած, խառնած, ծարուրած, փորձած, լեսած, խայթած, հանած, մաղած, մեռած, սպանած</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Dur
    <ul>
      <li>VERB-Part: քայլող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: է, լինի, են, չէ, տայ, եմ, ենք, էի, չենք, չլինի</li>
      <li>VERB-Fin: ունի, լինի, ելնէ, բժշկի, յիշէ, կայ, մեռնի, ուռենայ, ասեն, իջնու</li>
      <li>VERB-Part: թամբեր, թողուր, կալնուր, հեծնուր, տար</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp,Iter
    <ul>
      <li>VERB-Fin: թապլտի, կտրտի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Fin: գրեցաւ, առի, գրեցի, աղաչեաց, աշխատեցայ, աջողցաւ, ասցաք, արար, արժանացոյց, թարգմանեցաւ</li>
      <li>VERB-Part: հոտած, ասցել, խառնած, ծարուրած, փորձած, ածել, այրել, գրել, լել, լեսած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>AUX-Fin: լինի, լինին, չլինի, տայ</li>
      <li>VERB-Fin: առ, լից, աւծնէ, դիր, լեսէ, լինի, կապէ, խառնէ, եփէ, լուայ</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: առ, լից, աւծնէ, դիր, լեսէ, կապէ, խառնէ, եփէ, լուայ, թող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: է, լինի, կու, են, չէ, տայ, եմ, ենք, էի, չենք</li>
      <li>AUX-Fin: է, լինի, են, չէ, տայ, եմ, ենք, էի, չենք, չլինի</li>
      <li>VERB-Fin: ունի, լինի, ելնէ, բժշկի, յիշէ, կայ, մեռնի, ուռենայ, ասեն, իջնու</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>AUX: պիտի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: լինի, լինին, չլինի, տայ</li>
      <li>VERB-Fin: լինի, ուտէ, ելնէ, լինին, սպաննէ, տեսնուս, ցամքի, աջողնայ, գան, իջնի</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: էի</li>
      <li>VERB-Fin: առնուին, առնէին, աւծնէին, բժշկէր, գայր, ելնէր, եռցնէին, թաղէին, լնուին, ծածկէին</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB-Fin: գրեցաւ, առի, գրեցի, աղաչեաց, աշխատեցայ, աջողցաւ, ասցաք, արար, արժանացոյց, թարգմանեցաւ</li>
      <li>VERB-Part: ասացեալ, դարձեալ, երդուեալ, կատարեալ, հաւաքեալ, շարագրեալ, տեսեալ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: է, լինի, տայ, են, չէ, չլինի, եմ, ենք, լինին, չենք</li>
      <li>VERB-Fin: ունի, լինի, ելնէ, բժշկի, յիշէ, կայ, մեռնի, ուռենայ, ասեն, իջնու</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>VERB-Fin: ունի, առ, լից, աւծնէ, դիր, լեսէ, կապէ, լուայ, խառնէ, եփէ</li>
      <li>VERB-Inf: սպաննել, Զընդանելն, թարգմանել, խմելոյն, ծախել, կանգնեցնել, կտրել, ձենել, մտցնելոյ, տանել</li>
      <li>VERB-Part: ասցել, խառնած, ծարուրած, փորձած, ածել, այրել, գրել, թամբեր, թողուր, լեսած</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>AUX-Fin: տայ</li>
      <li>VERB-Fin: արժանացոյց, խմցոյ, հագոյ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB-Fin: լինի, ելնէ, բժշկի, կայ, մեռնի, ուռենայ, իջնու, անուանի, ընկնի, կարէ</li>
      <li>VERB-Inf: գնալն, գոզել, դարցնելոյն, թըրքել, լինել, ծառայել, շարժելոյն, տքալով, քրտնելոյ</li>
      <li>VERB-Part: հոտած, լել, կարճատեալ, հասել, մեռած, միաբանեալ, վարժեալ, քայլող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: գրեցաւ, թարգմանեցաւ, խրատվի, կատարեցաւ, կտրվի, հովանասցի, շինվի, ողորմեսցի, ուտուի, փոխեցաւ</li>
      <li>VERB-Inf: բարձրանալ</li>
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
      <li>DET: մի, ն, մը, մն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: աստ, հայնց, անդ, ինչվայն</li>
      <li>DET: այս, այն, հայնց, նոյն</li>
      <li>PRON: այս, այնոր, այսոր, այն, այնոք, սա, նմայ, նորա, այնպիսիքն, նա</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: այլ, քանի, ինչ, մէկ</li>
      <li>PRON: ինչ, այլն, ոմանք, ոք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Poss
    <ul>
      <li>DET: իւր, իր, իմ, իրենց</li>
      <li>PRON: իրովն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: իմոյ, իմոց, մերոց</li>
      <li>PRON: ինք, դու, ես, ինքն, իրմէ, իր, ինձ, ինքս, իս, իւրմէն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: իրար, իրաց</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: երբ, եբ, ուր, յերբ</li>
      <li>PRON: որ, զինչ, զինչն, ինչ, որոյ, որոց, որու, որում, որտեղ, որք</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: ամէն, ամենայն</li>
      <li>PRON: ամենեսեան, ամէնն</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: երեք, երկու, մէկ, տասն, չորս, 2, Բ, 1279, 1296, ինն</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>NUM: կէս</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: Առաջին, Երկրորդ, եւթնհարիւրերորդի, ութերորդի, քսաներորդի</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: իմոյ, իմոց, մերոց</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: իւր, իր</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: եմ, ենք, էի</li>
      <li>DET: իմ, իմոյ, իմոց, մերոց</li>
      <li>PRON: ես, ինձ, իս, մեզ</li>
      <li>VERB-Fin: աղաչեմ, առի, գրեցի, աշխատեցայ, ասցաք, թարգմանեցի, լուայ, յիշենք, նորոգեցի</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: դու</li>
      <li>VERB-Fin: առ, լից, աւծնէ, դիր, լեսէ, կապէ, խառնէ, եփէ, լուայ, թող</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: է, լինի, տայ, են, չէ, չլինի, լինին, չենք</li>
      <li>DET: իւր, իր, իրենց</li>
      <li>PRON: ինք, ինքն, իրմէ, իր, ինքս, իրովն, իւրմէն, իւրն, իւրմէ</li>
      <li>VERB-Fin: ունի, լինի, ելնէ, բժշկի, յիշէ, կայ, մեռնի, ուռենայ, ասեն, իջնու</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: թու</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

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
          <li>ADP: զ, ի, յ, ընդ, վրայ, հետ, յաղագս, զէդ, վերայ, որպէս</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Connegative</a>
    <ul>
      <li>Yes
        <ul>
          <li>VERB-Part: թամբեր, թողուր, կալնուր, հեծնուր, տար</li>
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
          <li>PRON: այս, այսոր, սա, սայ, սմայ, սորին</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADV: անդ</li>
          <li>DET: այն, ն</li>
          <li>PRON: այնոր, այն, այնոք, նմայ, նորա, այնպիսիքն, նա, նմանէ, նմին, նոքա</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Deixis[psor]</a>
    <ul>
      <li>Med
        <ul>
          <li>NOUN: միսդ, յիշողացդ</li>
        </ul>
      </li>
      <li>Prox
        <ul>
          <li>NOUN: ցաւս, օձս, գիրքս, ցաւուս, դեղերս, բժիշկս, դեղս, ծրիչս, Բժշկարանս, անունս</li>
          <li>PRON: ինքս</li>
          <li>PROPN: Ֆարայճս</li>
        </ul>
      </li>
      <li>Remt
        <ul>
          <li>ADP: խեչն, խէչն</li>
          <li>NOUN: ներքևն, ակներն, ծառութեամբն, ցաւն, օձոյնն</li>
          <li>PRON: ինքն, իրովն, ամէնն, այնպիսիքն, զինչն</li>
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
          <li>ADJ: քիչ</li>
          <li>ADP: ի</li>
        </ul>
      </li>
      <li>ADP
        <ul>
          <li>ADP: ի, քան</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: ի, ընդ, յ, առ</li>
          <li>ADV: քիչ, այլ, աղէկ, աստ, կարճ, հետ, ևս, հայնց</li>
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
          <li>PRON: զինչ, զինչն, ինչ, որտեղ</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>CCONJ: ու</li>
          <li>SCONJ: քաւէլ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>PUNCT: :</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NameType</a>
    <ul>
      <li>Geo
        <ul>
          <li>PROPN: Զոհալն, Փայլածուն, Արեգակն, Լուսին, Լուսաբեր, Հրատն, Լուսաբերն, Լուսնթագ, Լուսինն, Լուսնթագն</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>PROPN: Զաքէոս, Ստեփանոս, Արուզխաթունն, Թորոս, ՀԵԹՄՈՅ, Հեթում, Ստեփաննոսի, Տարսաիճն</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: Աղեղնաւորն, Այծեղջիւրն, Առիւծն, Եկաւորն, Խեցգետինն, Խոյն, Կարիճն, Կշեռն, Կուսն, Ձուկն</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: Քրիստոս, Քրիստոսի, Էլիկումն, Ուսուֆին, Ջալալն, Փախրադաւլայն, Ֆարաճ, Ֆարայճս</li>
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
          <li>NUM: Բ, Գ, ԳՃ, Դ, ԷՃԽԵ, Թ, Ծ, ԾԱ, Կ, ԿԴ</li>
        </ul>
      </li>
      <li>Digit
        <ul>
          <li>NUM: 2, 1279, 1296, 3, 4, 9</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>ADJ: Առաջին, Երկրորդ</li>
          <li>NUM: երեք, երկու, մէկ, տասն, չորս, ինն, քսան, Տասնեւյոթ, Տասնեւութ, Տասնհինգ</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>2
        <ul>
          <li>NOUN: ձեռքդ</li>
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
          <li>ADJ: թոյլ</li>
          <li>ADP: յառաջ</li>
          <li>ADV: յորժամ, յերիկունն, յառաջ, յերբ</li>
          <li>DET: իւր</li>
          <li>NOUN: անոյշ, առվոյտ, ձոյթն</li>
          <li>PRON: իւրմէն, իւրն, իւրմէ</li>
          <li>PROPN: Առիւծն</li>
          <li>SCONJ: յերբ</li>
          <li>VERB-Fin: ունի, լինի, ելնէ, բժշկի, յիշէ, մեռնի, ուռենայ, ասեն, իջնու, սիրէ</li>
        </ul>
      </li>
      <li>Expr
        <ul>
          <li>ADJ: վախկուկ</li>
        </ul>
      </li>
      <li>Rare
        <ul>
          <li>ADJ: անաւրին</li>
          <li>NOUN: կշտէ, մօրաքեւերքն, քեւերքն</li>
        </ul>
      </li>
      <li>Var
        <ul>
          <li>ADJ: դեղձայն, կանաջ, աղեկ, աւաք, կռուզ</li>
          <li>ADP: զէթ, զերթ, խեչն, քանձ</li>
          <li>ADV: եբ</li>
          <li>NOUN: ալոյր, ալոյրն, այրեած, արոյն, բերդտուքն, գըխթորն, եղջերուին, լերթն, հընդկաց, ղեղն</li>
          <li>NUM: Տասնեւյոթ, մեկ</li>
          <li>PROPN: Զոհալն, Լուսանթագն, Ստեփաննոսի</li>
          <li>SCONJ: եբ, քանձ</li>
          <li>VERB-Fin: փըռընքտայ, փռընքտացոյ, լըվայ</li>
          <li>VERB-Inf: Զընդանելն, դարցնելոյն, թըրքել</li>
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
          <li>VERB-Fin: լինի, ելնէ, բժշկի, կայ, մեռնի, ուռենայ, իջնու, անուանի, ընկնի, կարէ</li>
          <li>VERB-Inf: գնալն, գոզել, դարցնելոյն, թըրքել, լինել, ծառայել, շարժելոյն, տքալով, քրտնելոյ</li>
          <li>VERB-Part: հոտած, լել, կարճատեալ, հասել, մեռած, միաբանեալ, վարժեալ, քայլող</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB-Fin: ունի, առ, լից, աւծնէ, դիր, լեսէ, կապէ, խառնէ, եփէ, լուայ</li>
          <li>VERB-Inf: սպաննել, Զընդանելն, թարգմանել, խմելոյն, ծախել, կանգնեցնել, կտրել, ձենել, մտցնելոյ, տանել</li>
          <li>VERB-Part: ասցել, խառնած, ծարուրած, փորձած, ածել, այրել, գրել, թամբեր, թողուր, լեսած</li>
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
          <li>ADV: Ապայ</li>
          <li>NOUN: անպատութիւնս, բժկարան, յարիւն</li>
          <li>PRON: սայ</li>
          <li>VERB-Part: սպանած</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: եմ.</li>
</ul>

<ul>
<li>This corpus uses 4 lemmas as auxiliaries (<a>aux</a>). Examples: լինիմ, եմ, կու, պիտի.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (1)</li>
      <li>VERB-Fin--NOUN-Nom (127)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(զ) (1)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Nom (52)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Part--NOUN-Nom (8)</li>
      <li>VERB-Part--PRON-Nom (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (2)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(զ) (2)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(զ) (1)</li>
      <li>VERB-Fin--NOUN-Nom (89)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(զ) (143)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(զ)-ADP(զ) (1)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Fin--PRON-Acc-ADP(զ) (2)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
      <li>VERB-Fin--PRON-Nom (2)</li>
      <li>VERB-Fin--PRON-Nom-ADP(զ) (34)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(զ) (1)</li>
      <li>VERB-Inf--NOUN-Nom (2)</li>
      <li>VERB-Inf--NOUN-Nom-ADP(զ) (3)</li>
      <li>VERB-Inf--NOUN-Nom-ADP(զ)-ADP(զ) (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Nom (2)</li>
      <li>VERB-Part--NOUN-Nom-ADP(զ) (2)</li>
      <li>VERB-Part--PRON-Acc-ADP(զ) (1)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
      <li>VERB-Part--PRON-Nom-ADP(զ) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (5)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(ի)-ADP(ի) (1)</li>
      <li>VERB-Fin--PRON-Dat (8)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 14 relation subtypes: <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>advmod:emph</a>, <a>aux:caus</a>, <a>compound:lvc</a>, <a>csubj:outer</a>, <a>flat:name</a>, <a>flat:range</a>, <a>flat:redup</a>, <a>nmod:npmod</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>vocative</a>, <a>expl</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
