---
layout: base
title:  'UD_Icelandic-GC'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Icelandic GC

Language: [Icelandic](/is/index.html) (code: `is`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.11 release.

The following people have contributed to making this treebank part of UD: Vilhjálmur Þorsteinsson, Hulda Óladóttir, Þórunn Arnardóttir, Sveinbjörn Þórðarson, Haukur Barri Símonarson, Katla Ásgeirsdóttir.

Repository: [UD_Icelandic-GC](https://github.com/UniversalDependencies/UD_Icelandic-GC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udis_gc213)<br />
Download all treebanks: [UD 2.13](/#download)

License: CC BY-SA 4.0

Genre: news, government

Questions, comments?
General annotation questions (either Icelandic-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Icelandic-GC/issues).
If you want to collaborate, please contact [thar&nbsp;(æt)&nbsp;hi&nbsp;•&nbsp;is].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

UD_Icelandic-GC is a conversion of the gold part of [GreynirCorpus](https://github.com/mideind/GreynirCorpus), which has been manually corrected and verified. The corpus is parsed into full constituency trees, and converted using [UDConverter-GreynirCorpus](https://github.com/thorunna/UDConverter-GreynirCorpus).




The treebank consists of text which was extracted from news and governments sites on the web in the years 2015-2021.

The GreynirCorpus data was split into a development set and a test set, and that split is preserved. The test set consists of 10% of the total number of sentences, chosen at random. The test set in UD_Icelandic-GC is the same. The original development set is now the training set, excluding every tenth file, which is now in the development set.

The treebank consists of 99,611 tokens in total. The training set consists of 78,568 tokens, the development set of 10,694 tokens and the test set of 10,349 tokens.


## Acknowledgments

This project was funded by the Language Technology Programme for Icelandic 2019-2023. The programme, which is managed and coordinated by Almannarómur (https://almannaromur.is/), is funded by the Icelandic Ministry of Education, Science and Culture.



# Statistics of UD Icelandic GC

## POS Tags

[ADJ](is_gc-pos-ADJ.html) – [ADP](is_gc-pos-ADP.html) – [ADV](is_gc-pos-ADV.html) – [AUX](is_gc-pos-AUX.html) – [CCONJ](is_gc-pos-CCONJ.html) – [DET](is_gc-pos-DET.html) – [INTJ](is_gc-pos-INTJ.html) – [NOUN](is_gc-pos-NOUN.html) – [NUM](is_gc-pos-NUM.html) – [PART](is_gc-pos-PART.html) – [PRON](is_gc-pos-PRON.html) – [PROPN](is_gc-pos-PROPN.html) – [PUNCT](is_gc-pos-PUNCT.html) – [SCONJ](is_gc-pos-SCONJ.html) – [SYM](is_gc-pos-SYM.html) – [VERB](is_gc-pos-VERB.html) – [X](is_gc-pos-X.html)

## Features

[Case](is_gc-feat-Case.html) – [Definite](is_gc-feat-Definite.html) – [Degree](is_gc-feat-Degree.html) – [Gender](is_gc-feat-Gender.html) – [Mood](is_gc-feat-Mood.html) – [Number](is_gc-feat-Number.html) – [NumType](is_gc-feat-NumType.html) – [Person](is_gc-feat-Person.html) – [PronType](is_gc-feat-PronType.html) – [Tense](is_gc-feat-Tense.html) – [VerbForm](is_gc-feat-VerbForm.html) – [Voice](is_gc-feat-Voice.html)

## Relations

[acl](is_gc-dep-acl.html) – [acl:relcl](is_gc-dep-acl-relcl.html) – [advcl](is_gc-dep-advcl.html) – [advmod](is_gc-dep-advmod.html) – [amod](is_gc-dep-amod.html) – [aux](is_gc-dep-aux.html) – [case](is_gc-dep-case.html) – [cc](is_gc-dep-cc.html) – [ccomp](is_gc-dep-ccomp.html) – [compound:prt](is_gc-dep-compound-prt.html) – [conj](is_gc-dep-conj.html) – [cop](is_gc-dep-cop.html) – [csubj](is_gc-dep-csubj.html) – [dep](is_gc-dep-dep.html) – [det](is_gc-dep-det.html) – [discourse](is_gc-dep-discourse.html) – [expl](is_gc-dep-expl.html) – [fixed](is_gc-dep-fixed.html) – [flat](is_gc-dep-flat.html) – [flat:foreign](is_gc-dep-flat-foreign.html) – [flat:name](is_gc-dep-flat-name.html) – [iobj](is_gc-dep-iobj.html) – [mark](is_gc-dep-mark.html) – [nmod](is_gc-dep-nmod.html) – [nmod:poss](is_gc-dep-nmod-poss.html) – [nsubj](is_gc-dep-nsubj.html) – [nummod](is_gc-dep-nummod.html) – [obj](is_gc-dep-obj.html) – [obl](is_gc-dep-obl.html) – [parataxis](is_gc-dep-parataxis.html) – [punct](is_gc-dep-punct.html) – [root](is_gc-dep-root.html) – [xcomp](is_gc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 5000 sentences and 99611 tokens.</li>
</ul>

<ul>
<li>This corpus contains 7854 tokens (8%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 315 types of words that contain both letters and punctuation. Examples: m.a., mbl.is, Facebook-síðu, ehf., gr., kr., mennta-, nr., t.d., L., Norður-Kóreu, fjármála-, sl., umhverfis-, þ.e., Dr., G., Jong-Un, Pepsi-deild, Pepsi-deildinni, Sádi-Arabíu, Th., elsk'ann, heilbrigðis-, omega-3, s.s., sbr., sunnan-, A., B., Downing-stræti, Facebook-síðum, H&M, Instagram-síðu, J., N-Kórea, NBA-deildarinnar, Olís-deildar, S., Suður-, Suður-Afríku, TF-LÍF, Twitter-síðu, Vinstri-grænna, atvinnu-, atvinnuvega-, e., efnahags-, hf., kl.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): af, að, vita, á</li>
</ul>

<ul>
<li>This corpus contains 106 lemmas tagged as pronouns (PRON): alla, allan, allir, allra, allt, allur, anna, annar, annarri, annað, biðja, báðir, báðum, efnis, eigandi, ein, eina, einhver, einhvern, einn, eins, einustu, eitt, eitthvað, ekkert, engan, enginn, flestir, fáeinir, hana, hann, hans, henni, hinn, hitta, honum, hvað, hvaða, hver, hverju, hvor, hvort, hvorugur, hún, húnn, jörðinni-sá, krónu, lítill, margur, maður, mig, minn, mín, mínu, neinn, neitt, nokkur, og, okkar, okkur, sama, saman, sami, samur, sig, sinn, sinni, sinnir, sitt, sjá, sjálf, sjálfa, sjálfur, slíkur, sumir, sumur, sá, sér, sérhver, sínum, sömu, við, vér, ég, öllum, öðru, ýmis, þar, þau, það, það-myrkur, þeir, þeirra, þennan, þess, þessi, þessu, þessum, þetta, þinn, því, því-dimm, þvílíkur, þá, þér, þú</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as determiners (DET): WOW-ið, hinn, volume-ið</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: hinn</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): fá, geta, hafa, kunna, mega, munu, skulu, vera, verða, vilja</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as AUX and sometimes as VERB: fá, geta, hafa, kunna, mega, munu, skulu, vera, verða, vilja</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>ADP: til, um, fyrir, á, við, eftir, með, í, þrátt, yfir</li>
    <li>ADV: eftir, mynda, til, við</li>
    <li>AUX: hafa, vera, geta, vilja, fá, hafi</li>
    <li>VERB: gera, koma, hafa, fara, taka, vera, fá, sjá, halda, ræða</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADV: lokinni, samanborðið</li>
    <li>AUX: verið, haft</li>
    <li>VERB: gert, komið, birt, farið, gerð, tekin, búið, gerðar, komin, tekið</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>ADV: farið, fullvissað</li>
    <li>AUX: verið, getað, geta, fengið, mátt</li>
    <li>VERB: verið, komið, tekið, farið, fengið, haft, orðið, gert, sagt, unnið</li>
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
      <li>ADJ: síðustu, fyrstu, mikil, næstu, Sameinuðu, meiri, frekari, mikla, ný, góðar</li>
      <li>ADV: viku, byrjun, nótt, mínútu, vikur, mínútur, vikum, helgi, leið, helgina</li>
      <li>DET: hin, hina, hinar, hinnar, hinni, hinum</li>
      <li>NOUN: leið, ákvörðun, upplýsingar, konur, stjórn, sögn, þjónustu, frétt, tilkynningu, lögreglu</li>
      <li>NUM: tvær, milljónir, tveggja, tveimur, þremur, fjórar, tíu, fimm, milljónum, prósent</li>
      <li>PRON: hún, þær, hennar, henni, sinni, sína, sú, þeim, þá, hana</li>
      <li>PROPN: Reykjavík, Katrín, Reykjavíkur, Evrópu, 2, Akureyri, Sigríður, Anna, Danmörku, Erla</li>
      <li>VERB: kynnt, sögð, afhenta, birt, búin, farin, flutta, gerð, hafin, hafnar</li>
      <li>VERB-Part: kynnt, sögð, afhenta, birt, búin, flutta, gerð, hafin, hafnar, kjörin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: margir, síðustu, fleiri, fyrri, mikill, fyrrverandi, fyrstu, fyrsti, seinni, fyrsta</li>
      <li>ADV: dag, mánuði, daga, daginn, hálfleik, tíma, mánuðum, dagana, laugardag, laugardaginn</li>
      <li>DET: hinn, hinum, Hinir</li>
      <li>NOUN: maður, stað, tíma, menn, leik, þátt, sigur, formaður, forsætisráðherra, hluti</li>
      <li>NUM: tveir, tvo, sjö, einn, átta, þrír, fimm, tveggja, tveimur, tíu</li>
      <li>PRON: hann, þeir, hans, þeim, þeirra, sínum, honum, allir, þess, þann</li>
      <li>PROPN: Trump, Jón, þór, Guðmundur, Sigurður, Ólafur, Bjarni, Björn, Davíð, Donald</li>
      <li>VERB: hafinn, orðinn, handteknir, bundinn, byggður, búsettur, eigandi, endurgreiddir, gagnrýndir, handtekna</li>
      <li>VERB-Part: hafinn, orðinn, handteknir, bundinn, byggður, búsettur, endurgreiddir, gagnrýndir, handtekna, leikinn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: hægt, mikið, ljóst, gott, síðasta, meira, miklu, íslenska, erfitt, fyrsta</li>
      <li>ADV: ár, ári, árum, fyrra, sumar, lok, því, árið, kvöld, það</li>
      <li>DET: hið, hin, hinu, WOW-ið, hinum, volume-ið</li>
      <li>NOUN: ára, fólk, sæti, málið, mál, áhrif, liðið, landsins, ráð, og</li>
      <li>NUM: fimm, tvö, prósent, þrjú, eitt, sex, þúsund, tíu, tveggja, fjögur</li>
      <li>PRON: það, því, þetta, þess, þau, þessu, allt, hvað, þeirra, þeim</li>
      <li>PROPN: Íslands, Íslandi, Ísland, Bandaríkjunum, Bandaríkjanna, Morgunblaðinu, RÚV, Alþingi, Alþingis, ESB</li>
      <li>VERB-Part: búið, farið, gert, kveðið, stefnt, talið, þekkt, Fjallað, Skrifað, Sýnt</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: síðustu, fleiri, fyrstu, næstu, margir, mörg, Sameinuðu, mörgum, frekari, margra</li>
      <li>ADV: ár, árum, daga, lok, mánuði, vikur, mánuðum, mínútur, vikum, dagana</li>
      <li>AUX: eru, hafa, voru, hafi, séu, geta, hefðu, munu, geti, erum</li>
      <li>AUX-Part: verið</li>
      <li>DET: hin, Hinir, hinum, hinar</li>
      <li>NOUN: ára, menn, króna, konur, upplýsingar, stig, stjórnvöld, börn, mörk, kvenna</li>
      <li>NUM: fimm, tveggja, tíu, tvö, átta, sex, tveimur, sjö, þúsund, prósent</li>
      <li>PRON: við, þeir, þeirra, þeim, þau, okkur, okkar, þær, sínum, allir</li>
      <li>PROPN: Bandaríkjunum, Bandaríkjanna, Haukar, Suðurnesjum, Bandaríkin, Hauka, Vestfjörðum, Egilsstöðum, Vestmannaeyja, Vestmannaeyjum</li>
      <li>VERB: eru, hafa, voru, eiga, erum, segja, verða, komu, séu, koma</li>
      <li>VERB-Part: gerðar, komnir, komin, komnar, sett, settar, tekin, búnir, greiddar, teknar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: hægt, mikið, síðasta, fyrsta, ljóst, gott, næsta, íslenska, meira, síðustu</li>
      <li>ADV: dag, ári, viku, fyrra, sumar, daginn, byrjun, ár, því, nótt</li>
      <li>ADV-Part: lokinni, samanborðið</li>
      <li>AUX: er, var, hefur, hafi, sé, hefði, má, væri, hafði, mun</li>
      <li>AUX-Part: haft, verið</li>
      <li>DET: hið, hinn, hin, hinu, hinum, hina, WOW-ið, hinnar, hinni, volume-ið</li>
      <li>NOUN: fólk, sæti, maður, stað, málið, og, leið, liðið, tíma, leik</li>
      <li>NUM: eitt, einn, 1, einu, eins, hundrað, prósent, 41, 60, einni</li>
      <li>PRON: það, hann, því, ég, þetta, hún, þess, hans, mér, þessu</li>
      <li>PROPN: Íslands, Íslandi, Reykjavík, Ísland, Reykjavíkur, 2, Morgunblaðinu, RÚV, Evrópu, Akureyri</li>
      <li>VERB: er, segir, var, sagði, kemur, verður, sé, kom, á, fór</li>
      <li>VERB-Part: gert, komið, farið, birt, gerð, búið, tekið, haldið, tekin, kominn</li>
      <li>VERB-Sup: sótt</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: síðustu, fyrstu, meiri, næsta, næstu, góða, mikla, nýja, fyrsta, mikið</li>
      <li>ADP: í, um, á, við, fyrir, með, eftir, yfir, undir, gegnum</li>
      <li>ADV: dag, ár, daga, fyrra, sumar, daginn, lok, viku, á, í</li>
      <li>ADV-Inf: mynda</li>
      <li>ADV-Sup: fullvissað</li>
      <li>AUX: hafi, hefur, hafa, hefði, hefðu, muni, fengið, hafði, munum, má</li>
      <li>AUX-Inf: hafa, vera</li>
      <li>AUX-Sup: fengið, verið</li>
      <li>DET: hið, hin, hina, WOW-ið, hinar, volume-ið</li>
      <li>NOUN: málið, áhrif, þátt, stig, tíma, sæti, fólk, mál, stað, veg</li>
      <li>NUM: tvo, tvö, fimm, eitt, tíu, 10, þrjú, milljónir, prósent, tvær</li>
      <li>PRON: það, sig, hann, þetta, þá, sína, mig, þann, hvað, allt</li>
      <li>PROPN: Trump, Ísland, Jón, Audi, Clinton, James, Reykjavík, Singapúr, Ólaf, Alberta</li>
      <li>VERB: segir, hafa, sagði, gera, fá, sjá, segja, taka, fékk, hefur</li>
      <li>VERB-Inf: gera, hafa, sjá, fá, taka, finna, leggja, setja, gefa, nota</li>
      <li>VERB-Part: gert, birt, afhenta, bönnuð, dæmd, ekið, felld, flutta, fært, handtekna</li>
      <li>VERB-Sup: tekið, haft, fengið, sagt, gefið, átt, gert, hlotið, séð, fundið</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: síðasta, síðustu, næstu, fyrstu, miklu, mörgum, góðu, miklum, nýju, nýjum</li>
      <li>ADP: í, á, af, með, að, frá, úr, fyrir, hjá, eftir</li>
      <li>ADV: ári, árum, á, byrjun, því, frá, viku, mánuði, mánuðum, mínútu</li>
      <li>AUX: er, var, hefur, sé, hafi, hafði, myndu, mætti, skuli, verið</li>
      <li>AUX-Sup: verið</li>
      <li>DET: hinum, hinu, hinni</li>
      <li>NOUN: landinu, sæti, samtali, máli, leiknum, sögn, Íslandi, fólki, stað, leik</li>
      <li>NUM: tveimur, þremur, fimm, fjórum, sex, átta, sjö, tíu, einu, milljónum</li>
      <li>PRON: því, sér, þeim, mér, þessu, sínum, þessum, honum, henni, okkur</li>
      <li>PROPN: Íslandi, Bandaríkjunum, Reykjavík, Morgunblaðinu, Akureyri, Danmörku, London, Noregi, Evrópu, HM</li>
      <li>VERB: finnst, ná, koma, halda, náði, kom, tengjast, fylgja, sinna, komið</li>
      <li>VERB-Inf: ná, koma, halda, fylgja, beita, breyta, skila, ljúka, mæta, ráða</li>
      <li>VERB-Part: beitt, bætt, fagnað, hleypt, lofað, lokið, lýst, aflýst, beint, beittir</li>
      <li>VERB-Sup: komið, náð, hafnað, lýst, frestað, stýrt, beitt, fækkað, numið, spáð</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: Sameinuðu, margra, íslenskra, síðustu, fyrsta, íslenska, íslensku, aldraðra, bandarískra, breska</li>
      <li>ADP: til, vegna, milli, á, án, meðal, innan, auk, utan, fyrir</li>
      <li>ADV: til, ára, daga, framtíðar, metra, morguns, neins, sólarhrings</li>
      <li>AUX: er, var, sé, eru, vera, verið</li>
      <li>AUX-Inf: vera</li>
      <li>AUX-Sup: verið</li>
      <li>DET: hinnar</li>
      <li>NOUN: ára, landsins, kvenna, Íslands, manns, árs, barna, fólks, félagsins, málsins</li>
      <li>NUM: tveggja, þriggja, fjögurra, fimm, sex, átta, 100, 16, 18, 6</li>
      <li>PRON: þess, þeirra, hans, okkar, hennar, þessa, allra, hvers, annarra, sinnar</li>
      <li>PROPN: Íslands, Bandaríkjanna, Reykjavíkur, 2, Alþingis, stöðvar, Sjálfstæðisflokksins, RÚV, Trump, Trumps</li>
      <li>VERB: er, krafist, krefjast, krefst, leita, njóta, nýtur, notið, geta, gæta</li>
      <li>VERB-Inf: leita, geta, gæta, krefjast, afla, biðja, komast, njóta, skammast, spyrja</li>
      <li>VERB-Part: aflað, gætt, saknað, spurð, spurður</li>
      <li>VERB-Sup: krafist, notið, beðist, leitað, óskað, aflað, gætt, minnst, neytt, synjað</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: hægt, ljóst, mikið, mikil, fleiri, gott, margir, mikill, erfitt, mikilvægt</li>
      <li>ADP: sem, á, og, sbr., til</li>
      <li>ADV: allt, það, Föstudaginn, ein, einn, erfitt, kvöld, mínútur, síður, vika</li>
      <li>AUX: er, var, eru, verið, sé, vera, væri, voru, séu, væru</li>
      <li>AUX-Inf: vera</li>
      <li>AUX-Part: verið</li>
      <li>AUX-Sup: verið</li>
      <li>DET: hinn, hin, hið, Hinir</li>
      <li>NOUN: fólk, maður, menn, liðið, formaður, forseti, stjórnvöld, konur, framkvæmdastjóri, fyrirtækið</li>
      <li>NUM: tveir, prósent, þrír, einn, fimm, þúsund, tvær, tvö, tíu, sex</li>
      <li>PRON: það, hann, ég, við, hún, þetta, þeir, þau, þessi, þú</li>
      <li>PROPN: Trump, þór, Jón, Guðmundur, Ísland, Katrín, Sigurður, Ólafur, Bjarni, Björn</li>
      <li>VERB: er, var, eru, verið, sé, verður, verði, voru, varð, verða</li>
      <li>VERB-Inf: vera, verða, heita, bera, enda, gerast, mæla, taka, teljast</li>
      <li>VERB-Part: orðinn, búið, talin, farið, hafinn, kynnt, gert, gerð, handteknir, kveðið</li>
      <li>VERB-Sup: verið, orðið, nefnt, reynst, þótt, fundist, færst, gerst, hraunað, lýst</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADV: daginn, árið, laugardaginn, sunnudaginn, tímanum, dagana, helgina, lokin, árin, árinu</li>
      <li>DET: hið, hin, hinn, hinum, hinu, Hinir, hina, WOW-ið, hinar, hinnar</li>
      <li>NOUN: málið, landsins, liðið, landinu, leiknum, fyrirtækið, málinu, félagið, lögreglan, félagsins</li>
      <li>PROPN: Bandaríkjunum, Bandaríkjanna, Morgunblaðinu, Sjálfstæðisflokksins, Framsóknarflokksins, Landsbankans, Fréttablaðinu, Fréttablaðsins, Landhelgisgæslunnar, Samfylkingarinnar</li>
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
      <li>ADJ: fleiri, meiri, meira, fyrri, seinni, frekari, eldri, betri, stærri, minni</li>
      <li>ADV: betur, fyrr, meira, frekar, síðar, heldur, lengur, fyrra, fremur, síður</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: ljóst, hægt, mikið, mikill, nýja, erfitt, erfiðar, gamli, mikilvægt, mikla</li>
      <li>ADV: hér, ekki, vel, svo, mjög, upp, á, þó, að, ekkert</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: síðustu, síðasta, næstu, næsta, besta, helstu, flestir, mesta, bestu, mestu</li>
      <li>ADV: fyrst, síðast, mest, nánast, best, helst, lengst, næst, minnst, síst</li>
    </ul>
  </li>
</ul>



<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: Verið</li>
      <li>VERB: blandið, haltu, hrærið, Hitið, Sneiðið, dreifið, dæmdu, missa, setjið, steikið</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: er</li>
      <li>AUX: er, var, hefur, eru, hafa, voru, má, hafði, mun, getur</li>
      <li>VERB: er, segir, var, eru, sagði, kemur, verður, kom, á, fór</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: hafi, sé, hefði, væri, séu, geti, verði, muni, gæti, hefðu</li>
      <li>VERB: sé, verði, væri, eigi, hafi, yrði, séu, ætti, fái, komi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: var, voru, hefði, væri, hafði, hefðu, gæti, væru, höfðu, myndi</li>
      <li>VERB: var, sagði, kom, fór, voru, væri, tók, varð, fékk, átti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADV: er</li>
      <li>AUX: er, hefur, hafi, eru, sé, hafa, má, mun, séu, getur</li>
      <li>VERB: er, segir, eru, kemur, verður, sé, verði, á, hafa, hefur</li>
      <li>VERB-Part: kólnandi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADV: lent, mynda, er, farið, fullvissað</li>
      <li>ADV-Inf: mynda</li>
      <li>ADV-Sup: farið, fullvissað</li>
      <li>AUX: er, var, hefur, verið, hafi, hafa, eru, sé, voru, vera</li>
      <li>AUX-Inf: hafa, vera, geta, vilja, fá, hafi</li>
      <li>AUX-Sup: verið, getað, geta, fengið, mátt</li>
      <li>VERB: er, segir, var, eru, sagði, hafa, gera, kemur, verið, koma</li>
      <li>VERB-Inf: gera, koma, hafa, fara, taka, vera, sjá, fá, halda, ræða</li>
      <li>VERB-Sup: verið, komið, tekið, farið, fengið, haft, orðið, gert, sagt, unnið</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB: finnst, segist, virðist, komast, fannst, tekist, fylgjast, tengjast, sagðist, aukist</li>
      <li>VERB-Inf: komast, fylgjast, bregðast, gerast, búast, berjast, takast, tengjast, aukast, eignast</li>
      <li>VERB-Sup: tekist, aukist, borist, fundist, búist, komist, krafist, lýst, brugðist, náðst</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADV: því, það</li>
      <li>PRON: það, hann, ég, við, hún, sér, þeir, því, sig, hans</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADV: 21, 1,14, 28, 79</li>
      <li>NUM: 2, 0, 1, 3, 5, 10, 15, 30, 12, 20</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: 1., 2., 4., 5., 7., 20., 8., 10., 112., 13.</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: hef, er, var, erum, höfum, vorum, getum, get, hafði, munum</li>
      <li>PRON: ég, við, mér, okkur, okkar, mig, Vér, eg, okkir</li>
      <li>VERB: erum, þurfum, held, fór, veit, hef, eigum, finnst, viljum, höfum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: getur, ert, myndir, skaltu, værir, Ertu, Hafið, Muntu, getið, hefur</li>
      <li>PRON: þú, þér, þið, þig, ykkur, ykkar, þín</li>
      <li>VERB: ertu, ert, eigið, segir, veist, átt, þarft, Finnur, Manstu, Nýttir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADV: því, það, er</li>
      <li>AUX: er, var, hefur, hafi, eru, sé, hafa, voru, hefði, má</li>
      <li>PRON: það, hann, hún, þeir, því, hans, þau, þeirra, þeim, hennar</li>
      <li>VERB: er, segir, var, eru, sagði, kemur, verður, sé, kom, verði</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: vera.</li>
</ul>

<ul>
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: hafa, geta, munu, mega, verða, vilja, skulu, fá, kunna.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Acc (44)</li>
      <li>VERB--NOUN-Acc-ADP(á) (1)</li>
      <li>VERB--NOUN-Dat (56)</li>
      <li>VERB--NOUN-Gen (16)</li>
      <li>VERB--NOUN-Nom (2022)</li>
      <li>VERB--NOUN-Nom-ADP(fyrir) (1)</li>
      <li>VERB--PRON (8)</li>
      <li>VERB--PRON-Acc (46)</li>
      <li>VERB--PRON-Dat (61)</li>
      <li>VERB--PRON-Gen (3)</li>
      <li>VERB--PRON-Nom (1563)</li>
      <li>VERB-Inf--NOUN-Acc (23)</li>
      <li>VERB-Inf--NOUN-Dat (3)</li>
      <li>VERB-Inf--NOUN-Nom (115)</li>
      <li>VERB-Inf--PRON-Acc (14)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Inf--PRON-Nom (100)</li>
      <li>VERB-Part--NOUN-Acc (4)</li>
      <li>VERB-Part--NOUN-Dat (49)</li>
      <li>VERB-Part--NOUN-Gen (4)</li>
      <li>VERB-Part--NOUN-Nom (393)</li>
      <li>VERB-Part--PRON (1)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Dat (10)</li>
      <li>VERB-Part--PRON-Gen (2)</li>
      <li>VERB-Part--PRON-Nom (135)</li>
      <li>VERB-Sup--NOUN-Acc (15)</li>
      <li>VERB-Sup--NOUN-Dat (36)</li>
      <li>VERB-Sup--NOUN-Gen (9)</li>
      <li>VERB-Sup--NOUN-Nom (403)</li>
      <li>VERB-Sup--PRON-Acc (5)</li>
      <li>VERB-Sup--PRON-Dat (14)</li>
      <li>VERB-Sup--PRON-Gen (7)</li>
      <li>VERB-Sup--PRON-Nom (274)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (1128)</li>
      <li>VERB--NOUN-Acc-ADP(við) (1)</li>
      <li>VERB--NOUN-Dat (279)</li>
      <li>VERB--NOUN-Dat-ADP(að) (2)</li>
      <li>VERB--NOUN-Dat-ADP(í) (2)</li>
      <li>VERB--NOUN-Gen (50)</li>
      <li>VERB--NOUN-Nom (57)</li>
      <li>VERB--PRON (5)</li>
      <li>VERB--PRON-Acc (223)</li>
      <li>VERB--PRON-Acc-ADP(eiga) (1)</li>
      <li>VERB--PRON-Dat (89)</li>
      <li>VERB--PRON-Gen (11)</li>
      <li>VERB--PRON-Nom (14)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Acc (841)</li>
      <li>VERB-Inf--NOUN-Dat (201)</li>
      <li>VERB-Inf--NOUN-Gen (22)</li>
      <li>VERB-Inf--NOUN-Nom (13)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (156)</li>
      <li>VERB-Inf--PRON-Dat (63)</li>
      <li>VERB-Inf--PRON-Gen (12)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Part--NOUN-Acc (3)</li>
      <li>VERB-Part--NOUN-Dat (10)</li>
      <li>VERB-Part--NOUN-Gen (3)</li>
      <li>VERB-Part--NOUN-Nom (9)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Dat (2)</li>
      <li>VERB-Sup--NOUN-Acc (280)</li>
      <li>VERB-Sup--NOUN-Dat (79)</li>
      <li>VERB-Sup--NOUN-Dat-ADP(gegn) (1)</li>
      <li>VERB-Sup--NOUN-Gen (15)</li>
      <li>VERB-Sup--NOUN-Nom (6)</li>
      <li>VERB-Sup--PRON-Acc (46)</li>
      <li>VERB-Sup--PRON-Dat (38)</li>
      <li>VERB-Sup--PRON-Gen (3)</li>
      <li>VERB-Sup--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (15)</li>
      <li>VERB--NOUN-Dat (49)</li>
      <li>VERB--NOUN-Gen (3)</li>
      <li>VERB--NOUN-Nom (2)</li>
      <li>VERB--PRON-Acc (11)</li>
      <li>VERB--PRON-Dat (81)</li>
      <li>VERB--PRON-Gen (1)</li>
      <li>VERB-Inf--NOUN-Acc (6)</li>
      <li>VERB-Inf--NOUN-Dat (29)</li>
      <li>VERB-Inf--NOUN-Gen (2)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Dat (41)</li>
      <li>VERB-Part--NOUN-Dat (11)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Dat (3)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
      <li>VERB-Sup--NOUN-Acc (1)</li>
      <li>VERB-Sup--NOUN-Dat (16)</li>
      <li>VERB-Sup--NOUN-Gen (1)</li>
      <li>VERB-Sup--PRON (2)</li>
      <li>VERB-Sup--PRON-Acc (2)</li>
      <li>VERB-Sup--PRON-Dat (22)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>compound:prt</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:poss</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>compound</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>appos</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
