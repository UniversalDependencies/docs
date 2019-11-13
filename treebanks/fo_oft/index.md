---
layout: base
title:  'UD_Faroese-OFT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Faroese OFT

Language: [Faroese](/fo/index.html) (code: `fo`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.2 release.

The following people have contributed to making this treebank part of UD: Daniel Zeman, Bjartur Mortensen, Francis Tyers.

Repository: [UD_Faroese-OFT](https://github.com/UniversalDependencies/UD_Faroese-OFT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfo_oft25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-SA 4.0

Genre: wiki

Questions, comments?
General annotation questions (either Faroese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Faroese-OFT/issues).
If you want to collaborate, please contact [ftyers&nbsp;(æt)&nbsp;hse&nbsp;•&nbsp;ru].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually, natively in UD style |

## Description

This is a treebank of Faroese based on the Faroese Wikipedia.



The treebank is based on sentences from the Faroese Wikipedia. The whole
Wikipedia was analysed using Trond Trosterud's tools for Faroese.[1] We
took all the sentences and discarded those with unknown words.

The remaining sentences were manually annotated for Universal Dependencies
and the morphology and POS tags were converted deterministically using
a lookup table. Errors in the original morphology and disambiguation
were corrected where found.

The treebank contains a lot of copula sentences and very little first
or second person, as can be expected from Wikipedia texts.

1. http://gtweb.uit.no/cgi-bin/smi/smi.cgi?text=%C3%81+tunguni+eru+sm%C3%A1ar+tenn.&action=analyze&lang=fao&plang=eng

## Acknowledgments

The morphology and preliminary disambiguation was done by Trond Trosterud's
finite-state morphology and constraint grammar for Faroese.

If you use this treebank in your work, please cite:

```
@inproceedings{tyersetal18-faroese,
author = {Francis M. Tyers and Mariya Sheyanova and Alexandra Martynova and Pavel Stepachev and Konstantin Vinogradovsky},
title = {Multi-source synthetic treebank creation for improved cross-lingual dependency parsing},
booktitle = {Proceedings of the Second Workshop on Universal Dependencies (UDW 2018)},
pages = {144--150},
year = 2018
}
```

# Statistics of UD Faroese OFT

## POS Tags

[ADJ](fo_oft-pos-ADJ.html) – [ADP](fo_oft-pos-ADP.html) – [ADV](fo_oft-pos-ADV.html) – [CCONJ](fo_oft-pos-CCONJ.html) – [DET](fo_oft-pos-DET.html) – [INTJ](fo_oft-pos-INTJ.html) – [NOUN](fo_oft-pos-NOUN.html) – [NUM](fo_oft-pos-NUM.html) – [PART](fo_oft-pos-PART.html) – [PRON](fo_oft-pos-PRON.html) – [PROPN](fo_oft-pos-PROPN.html) – [PUNCT](fo_oft-pos-PUNCT.html) – [SCONJ](fo_oft-pos-SCONJ.html) – [VERB](fo_oft-pos-VERB.html) – [X](fo_oft-pos-X.html)

## Features

[Case](fo_oft-feat-Case.html) – [Definite](fo_oft-feat-Definite.html) – [Degree](fo_oft-feat-Degree.html) – [Gender](fo_oft-feat-Gender.html) – [Mood](fo_oft-feat-Mood.html) – [Number](fo_oft-feat-Number.html) – [NumType](fo_oft-feat-NumType.html) – [Person](fo_oft-feat-Person.html) – [PronType](fo_oft-feat-PronType.html) – [Reflex](fo_oft-feat-Reflex.html) – [Tense](fo_oft-feat-Tense.html) – [VerbForm](fo_oft-feat-VerbForm.html) – [Voice](fo_oft-feat-Voice.html)

## Relations

[acl](fo_oft-dep-acl.html) – [acl:cleft](fo_oft-dep-acl-cleft.html) – [acl:relcl](fo_oft-dep-acl-relcl.html) – [advcl](fo_oft-dep-advcl.html) – [advmod](fo_oft-dep-advmod.html) – [amod](fo_oft-dep-amod.html) – [appos](fo_oft-dep-appos.html) – [aux](fo_oft-dep-aux.html) – [aux:pass](fo_oft-dep-aux-pass.html) – [case](fo_oft-dep-case.html) – [cc](fo_oft-dep-cc.html) – [cc:preconj](fo_oft-dep-cc-preconj.html) – [ccomp](fo_oft-dep-ccomp.html) – [compound](fo_oft-dep-compound.html) – [conj](fo_oft-dep-conj.html) – [cop](fo_oft-dep-cop.html) – [csubj](fo_oft-dep-csubj.html) – [dep](fo_oft-dep-dep.html) – [det](fo_oft-dep-det.html) – [discourse](fo_oft-dep-discourse.html) – [expl](fo_oft-dep-expl.html) – [flat](fo_oft-dep-flat.html) – [iobj](fo_oft-dep-iobj.html) – [mark](fo_oft-dep-mark.html) – [nmod](fo_oft-dep-nmod.html) – [nmod:poss](fo_oft-dep-nmod-poss.html) – [nsubj](fo_oft-dep-nsubj.html) – [nsubj:pass](fo_oft-dep-nsubj-pass.html) – [nummod](fo_oft-dep-nummod.html) – [obj](fo_oft-dep-obj.html) – [obl](fo_oft-dep-obl.html) – [orphan](fo_oft-dep-orphan.html) – [parataxis](fo_oft-dep-parataxis.html) – [punct](fo_oft-dep-punct.html) – [root](fo_oft-dep-root.html) – [xcomp](fo_oft-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1208 sentences and 10002 tokens.</li>
</ul>

<ul>
<li>This corpus contains 1567 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 22 types of words that contain both letters and punctuation. Examples: t.d., uml., handils-, á.Kr., ABC-samgonguni, Baden-Württemberg, KT-tænastum, Krýn., NATO-Ráðið, Nakin?, St., Sør-Trøndelag, búskapar-, cand., dr., fíggjar-, km., margarin-, mentanar-, mió., róma-, ídnaðar-</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: AUX, SYM</li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): at</li>
</ul>

<ul>
<li>This corpus contains 20 lemmas tagged as pronouns (PRON): allur, báðir, eg, eingin, hann, hasin, hesin, hon, hvør, ið, mann, nakar, onkur, seg, sum, summur, tað, teir, tú, vit</li>
</ul>

<ul>
<li>This corpus contains 6 lemmas tagged as determiners (DET): allur, annar, ein, mín, summur, sín</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: allur, summur</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as auxiliaries (AUX): </li>
</ul>

<ul>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>VERB: vera, síggja, fáa, gera, koma, byggja, eta, hava, ganga, kasta</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: nevndur, Sameindu, fingin, flettir, fluttur, framdur, gjørdur, hóskandi, kendastur, keyptir</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>VERB: verið, gjørt, kent, lagt, sæst, dyrkað, endurreist, friðað, funnið, havt</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: størsta, fleiri, nógvar, stór, turr, aðrar, føroysku, nógv, onnur, somu</li>
      <li>DET: ein, eina, øll, Allar, eini, sína, Summi, allari, ei, einari</li>
      <li>NOUN: kommuna, kommunur, kommunu, ár, oyggin, oynni, øld, bygdini, kommununi, ferðavinna</li>
      <li>NUM: ein, tvær, trimum, tríggjar</li>
      <li>PRON: hon, henni, hennara, hana, onga, tær</li>
      <li>PROPN: Føroyum, Føroya, Føroyar, Danmark, Kina, Keypmannahavn, Florida, Tórshavnar, Tórshavn, Bergtóra</li>
      <li>VERB-Part: Sameindu, nevndar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: størsti, stórur, stóran, nógvur, stórir, føroyskur, aðrir, mangir, amerikanska, einasti</li>
      <li>ADV: vanliga</li>
      <li>DET: ein, einum, allir, Summir, allan, allur, sínum, mínir</li>
      <li>NOUN: býur, høvuðsstaður, býurin, høvuðsstaðurin, landslutinum, partur, týdning, Meginparturin, limur, landslutur</li>
      <li>NUM: tveir</li>
      <li>PRON: hann, teir, hansara, honum, nakrir, Allir, Báðir, Summir, hesir, nakar</li>
      <li>PROPN: Kalifornia, Tróndur, Jákupsson, Bergur, Dávid, Gásadali, Hanus, Jóannes, Jógvan, Magnus</li>
      <li>VERB-Part: flettir, kendastur, keyptir, prentaðir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: nógv, mong, stórt, Flestu, stór, sama, ymisk, annað, fleiri, føroyskt</li>
      <li>ADV: størsta, vanliga, veldiga</li>
      <li>DET: eitt, einum, annað, síni, sínum, Øll</li>
      <li>NOUN: fólkinum, fólk, landinum, landi, landið, grundarlagið, mál, Endamálið, fólkatalið, lýðveldi</li>
      <li>NUM: trý, tveimum, tvey</li>
      <li>PRON: hetta, Hatta, Hettar, hvat, okkurt</li>
      <li>PROPN: Noregi, Fraklandi, Niðurlondum, Noregs, Grønlandi, Hordalandi, Island, Russlandi, Estlandi, Grønland</li>
      <li>VERB-Part: samlaða</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: nógv, fleiri, nógvar, mong, Flestu, stórir, aðrar, aðrir, mangir, stór</li>
      <li>ADV: vanliga, størsta, veldiga</li>
      <li>DET: allir, Summir, Allar, mínir, síni, Øll</li>
      <li>NOUN: fólk, kommunur, býnum, døgum, ferðir, Føturnir, býir, indiánar, minuttir, muslimar</li>
      <li>PRON: teir, tey, vit, nakrir, Allir, Báðir, Summir, hesir, okkara, okkum</li>
      <li>PROPN: Føroyum, Føroya, Føroyar, Niðurlondum, Niðurlond, Hellurnar</li>
      <li>VERB: eru, vóru, hava, búgva, doyðu, kunnu, skulu, búsettust, búðu, hjálpa</li>
      <li>VERB-Part: Sameindu, flettir, keyptir, nevndar, prentaðir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: størsti, størsta, stórur, stóran, nógvur, stórt, føroyskur, sama, amerikanska, stór</li>
      <li>DET: ein, eitt, einum, eina, allan, sínum, øll, allur, eini, sína</li>
      <li>NOUN: býur, høvuðsstaður, býurin, høvuðsstaðurin, kommuna, fólkinum, landslutinum, partur, týdning, Meginparturin</li>
      <li>NUM: ein, tveir, trý, tvær, trimum, tríggjar, tveimum, tvey</li>
      <li>PRON: hon, hann, tað, hetta, hansara, henni, honum, eg, hennara, Hatta</li>
      <li>PROPN: Noregi, Danmark, Kanada, Amerika, Kina, Fraklandi, Italia, Keypmannahavn, New, Nigeria</li>
      <li>VERB: er, var, hevur, varð, verður, býr, kom, liggur, Sí, kann</li>
      <li>VERB-Part: kendastur, samlaða</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: stóran, aðrar, nógv, nógvar, búskaparligan, mong, Føroysk, arábiskt, fá, føroyskan</li>
      <li>DET: ein, eina, allan, eitt, sína, allir, síni</li>
      <li>NOUN: týdning, dag, fólk, íbúgvar, hátt, Styrkin, USA, ampa, bygdina, búskapin</li>
      <li>NUM: 2, 500, 7, 718.646, FM08, tvær, tríggjar, trý, tveir</li>
      <li>PRON: seg, hetta, hann, tað, hana, okkurt, onga, teir, tey</li>
      <li>PROPN: New, York, Jákupsson, Pakistan, West, Butan, Colorado, Eyguni, Føroyar, Island</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: stórum, amerikanska, sama, mongum, bestu, bretskum, danska, gamlari, hvítum, høgum</li>
      <li>DET: einum, sínum, eini, Summi, allari, einari</li>
      <li>NOUN: USA, fólkinum, landslutinum, landinum, kommunu, býnum, ár, ES, døgum, oynni</li>
      <li>NUM: 2005, 2010, 2011, 000, 1931, 2000, 2008, 2009, 2014, 10</li>
      <li>PRON: henni, honum, sær, okkum</li>
      <li>PROPN: Føroyum, Noregi, Danmark, Fraklandi, Niðurlondum, Grønlandi, Hordalandi, Kalifornia, Mississippi, Russlandi</li>
      <li>VERB-Part: Sameindu, samlaða</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: arbeiðsleys</li>
      <li>NOUN: dømis, landsins, felagsins, handils-, Fólkaháskúla, Islams, Læraraskúla, Rithøvundafelagsins, altars, arbeiðis</li>
      <li>NUM: 1930</li>
      <li>PRON: hansara, hennara, mín, okkara</li>
      <li>PROPN: Føroya, Noregs, Tórshavnar, Finsens, Sandavágs, Tvøroyrar, Bergens, Bretlands, Fraklands, Fuglafjarðar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: størsti, stórur, størsta, nógv, fleiri, nógvur, stór, Flestu, stórir, føroyskur</li>
      <li>DET: ein, eitt, øll, Summir, allir, Allar, allur, annað, ei, mínir</li>
      <li>NOUN: býur, høvuðsstaður, býurin, høvuðsstaðurin, kommuna, partur, Meginparturin, kommunur, limur, landslutur</li>
      <li>NUM: %, ein, 10, 26, 4, tveir, 13, 14, 18, 1917</li>
      <li>PRON: hon, hann, tað, hetta, teir, tey, vit, eg, nakrir, Allir</li>
      <li>PROPN: Føroyar, Kanada, Amerika, Kina, Italia, Nigeria, Asia, Florida, Jackson, Norra</li>
      <li>VERB-Part: flettir, kendastur, keyptir, nevndar, prentaðir</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: størsti, størsta, Flestu, sama, amerikanska, einasti, somu, føroysku, hægsti, størstu</li>
      <li>NOUN: býurin, høvuðsstaðurin, fólkinum, landslutinum, Meginparturin, landinum, býnum, oyggin, oynni, bygdini</li>
      <li>PROPN: Sprotin, Stiðin, Arbeiðaraflokkurin, Framburðsflokkin, Framburðsflokkurin, Høgra, Norðlandinum, Norðurlandinum, Suðurlandinum</li>
      <li>VERB-Part: Sameindu, samlaða</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: nógv, fleiri, stórur, stóran, stór, nógvar, nógvur, mong, stórir, stórt</li>
      <li>DET: allir, øll, allan, Allar, allur, allari, annað</li>
      <li>NOUN: býur, høvuðsstaður, kommuna, partur, týdning, fólk, kommunur, limur, ár, kommunu</li>
      <li>PRON: nakrir, Allir, Báðir, nakar, okkurt, onga</li>
      <li>PROPN: Føroyum, Føroya, Føroyar, Noregi, Danmark, Fraklandi, Keypmannahavn, Niðurlondum, Noregs, Grønlandi</li>
      <li>VERB-Part: flettir, kendastur, keyptir, nevndar, prentaðir</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: størsti, størsta, Flestu, hægsti, størstu, bestu, minsta, minsti, besta, besti</li>
      <li>ADV: best, størsta</li>
      <li>VERB-Part: kendastur</li>
    </ul>
  </li>
</ul>



<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB: er, eru, var, hevur, vóru, varð, verður, býr, kom, liggur</li>
      <li>VERB-Part: nevndur, Sameindu, fingin, flettir, fluttur, framdur, gjørdur, hóskandi, kendastur, keyptir</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: Sí, Drívið, Les, end</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>VERB: var, vóru, varð, kom, fór, hevði, tók, gjørdist, vann, bleiv</li>
      <li>VERB-Part: nevndur, Sameindu, fingin, flettir, fluttur, framdur, gjørdur, kendastur, keyptir, nevndar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB: er, eru, hevur, verður, býr, liggur, kann, fer, skal, hava</li>
      <li>VERB-Part: hóskandi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB: gjørdist, sæst, fæst, nevnist, búsettust, gerast, Andaðist, berast, berjast, boksast</li>
      <li>VERB-Inf: berast, berjast, gerast, gevast, giftast, kappast, klekjast, mannast, mennast, miðlast</li>
      <li>VERB-Sup: sæst, staðist</li>
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
      <li>PRON: hetta, Hettar, hesir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: hvat</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: hon, hann, tað, teir, hansara, tey, henni, honum, vit, eg</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: sum, ið</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: 2., 1., 18., 19., 11., 12., 16., 17., 29., 3.</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: seg, sær</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: vit, eg, mín, okkara, okkum</li>
      <li>VERB: havi, taki</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: tú</li>
      <li>VERB: sært</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: hon, hann, tað, teir, hansara, tey, henni, honum, hennara, hana</li>
      <li>VERB: er, var, hevur, varð, verður, býr, kom, liggur, kann, fer</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: vera, verða, vara.</li>
</ul>

<ul>
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: hava, kunna, skula, verða, vera, mega, koma, kunnu.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: verða, vera.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Acc (4)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Nom (209)</li>
      <li>VERB--NOUN-Nom-ADP(um) (1)</li>
      <li>VERB--PRON (19)</li>
      <li>VERB--PRON-Nom (47)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--NOUN-Nom (14)</li>
      <li>VERB-Inf--PRON (2)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Part--NOUN-Nom (9)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Nom (2)</li>
      <li>VERB-Sup--NOUN-Nom (30)</li>
      <li>VERB-Sup--PRON-Nom (14)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--NOUN-Acc (55)</li>
      <li>VERB--NOUN-Acc-ADP(á) (1)</li>
      <li>VERB--NOUN-Dat (9)</li>
      <li>VERB--NOUN-Nom (4)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (12)</li>
      <li>VERB--PRON-Dat (3)</li>
      <li>VERB-Inf--NOUN-Acc (33)</li>
      <li>VERB-Inf--NOUN-Dat (3)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (6)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Sup--NOUN-Acc (3)</li>
      <li>VERB-Sup--NOUN-Dat (2)</li>
      <li>VERB-Sup--NOUN-Nom (2)</li>
      <li>VERB-Sup--PRON (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Sup--NOUN-Dat (1)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 11 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: taka seg, breiða seg, búseta seg, halda sær, játta seg, krúpa sær, laga seg, lata seg, leggja seg, sita sær, venja seg</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:cleft</a>, <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>nmod:poss</a>, <a>nsubj:pass</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>clf</a>, <a>fixed</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
