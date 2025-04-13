---
layout: base
title:  'UD_Pesh-ChibErgIS'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Pesh ChibErgIS

Language: [Pesh](/pay/index.html) (code: `pay`)<br/>
Family: Chibchan

This treebank has been part of Universal Dependencies since the UD v2.15 release.

The following people have contributed to making this treebank part of UD: Natalia Cáceres Arandia, Claudine Chamoreau, Sylvain Kahane, Bruno Guillaume.

Repository: [UD_Pesh-ChibErgIS](https://github.com/UniversalDependencies/UD_Pesh-ChibErgIS)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udpay_chibergis215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either Pesh-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Pesh-ChibErgIS/issues).
If you want to collaborate, please contact [natalia&nbsp;•&nbsp;caceres&nbsp;•&nbsp;arandia&nbsp;(æt)&nbsp;cnrs&nbsp;•&nbsp;fr].
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

A Universal Dependencies corpus for Pesh (aka Paya), a member of the Chibchan language family. The language is spoken by about 500 speakers in Honduras.



The treebank is an automatic conversion of the SUD_Pesh-ChibErgIS, which is an automatic conversion of the [mSUD_Pesh-ChibErgIS](https://github.com/surfacesyntacticud/mSUD_Pesh-ChibErgIS) which was extracted from Claudine Chamoreau and Natalia Cáceres interlinearized corpus in Flex format, itself an extension of an oral corpus documented by Claudine Chamoreau (https://www.elararchive.org/dk0392).

## Acknowledgments

Sentences are annotated with the following metadata:
`speaker_id` (which identifies the turn of speech)
- `sent_timecode` (which will enable playback of the sentence)
- `morphemic_text`: (original segmentation of the text into morphemes)
- `text`: (lexical tokenization)
- `text_en`: (English interpretation)
- `text_phrase-gls-de`: (original id)
- `text_phrase-gls-es`: (Spanish interpretation)
- `text_phrase-gls-it`: (IPA transcription)
- `text_phrase-gls-pro`: (prosodic transcription)
- `text_phrase-gls-tl`: (original comments in Flex)
- `text_phrase-gls-wg`: (original word-gloss in Flex) -

## Structure
This version of the treebank is a dependency parsing of the original corpus first four files.

The original data are spoken data, which were originally segmented in words with concatenated clitics, then interlinearized and glossed in Flex with clitics as separate tokens. Tokens comprize words and affixes (preceded by a "=" sign).

The **UD_Pesh-ChibErgIS** counts 2,507 tokens for 307 sentences.

## References

- Chamoreau, Claudine. 2015. A cross-varietal documentation and description of Pesh, a Chibchan language of Honduras. Endangered Languages Archive. Handle: http://hdl.handle.net/2196/00-0000-0000-000F-BF49-B

## Acknowledgments

This treebank was produced as part of the ChibErgIS and Autogramm ANR projects. With special thanks to Bruno Guillaume for the conversion from SUD to UD, Sylvain Kahane, Christian Chanard, Uyên-To Rabier and Aleksandra Miletic.


# Statistics of UD Pesh ChibErgIS

## POS Tags

[ADP](pay_chibergis-pos-ADP.html) – [ADV](pay_chibergis-pos-ADV.html) – [AUX](pay_chibergis-pos-AUX.html) – [CCONJ](pay_chibergis-pos-CCONJ.html) – [DET](pay_chibergis-pos-DET.html) – [INTJ](pay_chibergis-pos-INTJ.html) – [NOUN](pay_chibergis-pos-NOUN.html) – [NUM](pay_chibergis-pos-NUM.html) – [PART](pay_chibergis-pos-PART.html) – [PRON](pay_chibergis-pos-PRON.html) – [PROPN](pay_chibergis-pos-PROPN.html) – [PUNCT](pay_chibergis-pos-PUNCT.html) – [SCONJ](pay_chibergis-pos-SCONJ.html) – [VERB](pay_chibergis-pos-VERB.html) – [X](pay_chibergis-pos-X.html)

## Features

[AdvType](pay_chibergis-feat-AdvType.html) – [Animacy](pay_chibergis-feat-Animacy.html) – [Case](pay_chibergis-feat-Case.html) – [Clusivity](pay_chibergis-feat-Clusivity.html) – [Person](pay_chibergis-feat-Person.html) – [PronType](pay_chibergis-feat-PronType.html) – [VerbForm](pay_chibergis-feat-VerbForm.html) – [Voice](pay_chibergis-feat-Voice.html)

## Relations

[acl](pay_chibergis-dep-acl.html) – [acl:relcl](pay_chibergis-dep-acl-relcl.html) – [advcl](pay_chibergis-dep-advcl.html) – [advmod](pay_chibergis-dep-advmod.html) – [advmod:lmod](pay_chibergis-dep-advmod-lmod.html) – [appos](pay_chibergis-dep-appos.html) – [aux](pay_chibergis-dep-aux.html) – [case](pay_chibergis-dep-case.html) – [cc](pay_chibergis-dep-cc.html) – [ccomp](pay_chibergis-dep-ccomp.html) – [compound](pay_chibergis-dep-compound.html) – [compound:lvc](pay_chibergis-dep-compound-lvc.html) – [compound:svc](pay_chibergis-dep-compound-svc.html) – [conj](pay_chibergis-dep-conj.html) – [cop](pay_chibergis-dep-cop.html) – [csubj](pay_chibergis-dep-csubj.html) – [dep](pay_chibergis-dep-dep.html) – [dep:conj](pay_chibergis-dep-dep-conj.html) – [det](pay_chibergis-dep-det.html) – [discourse](pay_chibergis-dep-discourse.html) – [dislocated](pay_chibergis-dep-dislocated.html) – [mark](pay_chibergis-dep-mark.html) – [nmod](pay_chibergis-dep-nmod.html) – [nsubj](pay_chibergis-dep-nsubj.html) – [nsubj:outer](pay_chibergis-dep-nsubj-outer.html) – [nsubj:pass](pay_chibergis-dep-nsubj-pass.html) – [nummod](pay_chibergis-dep-nummod.html) – [obj](pay_chibergis-dep-obj.html) – [obl](pay_chibergis-dep-obl.html) – [obl:arg](pay_chibergis-dep-obl-arg.html) – [obl:mod](pay_chibergis-dep-obl-mod.html) – [orphan](pay_chibergis-dep-orphan.html) – [parataxis](pay_chibergis-dep-parataxis.html) – [punct](pay_chibergis-dep-punct.html) – [reparandum](pay_chibergis-dep-reparandum.html) – [root](pay_chibergis-dep-root.html) – [vocative](pay_chibergis-dep-vocative.html) – [xcomp](pay_chibergis-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 307 sentences and 2508 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 10 types of words that contain both letters and punctuation. Examples: San.Esteban, akasteʃk(w)a, amaspariʃkaw(a), kapaʃbar(w)a, ke,, nãpar(w)a, sukuher(w)a, tarkasakw(a), teʔkertVw(a), yãhaw(a)</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: ADJ, SYM</li>
</ul>

<ul>
<li>This corpus contains 48 word types tagged as particles (PART): =ha, =hã, =hãʔ, =hĩ, =i, =kan, =kanka, =kari, =ken, =lerwa, =ma, =mã, =n, =na, =pe, =pera, =pero, =pra, =ra, =ras, =ri, =riʃ, =sa, =sri, =tV, =tWh, =wi, =ɲãrã, =ʃona, =ʔi, =ʔã, akarʃki, akarʃkwa, akaʃkwa, akãʃkwa, ama, karʃwĩka, nĩhã, nẽhã, nẽʔ, nẽʔã, ukwa, ukwã, ãm, ãma, ãmã, ũtanĩhã, ẽkerʃ</li>
</ul>

<ul>
<li>This corpus contains 12 lemmas tagged as pronouns (PRON): =wa, eka, este, pa, ta, tas, to, toʔ, wa, ã, ĩ, ẽka</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as determiners (DET): =na, =nã, =pero, =s, =ɲa, =ɲã, =ɲãh, as, ãs</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as auxiliaries (AUX): _, ak, r, tʃa</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: ak, r, tʃa</li>
</ul>

<ul>
<li>There are 1 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: artʃuiʃ</li>
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
      <li>NOUN: taarwã</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>ADP: =ra, =ro</li>
      <li>SCONJ: =ro</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Erg
    <ul>
      <li>ADP: =ya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADP: =ma</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>





<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Appl
    <ul>
      <li>AUX: akatʃaitVri, akatʃaui, takatʃai, takatʃaii, takatʃauwa, takatʃawa, ũtakatʃaitVi</li>
      <li>VERB: artʃuiʃkari, artʃuiʃatVri, tarwarkuh, akasteʃkawa, akastok, arkapriʃi, artapuki, artʃuiʃbartVi, akaporki, akasteʃ</li>
      <li>VERB-Inf: artʃuiʃ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>VERB: ũkawa, ũweerwa, ũwarahparh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB: taõʃi, atʃi, taiʃkari, taõʃ, taõʃkerwa, taõʃki, apastVpi, apiʃki, atuhwa, atuhweʃkwa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>VERB: apuru, tVkaeri, tVkairi</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADP: =kanki</li>
      <li>PART: =kanka</li>
    </ul>
  </li>
</ul>




<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: tʃatVpa, =bartVwa</li>
      <li>VERB: piãpa, kaporpa, akonapa, artʃuiʃpa, kapai, kawiʃpa, kawiʃpai, paspa, peʔpa, piʃpa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: =rya</li>
      <li>VERB: kaya, takaya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>VERB: kawiʃkawa</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>AdvType</a>
    <ul>
      <li>Ideoph
        <ul>
          <li>ADV: tõʃ, kluk, roh, teʔne, tukuluk</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Clusivity</a>
    <ul>
      <li>Ex
        <ul>
          <li>AUX: tʃabaruri, =barwa, =bari, tʃaberuri, tʃaberwa, =bartVwa, ũtakatʃaitVi</li>
          <li>NOUN: ũtaoryah, ũtayãha, ũtakaki, ũtaoryaha, ũtasira, ũtasuwa, ũtasãma</li>
          <li>PART: ũtanĩhã</li>
          <li>PRON: ũtas</li>
          <li>VERB: tiʃbarwa, artʃuiʃbartVi, atʃahbari, kapaʃbarwa, artʃuiʃbarwa, kabarwa, kakoyoʃbari, kapaʃbar(w)a, kapaʃbari, kapaʃbarpi</li>
        </ul>
      </li>
      <li>In
        <ul>
          <li>NOUN: patatiʃta, patasaʔa, patasã, pataya, patayãha, patayãhha, pataĩ</li>
          <li>VERB: ãparh, amaskapiwa, amasparwa, akatipari, amaspari, iʃparwa, kapari, kaparwa, masperwa, nãapi</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: r, _.</li>
</ul>

<ul>
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: tʃa, ak, r.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (25)</li>
      <li>VERB--NOUN-ADP(=ma) (7)</li>
      <li>VERB--NOUN-ADP(=mã) (1)</li>
      <li>VERB--NOUN-ADP(=ya) (5)</li>
      <li>VERB--PRON (14)</li>
      <li>VERB--PRON-ADP(=ma) (7)</li>
      <li>VERB--PRON-ADP(=ma)-ADP(=ma) (1)</li>
      <li>VERB--PRON-ADP(=mã) (2)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (53)</li>
      <li>VERB--NOUN-ADP(=ma) (5)</li>
      <li>VERB--NOUN-ADP(=ra) (2)</li>
      <li>VERB--NOUN-ADP(=yo) (1)</li>
      <li>VERB--PRON (13)</li>
      <li>VERB--PRON-ADP(=ken) (1)</li>
      <li>VERB--PRON-ADP(=ma) (4)</li>
      <li>VERB--PRON-ADP(=ra) (4)</li>
      <li>VERB-Inf--PRON (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>advmod:lmod</a>, <a>compound:lvc</a>, <a>compound:svc</a>, <a>dep:conj</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:arg</a>, <a>obl:mod</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>amod</a>, <a>clf</a>, <a>fixed</a>, <a>flat</a>, <a>list</a>, <a>goeswith</a></li>
</ul>
