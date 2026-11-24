---
layout: base
title:  'UD_Peripheral_Mongolian-Ordos'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Peripheral Mongolian Ordos

Language: [Peripheral Mongolian](/mvf/index.html) (code: `mvf`)<br/>
Family: Mongolic

This treebank has been part of Universal Dependencies since the UD v2.19 release.

The following people have contributed to making this treebank part of UD: Wenchao Li, Haitao Liu.

Repository: [UD_Peripheral_Mongolian-Ordos](https://github.com/UniversalDependencies/UD_Peripheral_Mongolian-Ordos)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udmvf_ordos219)<br />
Download all treebanks: [UD 2.19](/#download)

License: CC BY-SA 4.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Peripheral Mongolian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Peripheral_Mongolian-Ordos/issues).
If you want to collaborate, please contact [widelia&nbsp;(æt)&nbsp;zju&nbsp;•&nbsp;edu&nbsp;•&nbsp;cn].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

UD_Peripheral_Mongolian-Ordos is a treebank of Ordos, a Mongolic language variety spoken in the Ordos region of Inner Mongolia, China. The treebank consists of grammatical example sentences in Latin transliteration, manually annotated according to Universal Dependencies guidelines.



The Ordos treebank contains 80 sentences (274 tokens) of Ordos, a variety of Peripheral (Southern) Mongolian. The data consist of grammatical example sentences, some of which are drawn from Georg (2003). The sentences are presented in Latin transliteration and are accompanied by English translations.

All sentences are manually annotated with lemmas, universal part-of-speech tags (UPOS), morphological features, and dependency relations. The annotation prioritizes UD core morphological features and dependency relations. A small number of language-specific layered features (for possessive agreement) and dependency subtypes are used to capture distinctions that are morphologically or syntactically overt in Ordos. In addition, some Ordos-specific morphological categories that do not correspond to any feature in the universal inventory (namely derivational categories on numerals and focus marking) are encoded in the MISC column, in accordance with UD conventions for annotations that are not part of the universal feature inventory.

## Morphological annotation

All UD core features used in the treebank take standard universal values. Two language-specific layered features are used to mark possessive agreement on nouns:

* `Number[psor]` — number of the possessor (values: `Sing`, `Plur`)
* `Person[psor]` — person of the possessor (values: `1`, `2`, `3`)

The following Ordos-specific morphological information is encoded in the MISC column rather than FEATS, as it does not correspond to any category in the universal feature inventory:

* `Derivation=Collective` — collective derivation on numerals (e.g. *gurb.uul* 'three together')
* `Derivation=Multiplicative` — multiplicative derivation on numerals (e.g. *gurban.tai* 'three times')
* `Derivation=Iterative` — iterative derivation on numerals (e.g. *gurba.da* 'three times over')
* `Focus=Only` — restrictive focus particle (e.g. *gurba.kan* 'only three')

## Dependency annotation

UD core relations are used throughout the treebank. The following language-specific dependency subtypes are used:

* `det:poss` — possessive determiner
* `nmod:poss` — possessive nominal modifier
* `nmod:tmod` — temporal nominal modifier
* `obl:agent` — agent of a passive construction
* `obl:tmod` — temporal oblique modifier

## Acknowledgments

The Ordos treebank was created by Wenchao Li and Haitao Liu. The annotation of lemmas, part-of-speech tags, morphological features, and dependency relations was carried out manually according to the Universal Dependencies guidelines. Some of the example sentences are drawn from Georg (2003).

We are especially grateful to Daniel Zeman for his guidance in setting up the treebank repository and for his help with the Universal Dependencies workflow. We also thank the Universal Dependencies community for their support during the preparation and release of this treebank.

## References

* Georg, Stefan. 2003. Ordos. In Juha Janhunen (ed.), *The Mongolic Languages*, 193–209. London: Routledge.


# Statistics of UD Peripheral Mongolian Ordos

## POS Tags

[ADJ](mvf_ordos-pos-ADJ.html) – [ADP](mvf_ordos-pos-ADP.html) – [ADV](mvf_ordos-pos-ADV.html) – [AUX](mvf_ordos-pos-AUX.html) – [DET](mvf_ordos-pos-DET.html) – [NOUN](mvf_ordos-pos-NOUN.html) – [NUM](mvf_ordos-pos-NUM.html) – [PART](mvf_ordos-pos-PART.html) – [PRON](mvf_ordos-pos-PRON.html) – [PROPN](mvf_ordos-pos-PROPN.html) – [PUNCT](mvf_ordos-pos-PUNCT.html) – [VERB](mvf_ordos-pos-VERB.html)

## Features

[Aspect](mvf_ordos-feat-Aspect.html) – [Case](mvf_ordos-feat-Case.html) – [Degree](mvf_ordos-feat-Degree.html) – [Mood](mvf_ordos-feat-Mood.html) – [Number](mvf_ordos-feat-Number.html) – [Number[psor]](mvf_ordos-feat-Number-psor.html) – [NumType](mvf_ordos-feat-NumType.html) – [Person](mvf_ordos-feat-Person.html) – [Person[psor]](mvf_ordos-feat-Person-psor.html) – [Polarity](mvf_ordos-feat-Polarity.html) – [Poss](mvf_ordos-feat-Poss.html) – [PronType](mvf_ordos-feat-PronType.html) – [Tense](mvf_ordos-feat-Tense.html) – [VerbForm](mvf_ordos-feat-VerbForm.html) – [Voice](mvf_ordos-feat-Voice.html)

## Relations

[acl](mvf_ordos-dep-acl.html) – [advcl](mvf_ordos-dep-advcl.html) – [advmod](mvf_ordos-dep-advmod.html) – [amod](mvf_ordos-dep-amod.html) – [case](mvf_ordos-dep-case.html) – [compound](mvf_ordos-dep-compound.html) – [conj](mvf_ordos-dep-conj.html) – [cop](mvf_ordos-dep-cop.html) – [det](mvf_ordos-dep-det.html) – [det:poss](mvf_ordos-dep-det-poss.html) – [discourse](mvf_ordos-dep-discourse.html) – [iobj](mvf_ordos-dep-iobj.html) – [nmod:poss](mvf_ordos-dep-nmod-poss.html) – [nmod:tmod](mvf_ordos-dep-nmod-tmod.html) – [nsubj](mvf_ordos-dep-nsubj.html) – [nummod](mvf_ordos-dep-nummod.html) – [obj](mvf_ordos-dep-obj.html) – [obl](mvf_ordos-dep-obl.html) – [obl:agent](mvf_ordos-dep-obl-agent.html) – [obl:tmod](mvf_ordos-dep-obl-tmod.html) – [parataxis](mvf_ordos-dep-parataxis.html) – [punct](mvf_ordos-dep-punct.html) – [root](mvf_ordos-dep-root.html) – [xcomp](mvf_ordos-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 80 sentences and 274 tokens.</li>
</ul>

<ul>
<li>This corpus contains 16 tokens (6%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 67 types of words that contain both letters and punctuation. Examples: jabci-, sük-eer, -du, ab-maajin, aim-tagai, ala-san, bags-iin-du, bags-iin-iin, bai-ji, bai-n, bara.mai, boloo-ügüei, cida-n, ekener-güei, ekener-tei, gar-san, ge-beci, gele-deg, ger-lüü, ger-t-ees, gitad-laa, goto-da-ki, gurb.uul, gurba.da, gurba.kan, gurba.lji.la, gurban.tai, icikü-güee, ide-deg, ide-ji, ide-seer, ide-y, ire-külee, ire-lee, jodo-ku, jujaara-Ø, juu-kung-buu, kaj-uujai, kalaa-uujai, karada-ji, kari-laa, küni-cee, küüken-tei, mal-cin, mede-nee, nada-duruun, noyon-oi-luu, nutug-aas-aan, sura-kulaa, suu-ji</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 12 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SCONJ, CCONJ, INTJ, SYM, X</li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): =ci</li>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as pronouns (PRON): bi, bid, cam, ci, cı, mini, nad, nada, ta, ter, tere</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as determiners (DET): ene, manai, negen, tere</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: tere</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): yum</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: olji, suuji, garci, hürgej, ögöj, ese, ge-beci, ide-ji, sura-kulaa, suu-ji</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>VERB: baina, bai-ji, baiji, baikhgui, biciji, boloo-ügüei, gele-deg, husne, ide-deg, ire-lee</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>NUM: gurba.da, gurba.lji.la</li>
    <li>VERB: jabci-, abku, jodo-ku, yariah, ab-maajin, cida-n, ide-seer, ire-külee, yabu-saar, yabu.si-ügüei</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: ala-san, alagdasan, dusun, gar-san, güi, idesen, kiideleen, kiisen, olood, taslasan</li>
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
      <li>NOUN: aba, akani, büteeji, jurgaan, küüked, mal-cin, mori, sara, temee, temeendu</li>
      <li>NUM: gurb.uul</li>
      <li>PRON: bida</li>
      <li>VERB: baisan, ide-y, jujaara-Ø, kelebe, udabaa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: boroon, ger, kün, aduu, küni, nokoi, sük-eer, yabu-san, üdür, Gertee</li>
      <li>PRON: bi, ter, cı, nadad, Tanii, bicige, camadu, camd, camtai, ci</li>
      <li>PROPN: cinggis, balgasun</li>
      <li>VERB: bain, baina, abuyan, bai-ji, bai-n, baiji, baikhgui, bailaa, bainaa, biciji</li>
      <li>VERB-Fin: baina, bai-ji, baiji, baikhgui, biciji, husne, ire-lee, irlee, kari-laa, kiiy</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: ündür-ees</li>
      <li>NOUN: ger-t-ees, küni-cee, nutug-aas-aan, tengerinees, öbödög-cee, öbösön-öös, üdüre-es</li>
      <li>PRON: nada-duruun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: nom, aba, akani, alaga, bara.mai, bicig, budaa, budaagaan, büteeji, garaa</li>
      <li>PRON: ta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>All
    <ul>
      <li>NOUN: ger-lüü, noyon-oi-luu</li>
      <li>PRON: tere-lüü</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>NOUN: ekener-tei, gitad-laa, küüken-tei</li>
      <li>PRON: camtai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: Gertee, bags-iin-du, cagtu, gerteen, goto-da-ki, temeendu, urdu, yabu-san-du</li>
      <li>PRON: nadad, camadu, camd, nada</li>
      <li>PROPN: balgasun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: Tengeriin, bags-iin-iin, bicigiin, goliin, kaani, kürgenii</li>
      <li>PRON: Tanii</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>NOUN: sük-eer, eredeen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>NOUN: kün, ereg, küni, mori, üdür, aav, batuur, boroon, cag, deng</li>
      <li>PRON: bi, ter, cı, bicige, bida, ci, mini</li>
      <li>PROPN: cinggis, juu-kung-buu, kaan</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: ündür, aim-tagai, bayan, bogoni, cagaan, jiketei, karada-ji, saikan, saruul, teneg</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: ekener-güei</li>
      <li>VERB: baikhgui, bisi, boloo-ügüei, ese, icikü-güee, kaj-uujai, orotugai, yabu.si-ügüei, ügüee</li>
      <li>VERB-Conv: ese</li>
      <li>VERB-Fin: baikhgui, boloo-ügüei</li>
      <li>VERB-Inf: yabu.si-ügüei</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Hab
    <ul>
      <li>VERB-Fin: malladag</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>VERB: gele-deg, ide-deg, uila-naa</li>
      <li>VERB-Fin: gele-deg, ide-deg</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Des
    <ul>
      <li>VERB: ide-y</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: gecee, kaj-uujai, ög, ögööröi</li>
      <li>VERB-Fin: ög, ögööröi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB: bain, baina, bai-ji, baiji, baikhgui, bailaa, bainaa, baisan, biciji, bisi</li>
      <li>VERB-Fin: baina, bai-ji, baiji, baikhgui, biciji, boloo-ügüei, gele-deg, husne, ide-deg, ire-lee</li>
      <li>VERB-Inf: cida-n, yabu.si-ügüei</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>VERB: abuyan, jujaara-Ø, kalaa-uujai, orotugai, ög-yön</li>
      <li>VERB-Fin: ög-yön</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB-Fin: kiiy, orno, yabu-ku-im, yabuyaa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB: ab-maajin, ala-san, alagdasan, baiji, bailaa, baisan, biciji, dailalciba, gar-san, ide-seer</li>
      <li>VERB-Conv: sura-kulaa, üji-k-ees</li>
      <li>VERB-Fin: baiji, biciji, ire-lee, irlee, kari-laa, ködölgöji, orojii, untaba, unšaba, yabu-laa</li>
      <li>VERB-Inf: ab-maajin, ide-seer, yabu-saar</li>
      <li>VERB-Part: ala-san, alagdasan, gar-san, idesen, kiideleen, kiisen, olood, taslasan, törösön</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB: bain, baina, bai-ji, bai-n, baikhgui, bainaa, bisi, bolji, boloo-ügüei, cida-n</li>
      <li>VERB-Conv: ese, ge-beci, ide-ji, suu-ji</li>
      <li>VERB-Fin: baina, bai-ji, baikhgui, boloo-ügüei, gele-deg, husne, ide-deg, malladag, unana</li>
      <li>VERB-Inf: cida-n, ire-külee, yabu.si-ügüei, yada-n</li>
      <li>VERB-Part: dusun, güi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Part: alagdasan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>VERB: dailalciba</li>
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
      <li>DET: ene, tere, ter</li>
      <li>PRON: tere-lüü</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: Negen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: Manai</li>
      <li>PRON: bi, ter, cı, nadad, Tanii, bicige, bida, camadu, camd, camtai</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: nege, minggan, arban, gurba.kan, gurban, gurban.tai, negen, gurb.uul, gurba.da, gurba.lji.la</li>
      <li>NUM-Inf: gurba.da, gurba.lji.la</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: Manai</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: bi, nadad, bida, nada, nada-duruun</li>
      <li>VERB: bain, abuyan, baina, husne, icikü-güee, ide-y, kiiy, udabaa, untaba, unšaba</li>
      <li>VERB-Fin: baina, husne, kiiy, untaba, unšaba, yabu-ku-im, yabu-laa, yabuyaa, ög-yön, üjisen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: cı, Tanii, camadu, camd, camtai, ci, mini, ta</li>
      <li>VERB: gecee, kalaa-uujai, ög, ögööröi</li>
      <li>VERB-Fin: ög, ögööröi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: ter, bicige</li>
      <li>VERB: bain, baina, bai-ji, bai-n, baiji, baikhgui, bailaa, bainaa, baisan, biciji</li>
      <li>VERB-Fin: baina, bai-ji, baiji, baikhgui, biciji, ire-lee, irlee, kari-laa, ködölgöji, malladag</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: Manai</li>
      <li>NOUN: nutug-aas-aan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>NOUN: bags-iin-du, bags-iin-iin, eredeen, mal-cin, noyon-oi-luu</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>1
        <ul>
          <li>DET: Manai</li>
          <li>NOUN: kürgenii, nutug-aas-aan</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>NOUN: mal-cin</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>NOUN: bags-iin-du, bags-iin-iin, eredeen, noyon-oi-luu</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: yum.</li>
</ul>

<ul>
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB--PRON-Nom (6)</li>
      <li>VERB-Conv--NOUN-Nom (1)</li>
      <li>VERB-Conv--PRON-Nom (3)</li>
      <li>VERB-Fin--NOUN-Nom (6)</li>
      <li>VERB-Fin--PRON-Nom (11)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (3)</li>
      <li>VERB-Conv--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN-Acc (7)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Acc (2)</li>
      <li>VERB-Part--NOUN-Acc (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (1)</li>
      <li>VERB-Conv--PRON-Dat (2)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Dat (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>det:poss</a>, <a>nmod:poss</a>, <a>nmod:tmod</a>, <a>obl:agent</a>, <a>obl:tmod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>nmod</a></li>
<li>The following 17 relation types are not used in this corpus at all: <a>csubj</a>, <a>ccomp</a>, <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>aux</a>, <a>mark</a>, <a>appos</a>, <a>clf</a>, <a>cc</a>, <a>fixed</a>, <a>flat</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
