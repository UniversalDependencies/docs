---
layout: base
title:  'UD_Cuicatec-MesoTree'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Cuicatec MesoTree

Language: [Cuicatec](/cux/index.html) (code: `cux`)<br/>
Family: Oto-Manguean

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Robert Pugh, Francis Tyers, Lucía Lezama Tejada, Mazali Madai Herrera Ojeda, María Lilia Herrera Ojeda.

Repository: [UD_Cuicatec-MesoTree](https://github.com/UniversalDependencies/UD_Cuicatec-MesoTree)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udcux_mesotree219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Cuicatec-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Cuicatec-MesoTree/issues).
If you want to collaborate, please contact [ftyers&nbsp;(æt)&nbsp;iu&nbsp;•&nbsp;edu].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

UD Cuicatec-MesoTree consists of sentences in Tepeuxila Cuicatec annotated as part of the
NSF-funded project "Syntactically-annotated corpora for endangered languages in areal contact"
(MesoTree).



Cuicatec (_dibaku_, _dbaku_, _dubaku_) is an Oto-Manguean language of the Mixtecan
branch, spoken in the southern Cañada region of Oaxaca, Mexico. The treebank is of Tepeuxila Cuicatec
(_dbaku_), spoken in the communities around San Juan Tepeuxila.

The pre-existing dictionary example sentences initially contemplated for annotation are in a variety of
Tepeuxila Cuicatec different from that of the collaborators, so the treebank was instead created by:

* translating the elicitation sentences from the _Archivo de lenguas indígenas de México_ (ALIMG) (sentence IDs beginning with `alimg`);
* asking our collaborators to produce word lists and coming up with a sentence for each (sentence IDs beginning with `ejemplos`).

The sentences are written following the collaborators' own orthographic norms for their language variety.
The original text is given in `text[orig]`, a normalised version in `text` (affecting apostrophes and capitalisation), and a Spanish
translation in `text[spa]`. Non-standard spellings are marked `Typo=Yes`, usually with the standard
form in the MISC attribute `Normal`. The MISC column also contains morpheme glosses (`Gloss`) and Spanish word
translations (`Trad`) for some of the words.

The sentences were annotated in a web interface combining UD Annotatrix and Arborator-Grew, with final annotations decided by group
consensus. Lemmas and morphological features are not yet annotated for the whole corpus.

## Acknowledgments

We would like to thank our Cuicatec collaborators who wrote, translated and annotated these
sentences. This work was supported by NSF grant 2319246/2319247, "Collaborative Research:
Syntactically-annotated corpora for endangered languages in areal contact".

## References

* Pugh, R., Tyers, F., & Henderson, R. (2026, May). MesoTree: Annotated Linguistic Resources for Quantitative Comparative Linguistic Analysis and NLP in Mesoamerica. In The Ninth Workshop on Universal Dependencies (UDW 2026), (pp. 197–207).



# Statistics of UD Cuicatec MesoTree

## POS Tags

[ADJ](cux_mesotree-pos-ADJ.html) – [ADP](cux_mesotree-pos-ADP.html) – [ADV](cux_mesotree-pos-ADV.html) – [AUX](cux_mesotree-pos-AUX.html) – [CCONJ](cux_mesotree-pos-CCONJ.html) – [DET](cux_mesotree-pos-DET.html) – [INTJ](cux_mesotree-pos-INTJ.html) – [NOUN](cux_mesotree-pos-NOUN.html) – [NUM](cux_mesotree-pos-NUM.html) – [PART](cux_mesotree-pos-PART.html) – [PRON](cux_mesotree-pos-PRON.html) – [PROPN](cux_mesotree-pos-PROPN.html) – [PUNCT](cux_mesotree-pos-PUNCT.html) – [SCONJ](cux_mesotree-pos-SCONJ.html) – [VERB](cux_mesotree-pos-VERB.html) – [X](cux_mesotree-pos-X.html)

## Features

[Animacy](cux_mesotree-feat-Animacy.html) – [Aspect](cux_mesotree-feat-Aspect.html) – [Gender](cux_mesotree-feat-Gender.html) – [Mood](cux_mesotree-feat-Mood.html) – [NounType](cux_mesotree-feat-NounType.html) – [Number](cux_mesotree-feat-Number.html) – [NumType](cux_mesotree-feat-NumType.html) – [Person](cux_mesotree-feat-Person.html) – [PronType](cux_mesotree-feat-PronType.html) – [Subcat](cux_mesotree-feat-Subcat.html) – [Typo](cux_mesotree-feat-Typo.html) – [VerbForm](cux_mesotree-feat-VerbForm.html)

## Relations

[acl](cux_mesotree-dep-acl.html) – [advcl](cux_mesotree-dep-advcl.html) – [advmod](cux_mesotree-dep-advmod.html) – [amod](cux_mesotree-dep-amod.html) – [appos](cux_mesotree-dep-appos.html) – [aux](cux_mesotree-dep-aux.html) – [case](cux_mesotree-dep-case.html) – [cc](cux_mesotree-dep-cc.html) – [ccomp](cux_mesotree-dep-ccomp.html) – [clf](cux_mesotree-dep-clf.html) – [compound](cux_mesotree-dep-compound.html) – [conj](cux_mesotree-dep-conj.html) – [cop](cux_mesotree-dep-cop.html) – [csubj](cux_mesotree-dep-csubj.html) – [dep](cux_mesotree-dep-dep.html) – [det](cux_mesotree-dep-det.html) – [discourse](cux_mesotree-dep-discourse.html) – [dislocated](cux_mesotree-dep-dislocated.html) – [flat](cux_mesotree-dep-flat.html) – [iobj](cux_mesotree-dep-iobj.html) – [mark](cux_mesotree-dep-mark.html) – [nmod](cux_mesotree-dep-nmod.html) – [nmod:poss](cux_mesotree-dep-nmod-poss.html) – [nsubj](cux_mesotree-dep-nsubj.html) – [nummod](cux_mesotree-dep-nummod.html) – [obj](cux_mesotree-dep-obj.html) – [obl](cux_mesotree-dep-obl.html) – [orphan](cux_mesotree-dep-orphan.html) – [parataxis](cux_mesotree-dep-parataxis.html) – [punct](cux_mesotree-dep-punct.html) – [root](cux_mesotree-dep-root.html) – [vocative](cux_mesotree-dep-vocative.html) – [xcomp](cux_mesotree-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1999 sentences and 9893 tokens.</li>
</ul>

<ul>
<li>This corpus contains 4174 tokens (42%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 10 types of words that contain both letters and punctuation. Examples: naíd-yádi, chi-íbii, chit-íbi, dut-íñuu, ku-íʼyaa, kuch-cheanu, kuch-nùni, tu-íku, ño-ínuu, ñó-íʼnuu</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 7 word types tagged as particles (PART): Ju, a, bea, c, gua, ne, tu</li>
</ul>

<ul>
<li>This corpus contains 13 lemmas tagged as pronouns (PRON): _, chi, dí, insë, insú, inti, iñsë, nuku, sakoo, sakó, takó, uu, ʼuu</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as determiners (DET): _, kaʼan, tumi</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: _</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: jikadi, neʼe, chikadi, kanú, neé</li>
    <li>DET: koo, nee</li>
    <li>NOUN: koʼo, chëe, kueta, Cheatu, Cheʼe, jínyinii, koʼod</li>
    <li>VERB: neʼe, nichi, koʼo, koʼö, neʼë, cheʼë, jinikuy, cheʼe, deanu, kanó</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Stat
  <ul>
    <li>ADJ: cheatea, lï, cheate, chéatea, dituu, dituuy</li>
    <li>VERB: cheatea, lï, cheanuu, cheate</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>VERB-Fin: kuchis, chinus, cheʼes, chis, chìnus, jiyadus, kunus, jínus</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Hum
    <ul>
      <li>VERB-Fin: chinuñ, chinuy, jeʼey, cheʼey, jeeya, jiyaduy</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ-Stat: lï</li>
      <li>VERB-Fin: cheʼe, jeʼe, ted, chee, cheʼed, chinu, chika, kuchid, Chínu, chíd</li>
      <li>VERB-Stat: lï</li>
    </ul>
  </li>
</ul>




<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>VERB-Fin: ted, kuchis, chinuñ, chinu, chinus, chinuy, chika, chìnus, kuchid, Chínu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB-Fin: jeʼe, jeʼey, jiyadus, Jiyadu, inu, jeeya, jiyaduy, jínus, íkad, ínu</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>VERB-Fin: cheʼe, chee, cheʼed, cheʼes, chis, kunus, cheʼey, chíd, kàkad, cheed</li>
    </ul>
  </li>
</ul>




<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: kun, min, sen</li>
      <li>PRON: kun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: duʼu, chea, Adeea, duuʼu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: ú, dí, uu, sakó, takó, un, insú, ʼuu, insë, u</li>
      <li>VERB: di, dí</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: ama, inu, Nini, juú, neache, nichi, ínu</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>VERB-Fin: cheʼe, jeʼe, chee, chinu, chika, Chínu, Jiyadu, cheé, chíka, inu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>VERB-Fin: ted, cheʼed, kuchid, chíd, kàkad, cheed, cheéd, íkad</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>VERB-Fin: kuchis, chinuñ, chinus, chinuy, jeʼey, cheʼes, chis, chìnus, jiyadus, kunus</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>NounType</a>
    <ul>
      <li>Clf
        <ul>
          <li>NOUN: ta</li>
        </ul>
      </li>
      <li>Relat
        <ul>
          <li>ADP: ñeʼe, ñeʼë</li>
          <li>NOUN: ñeʼe, ñeʼë, ñeʼed, ñeʼeñ, ñeʼes, ñëʼe, ñeʼëñ, ñeʼen, ñeʼën, nukud</li>
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
          <li>VERB-Fin: kuchis, chis, jiyadus, kuchid, chíd, Jiyadu, jiyaduy</li>
        </ul>
      </li>
      <li>Tran
        <ul>
          <li>VERB-Fin: cheʼe, jeʼe, ted, chinuñ, chee, cheʼed, chinu, chinus, chinuy, jeʼey</li>
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
          <li>ADJ: noo</li>
          <li>ADP: noo, nóó</li>
          <li>ADV: iku, yeaben, Ikun, noo, Yebean, ninu</li>
          <li>AUX: kanés</li>
          <li>DET-Fin: koo</li>
          <li>NOUN: nʼiba, ñëʼe, biku, diiya, chikuʼü, ñee, bikum, bikun, noo, nʼíba</li>
          <li>NOUN-Fin: koʼod</li>
          <li>NUM: juʼu</li>
          <li>PRON: uu, un, u, iñsé, sakón, Insën, Sakon, Din, Takon, tako</li>
          <li>PROPN: jibaku, jibakuu, jinguyu, Noo, nacho</li>
          <li>SCONJ: toch</li>
          <li>VERB: koʼod, chee, chika, Eeanu, Noo, nëe, cheed, cheé, cheéd, cheʼé</li>
          <li>VERB-Fin: koʼod, chee, chika, nëe, cheed, cheé, cheéd, cheʼé, chíka, kod</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (446)</li>
      <li>VERB--PRON (84)</li>
      <li>VERB-Fin--NOUN (237)</li>
      <li>VERB-Fin--PRON (79)</li>
      <li>VERB-Stat--NOUN (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (322)</li>
      <li>VERB--NOUN-ADP(no) (1)</li>
      <li>VERB--NOUN-ADP(nuku) (1)</li>
      <li>VERB--PRON (80)</li>
      <li>VERB-Fin--NOUN (322)</li>
      <li>VERB-Fin--NOUN-ADP(nuku) (1)</li>
      <li>VERB-Fin--PRON (50)</li>
      <li>VERB-Stat--NOUN (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (5)</li>
      <li>VERB--PRON (13)</li>
      <li>VERB-Fin--NOUN (5)</li>
      <li>VERB-Fin--NOUN-ADP(no) (1)</li>
      <li>VERB-Fin--NOUN-ADP(nuku) (2)</li>
      <li>VERB-Fin--PRON (17)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 1 relation subtypes: <a>nmod:poss</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>expl</a>, <a>fixed</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
