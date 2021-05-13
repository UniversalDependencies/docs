---
layout: base
title:  'UD_Icelandic-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Icelandic PUD

Language: [Icelandic](/is/index.html) (code: `is`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.6 release.

The following people have contributed to making this treebank part of UD: Hildur Jónsdóttir.

Repository: [UD_Icelandic-PUD](https://github.com/UniversalDependencies/UD_Icelandic-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udis_pud28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-SA 4.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Icelandic-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Icelandic-PUD/issues).
If you want to collaborate, please contact [hildur&nbsp;•&nbsp;jonsdottir&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| XPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | assigned by a program, with some manual corrections, but not a full manual verification |

## Description

Icelandic-PUD is the Icelandic part of the Parallel Universal Dependencies (PUD) treebanks.



The Icelandic-PUD consists of Icelandic translations of 1.000 sentences from the news domain and from Wikipedia. The morphological and syntactic annotation have been manually validated.
Icelandic-PUD was not created and a part of the CoNLL 2017 shared task like the other PUD treebanks.

## Acknowledgments

Translations were produced by Ölvir Gíslason, a professional translator. The automatic tagging was carried out using ABLTagger, which is based on BiLSTM models, a morphological lexicon and lexical category identification. It is developed by Steinþór Steingrímsson, Örvar Kárason and Hrafn Loftsson and available from https://github.com/steinst/ABLTagger. For lemmatizing the high accuracy lemmatizer Nefnir was run, it is developed by Jón Daði Ingólfsson, Svanhvít Lilja Ingólfsdóttir and Hrafn Loftsson and available at https://github.com/jonfd/nefnir. For preprocessing the syntactic annotation, a delexicalized parser was run using UDPipe, developed by Milan Straka, see https://ufal.mff.cuni.cz/udpipe.

The morphological and syntactic annotation were checked and corrected manually by Hildur Jónsdóttir.


# Statistics of UD Icelandic PUD

## POS Tags

[ADJ](is_pud-pos-ADJ.html) – [ADP](is_pud-pos-ADP.html) – [ADV](is_pud-pos-ADV.html) – [AUX](is_pud-pos-AUX.html) – [CCONJ](is_pud-pos-CCONJ.html) – [DET](is_pud-pos-DET.html) – [INTJ](is_pud-pos-INTJ.html) – [NOUN](is_pud-pos-NOUN.html) – [NUM](is_pud-pos-NUM.html) – [PART](is_pud-pos-PART.html) – [PRON](is_pud-pos-PRON.html) – [PROPN](is_pud-pos-PROPN.html) – [PUNCT](is_pud-pos-PUNCT.html) – [SCONJ](is_pud-pos-SCONJ.html) – [SYM](is_pud-pos-SYM.html) – [VERB](is_pud-pos-VERB.html) – [X](is_pud-pos-X.html)

## Features

[Case](is_pud-feat-Case.html) – [Definite](is_pud-feat-Definite.html) – [Degree](is_pud-feat-Degree.html) – [Foreign](is_pud-feat-Foreign.html) – [Gender](is_pud-feat-Gender.html) – [Mood](is_pud-feat-Mood.html) – [Number](is_pud-feat-Number.html) – [Person](is_pud-feat-Person.html) – [Poss](is_pud-feat-Poss.html) – [PronType](is_pud-feat-PronType.html) – [PunctSide](is_pud-feat-PunctSide.html) – [Tense](is_pud-feat-Tense.html) – [VerbForm](is_pud-feat-VerbForm.html) – [Voice](is_pud-feat-Voice.html)

## Relations

[acl](is_pud-dep-acl.html) – [acl:relcl](is_pud-dep-acl-relcl.html) – [advcl](is_pud-dep-advcl.html) – [advmod](is_pud-dep-advmod.html) – [amod](is_pud-dep-amod.html) – [appos](is_pud-dep-appos.html) – [aux](is_pud-dep-aux.html) – [case](is_pud-dep-case.html) – [cc](is_pud-dep-cc.html) – [ccomp](is_pud-dep-ccomp.html) – [compound](is_pud-dep-compound.html) – [compound:prt](is_pud-dep-compound-prt.html) – [conj](is_pud-dep-conj.html) – [cop](is_pud-dep-cop.html) – [csubj](is_pud-dep-csubj.html) – [det](is_pud-dep-det.html) – [dislocated](is_pud-dep-dislocated.html) – [expl](is_pud-dep-expl.html) – [fixed](is_pud-dep-fixed.html) – [flat](is_pud-dep-flat.html) – [flat:name](is_pud-dep-flat-name.html) – [iobj](is_pud-dep-iobj.html) – [mark](is_pud-dep-mark.html) – [nmod](is_pud-dep-nmod.html) – [nmod:poss](is_pud-dep-nmod-poss.html) – [nsubj](is_pud-dep-nsubj.html) – [nummod](is_pud-dep-nummod.html) – [obj](is_pud-dep-obj.html) – [obl](is_pud-dep-obl.html) – [obl:arg](is_pud-dep-obl-arg.html) – [parataxis](is_pud-dep-parataxis.html) – [punct](is_pud-dep-punct.html) – [root](is_pud-dep-root.html) – [vocative](is_pud-dep-vocative.html) – [xcomp](is_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 18831 tokens and 18833 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 1962 tokens (10%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 147 types of words that contain both letters and punctuation. Examples: Suður-Ameríku, Qing-keisaraveldisins, B.C., Joliot-Curie, Norður-, Norður-Karólína, Nýju-Gíneu, Qing-tímanum, Sahara-eyðimörkinni, Sahel-svæðinu, Suður-Ítalíu, n't, 'Ya, 's, -hálfvita, 200-listanum, Abbotsford-svæðið, Addenbrooke-sjúkrahúsunum, Aires-borg, Amarna-bréfanna, Austur-Afríka, Austur-Afríku, Austur-Melenesíubúar, B-29-véla, Bank-turninn, Bergeron-flokkunin, Bian-skurðinum, Boeing-vél, Buena-garðurinn, Chilia-kvíslarinnar, Curie-stofnunina, Davis-bikarinn, Disibodenberg-klaustrið, Eibingen-klaustrið, Endurance-leiðangrinum, F1-miði, Facebook-færslur, Five-Year, Fontvielle-svæðinu, Francisco-búar, Gezira-eyju, Gordon-Levitt, Goryeo-stjórninni, Harley-Davidson, Haute-Garonne, Hudson-fljótinu, Humblebums-lagi, Income-sjóðirnir, KFC-móðurfélaginu, Kelta-</li>
</ul>

<ul>
<li>This corpus contains 2 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 2 types of multi-word tokens. Examples: Látið, heyrið.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): að</li>
</ul>

<ul>
<li>This corpus contains 32 lemmas tagged as pronouns (PRON): allur, annar, báðir, einhver, einn, enginn, hann, hinn, hver, hvor, hvort, hún, minn, neinn, nokkur, sami, samur, sig, sinn, sjálfur, slíkur, sumur, sá, ég, ýmis, ýmissi, það, þessi, þig, þinn, þá, þú</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as determiners (DET): annar, hinn, þessi</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as PRON and sometimes as DET: annar, hinn, þessi</li>
</ul>

<ul>
<li>This corpus contains 7 lemmas tagged as auxiliaries (AUX): geta, hafa, mega, munu, skulu, vera, verða</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: geta, hafa, vera, verða</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>ADJ: fæst, stoltust</li>
    <li>ADP: undir</li>
    <li>AUX: er, var, voru, eru, hefur, hafa, hafði, höfðu, hafi, væri</li>
    <li>NOUN: hafi, hefðum</li>
    <li>PROPN: Beust, Trump</li>
    <li>VERB: sagði, fór, varð, segir, kom, þarf, hafði, átti, gerði, tók</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: vera, hafa, geta</li>
    <li>NOUN: dala, mótmæla</li>
    <li>VERB: nota, gera, hafa, fá, koma, sjá, taka, draga, fara, finna</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: endurkjörinn</li>
    <li>NOUN: markaðir, orðið</li>
    <li>VERB: komið, notað, gert, leiðandi, notuð, orðin, farið, greint, litið, lýstur</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>AUX: verið</li>
    <li>VERB: gert, valdið, haft, lagt, leitt, lokið, orðið, sagt, beðið, búist</li>
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
      <li>ADJ: eigin, fyrstu, meiri, nýja, nýjar, síðustu, fyrri, lifandi, mikla, bestu</li>
      <li>ADV: óvenju</li>
      <li>DET: Hin, aðrar, hinnar, hinni, hinum</li>
      <li>NOUN: öld, sögu, milljónir, stjórn, hendi, leið, notkun, menntun, ríkisstjórnin, sögunnar</li>
      <li>NUM: tvær, sex, tveggja, þremur, einnar, átta, ein, einni, fimm, fjórar</li>
      <li>PRON: hún, hennar, sinni, þær, sína, henni, sér, þeirra, hana, þessi</li>
      <li>PROPN: Evrópu, Ítalíu, Albaníu, Asíu, Suður-Ameríku, Makedóníu, Ástralíu, Þrakíu, Afríku, Ameríku</li>
      <li>VERB: orðin, notuð, birt, birtar, gerð, lögð, ræktaðar, afturkölluð, dvöldu, fluttar</li>
      <li>VERB-Part: orðin, notuð, birt, birtar, gerð, lögð, ræktaðar, fluttar, framkvæmdar, frumsýnd</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: margir, minnsta, þriðja, fyrsti, gjaldþrota, hefðbundna, hærri, marga, næsta, síðasta</li>
      <li>ADJ-Part: endurkjörinn</li>
      <li>ADV: mun, gríðarlega, þá</li>
      <li>DET: hinn, hinna, hins, hinum</li>
      <li>NOUN: hluta, október, stað, fjölda, áratugnum, maður, apríl, tíma, janúar, júní</li>
      <li>NOUN-Part: markaðir</li>
      <li>NUM: einn, tvo, tíu, fimm, fjórir, tveimur, 9., fjóra, sex, tveggja</li>
      <li>PRON: hann, hans, þeir, sig, honum, þeirra, sér, þeim, sínum, einn</li>
      <li>PROPN: Krist, Breta, Kínverjar, Akkemenída, Balkanskaga, Evrópubúar, Frakka, Kristófer, Kínverja, Kólumbus</li>
      <li>VERB: lýstur, byggður, haldnir, orðnir, rekinn, sagður, sýndur, afturkallaði, bornir, bundinn</li>
      <li>VERB-Part: lýstur, byggður, haldnir, orðnir, rekinn, sagður, sýndur, bornir, dreginn, farinn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: hægt, fyrsta, meira, miklu, mikið, mörg, kleift, nýja, ótrúlegt, besta</li>
      <li>ADP: við</li>
      <li>ADV: allt, loks, meira, vafningalaust, því</li>
      <li>AUX: verði</li>
      <li>DET: hið, hinna, hins, hinu, þetta</li>
      <li>NOUN: árið, ár, árum, ára, fólk, áhrif, sinn, borð, kjölfar, efni</li>
      <li>NOUN-Part: orðið</li>
      <li>NUM: eitt, tveggja, fjögur, tveimur, tvö, þrjú, sex, tíu, þrjátíu, 10.000</li>
      <li>PRON: það, því, þetta, þess, þau, allt, hvað, sitt, engu, sér</li>
      <li>PROPN: Bretlandi, Kína, Bandaríkin, Bandaríkjanna, Bretland, Bandaríkjunum, Frakklandi, Grikklandi, Kyrrahafi, Miðjarðarhaf</li>
      <li>SCONJ: því</li>
      <li>VERB: komið, notað, gert, farið, greint, litið, sagt, sett, stofnað, talið</li>
      <li>VERB-Part: komið, notað, gert, farið, greint, litið, sagt, sett, stofnað, talið</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: síðustu, margir, fleiri, mörg, fyrstu, nýjar, lifandi, mörgum, grísku, hefðbundna</li>
      <li>ADJ-Fin: stoltust</li>
      <li>ADV: loks, þá</li>
      <li>AUX-Fin: voru, eru, hafa, höfðu, geta, hefðu, séu, hafi, væru, gætu</li>
      <li>DET: hinna, hinum, aðrar</li>
      <li>NOUN: árum, ára, áhrif, milljónir, ár, sinnum, yfirráð, fjárfestar, lögum, mörkum</li>
      <li>NOUN-Fin: hafi, hefðum</li>
      <li>NOUN-Part: markaðir</li>
      <li>NUM: tveggja, tvær, sex, tveimur, tíu, tvo, fimm, þremur, fjórir, fjögur</li>
      <li>PRON: þeir, þeirra, við, þau, þær, þeim, okkar, sín, okkur, sig</li>
      <li>PROPN: Breta, Bandaríkin, Bandaríkjanna, Kínverjar, Akkemenída, Bandaríkjunum, Evrópubúar, Frakka, Alpafjöllum, Grikkir</li>
      <li>PROPN-Fin: Trump</li>
      <li>VERB: eiga, komu, fengu, urðu, höfðu, eru, segja, fóru, gerðu, sneru</li>
      <li>VERB-Fin: eiga, komu, fengu, urðu, höfðu, eru, segja, fóru, gerðu, sneru</li>
      <li>VERB-Part: birtar, byggð, haldnir, orðnir, ræktaðar, bornir, boðin, eyðilögð, farnir, fjármögnuð</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: fyrsta, hægt, nýja, eigin, meira, miklu, meiri, mikið, síðasta, mikla</li>
      <li>ADJ-Fin: fæst</li>
      <li>ADJ-Part: endurkjörinn</li>
      <li>ADP: undir, við</li>
      <li>ADP-Fin: undir</li>
      <li>ADV: mun, allt, gríðarlega, meira, vafningalaust, óvenju, því</li>
      <li>AUX: er, var, hefur, hafði, væri, myndi, sé, gæti, má, getur</li>
      <li>AUX-Fin: er, var, hefur, hafði, væri, myndi, sé, gæti, má, getur</li>
      <li>DET: hinn, hins, hið, Hin, hinnar, hinni, hinu, þetta</li>
      <li>NOUN: árið, hluta, október, stað, öld, fólk, fjölda, sinn, sögu, ár</li>
      <li>NOUN-Fin: hafi</li>
      <li>NOUN-Part: orðið</li>
      <li>NUM: eitt, einn, 9., einnar, 10., 19., 21., 28., ein, einni</li>
      <li>PRON: það, hann, því, þetta, þess, hún, ég, hans, sér, sig</li>
      <li>PROPN: Krist, Evrópu, Bretlandi, Kína, Ítalíu, Albaníu, Asíu, Bretland, Suður-Ameríku, Balkanskaga</li>
      <li>PROPN-Fin: Beust</li>
      <li>SCONJ: því</li>
      <li>VERB: sagði, fór, varð, segir, þarf, hafði, kom, átti, gerði, tók</li>
      <li>VERB-Fin: sagði, fór, varð, segir, þarf, hafði, kom, átti, gerði, tók</li>
      <li>VERB-Part: komið, notað, gert, orðin, farið, greint, litið, lýstur, notuð, sagt</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: fyrsta, nýja, mörg, kleift, meira, nýjar, eigin, mikla, nýtt, hefðbundna</li>
      <li>ADV: loks, þá</li>
      <li>DET: hinn, hið</li>
      <li>NOUN: árið, ár, áhrif, sinn, stað, borð, kjölfar, hluta, október, dag</li>
      <li>NUM: tvær, eitt, tvo, fjóra, sex, 10., 10.000, 19., 21., fimm</li>
      <li>PRON: sig, það, sína, þetta, hana, hann, sitt, þau, allt, þessa</li>
      <li>PROPN: Krist, Miðjarðarhaf, Miðjarðarhafið, Beijing, Moravíu, Ítalíu, Þrakíu, Abakumov, Adríahaf, Aires-borg</li>
      <li>VERB: bíði, getið, skipt, slappað, útlista</li>
      <li>VERB-Part: getið</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: miklu, síðustu, eigin, fyrstu, minnsta, þriðja, fullu, löngu, mörgum, auknum</li>
      <li>ADV: mun, gríðarlega, því</li>
      <li>AUX: verði</li>
      <li>DET: hinum, hinni, hinu</li>
      <li>NOUN: árum, öld, áratugnum, hendi, fólki, hluta, sinnum, svæðinu, tíma, apríl</li>
      <li>NUM: tveimur, sex, þremur, 9., tíu, 28., einni, einum, fimm, fimmtíu</li>
      <li>PRON: því, sér, honum, sinni, sínum, þeim, þessum, henni, öðrum, engu</li>
      <li>PROPN: Bretlandi, Balkanskaga, Bandaríkjunum, Frakklandi, Grikklandi, Kyrrahafi, Rússlandi, Ítalíu, Alaska, Albaníu</li>
      <li>SCONJ: því</li>
      <li>VERB: afturkallaði, dvöldu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: innfæddra, Sameinuðu, bandarísks, frönsku, fyrstu, félagslegs, kínverska, lifandi, margra, nýja</li>
      <li>ADV: óvenju</li>
      <li>DET: hinna, hins, hinnar</li>
      <li>NOUN: ára, fólks, sögunnar, aldar, fjölda, fyrirtækisins, manns, ríkisins, ríkisstjórnarinnar, borgarinnar</li>
      <li>NUM: tveggja, þriggja, einnar, þrjátíu, fimm, sjö, tuttugu, tíu, átta</li>
      <li>PRON: þess, hans, þeirra, hennar, okkar, þessa, annars, sín, síns, þessara</li>
      <li>PROPN: Evrópu, Bandaríkjanna, Breta, Akkemenída, Frakka, Kínverja, Qing-keisaraveldisins, Tútmosar, Asíu, Egyptalands</li>
      <li>VERB: vara, ákveða</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: hægt, margir, fleiri, mikið, ótrúlegt, fleira, lifandi, ljóst, stór, auðvelt</li>
      <li>ADJ-Part: endurkjörinn</li>
      <li>ADP: við</li>
      <li>ADV: allt, meira, vafningalaust</li>
      <li>DET: Hin, aðrar, hinn, hið, þetta</li>
      <li>NOUN: fólk, maður, fjárfestar, fyrirtækið, milljónir, ríkisstjórnin, dæmi, eiginkona, forseti, fyrirtæki</li>
      <li>NOUN-Part: markaðir, orðið</li>
      <li>NUM: einn, fjórir, tvö, tíu, þrjú, Fjögur, níu, tvær, Tveir, ein</li>
      <li>PRON: hann, það, hún, ég, þetta, þeir, við, þau, þessi, hvað</li>
      <li>PROPN: Kínverjar, Bandaríkin, Bretland, Evrópubúar, Kristófer, Kólumbus, Anselmi, Donald, Filippus, George</li>
      <li>VERB: komið, notað, gert, notuð, orðin, farið, greint, litið, lýstur, sagt</li>
      <li>VERB-Part: komið, notað, gert, notuð, orðin, farið, greint, litið, lýstur, sagt</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: fyrsta, síðustu, fyrstu, meira, fleiri, meiri, síðasta, þriðja, fyrri, breska</li>
      <li>ADV: gríðarlega, meira</li>
      <li>NOUN: árið, áratugnum, svæðið, svæðinu, fyrirtækið, ríkisstjórnin, stríðinu, sögunnar, borginni, fyrirtækisins</li>
      <li>NUM: 9., 10., 19., 21., 28.</li>
      <li>PROPN: Addenbrooke-sjúkrahúsunum, Bandaríkjanna, Bandaríkjunum, Caplan, Fasteignastofnunin, Snowman, Vetrarháskóleikarnir</li>
      <li>VERB: fullmótað</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: hægt, margir, miklu, mikið, mörg, mikil, nýja, kleift, nýjar, ótrúlegt</li>
      <li>ADP: við</li>
      <li>ADV: mun, loks, vafningalaust, óvenju</li>
      <li>AUX: verði</li>
      <li>NOUN: ár, hluta, árum, ára, október, stað, öld, fólk, áhrif, fjölda</li>
      <li>PRON: sig, ýmissi</li>
      <li>PROPN: Akkemenída, Alejandra, Ameríkubúar, Blindleia, Durán, Herzl, Isner, Lamarr, Norður-Alsír, Papúa</li>
      <li>VERB: afturkallaði, afturkölluð, bundinn, bíði, búið, numdir, rannsakaðir, réttar, sannfærður, skipt</li>
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
      <li>ADJ: meira, fleiri, meiri, fyrri, fleira, hærri, lægra, síðari, eldri, frekari</li>
      <li>ADV: nær, meira</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: hægt, nýja, eigin, margir, miklu, mikið, mörg, þriðja, lifandi, mikil</li>
      <li>ADV: gríðarlega</li>
      <li>NOUN: Afköst, Upptökustjórar, aðalorsök, friðarins, heilaþroska, hvílustaður</li>
      <li>NUM: 9., 10., 19., 21., 28.</li>
      <li>VERB: bundinn, búið, réttar, sannfærður, skotinn, stafsett, undirbúinn, útlista, þakið, þekktir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: fyrsta, síðustu, fyrstu, síðasta, mesta, minnsta, besta, bestu, mestu, næsta</li>
      <li>ADV: næst</li>
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
      <li>VERB-Fin: Látið, heyrið</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ-Fin: fæst, stoltust</li>
      <li>ADP-Fin: undir</li>
      <li>AUX-Fin: er, var, voru, eru, hefur, hafa, hafði, höfðu, má, getur</li>
      <li>PROPN-Fin: Beust, Trump</li>
      <li>VERB-Fin: sagði, fór, varð, segir, kom, þarf, hafði, átti, gerði, tók</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: hafi, væri, myndi, sé, gæti, hefði, hefðu, séu, væru, gætu</li>
      <li>NOUN-Fin: hafi, hefðum</li>
      <li>VERB-Fin: ætti, hafi, aðhylltist, fái, kæmi, tæki, verði, vildi, yrði, berist</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Fin: stoltust</li>
      <li>ADJ-Part: endurkjörinn</li>
      <li>ADP-Fin: undir</li>
      <li>AUX-Fin: var, voru, hafði, höfðu, væri, myndi, gæti, hefði, hefðu, væru</li>
      <li>NOUN-Fin: hefðum</li>
      <li>NOUN-Part: markaðir, orðið</li>
      <li>VERB-Fin: sagði, fór, varð, hafði, kom, átti, gerði, tók, hélt, komu</li>
      <li>VERB-Part: komið, notað, gert, notuð, orðin, farið, greint, litið, lýstur, sagt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Fin: fæst</li>
      <li>AUX-Fin: er, eru, hefur, hafa, hafi, sé, má, getur, geta, séu</li>
      <li>NOUN-Fin: hafi</li>
      <li>PROPN-Fin: Beust, Trump</li>
      <li>VERB-Fin: segir, þarf, fer, vill, eiga, varðar, verður, hefur, stendur, virðist</li>
      <li>VERB-Part: leiðandi, syngjandi, varðandi, vaxandi, vonandi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Part: endurkjörinn</li>
      <li>ADP-Fin: undir</li>
      <li>AUX-Fin: er, var, voru, eru, hefur, hafa, hafði, höfðu, hafi, væri</li>
      <li>AUX-Inf: vera, hafa, geta</li>
      <li>AUX-Sup: verið</li>
      <li>NOUN-Fin: hafi, hefðum</li>
      <li>NOUN-Inf: dala, mótmæla</li>
      <li>NOUN-Part: markaðir, orðið</li>
      <li>PROPN-Fin: Trump</li>
      <li>VERB-Fin: sagði, fór, varð, segir, kom, þarf, hafði, átti, gerði, tók</li>
      <li>VERB-Inf: nota, gera, hafa, fá, koma, sjá, taka, draga, fara, finna</li>
      <li>VERB-Part: komið, notað, gert, leiðandi, notuð, orðin, farið, greint, litið, lýstur</li>
      <li>VERB-Sup: gert, valdið, haft, lagt, leitt, lokið, orðið, sagt, beðið, náð</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Fin: fæst, stoltust</li>
      <li>PROPN-Fin: Beust</li>
      <li>VERB-Fin: virðist, jókst, tókst, fannst, fæddist, finnst, hefst, hófst, lést, aðhylltist</li>
      <li>VERB-Inf: takast, ferðast, fylgjast, aukast, breytast, búast, notast, nálgast, sækjast, beinast</li>
      <li>VERB-Part: búist, krafist, vænst</li>
      <li>VERB-Sup: búist, aukist, barist, boðist, breyst, falist, ferðast, flust, gefist, gengist</li>
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
      <li>ADJ: serbneskan</li>
      <li>DET: þetta</li>
      <li>PRON: þetta, það, þessi, þessum, þessa, því, þessu, sú, þeim, þeirra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: allt</li>
      <li>DET: aðrar</li>
      <li>NUM: önnur</li>
      <li>PRON: allt, öðrum, engu, sama, einn, annað, aðrir, ekkert, hvert, allar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: hvað, hver, hverju, Hverjar, hvor</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADV: því, þá</li>
      <li>PRON: hann, það, því, hún, ég, þess, hans, þeir, sér, við</li>
      <li>SCONJ: því</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sína, sinni, sínum, sitt, sínu, sinn, sín, minn, sínar, síns</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADJ-Fin: stoltust</li>
      <li>AUX-Fin: hef, erum, getum, var, er, höfum, get, hafði, munum, skulum</li>
      <li>NOUN-Fin: hefðum</li>
      <li>PRON: ég, við, okkar, okkur, mig, mér, mín</li>
      <li>PROPN-Fin: Trump</li>
      <li>VERB-Fin: þurfum, held, verðum, fer, horfði, höldum, veit, vil, vildi, býst</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: getur</li>
      <li>PRON: þið, þú, ykkar, ykkur, þér</li>
      <li>VERB-Fin: Deilir, Látið, heyrið, tókuð, vilt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ-Fin: fæst</li>
      <li>ADP-Fin: undir</li>
      <li>AUX-Fin: er, var, voru, eru, hefur, hafa, hafði, höfðu, hafi, væri</li>
      <li>NOUN-Fin: hafi</li>
      <li>PROPN-Fin: Beust</li>
      <li>VERB-Fin: sagði, fór, varð, segir, hafði, kom, átti, þarf, gerði, tók</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>PROPN: Really, Love, You</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PunctSide</a>
    <ul>
      <li>Fin
        <ul>
          <li>PUNCT: “, .</li>
        </ul>
      </li>
      <li>Ini
        <ul>
          <li>PUNCT: „</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: vera.</li>
</ul>

<ul>
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: vera, hafa, geta, munu, mega, verða, skulu.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Nom (11)</li>
      <li>VERB--PRON-Nom (5)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (13)</li>
      <li>VERB-Fin--NOUN-Dat (9)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(samkvæmt) (1)</li>
      <li>VERB-Fin--NOUN-Nom (361)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Fin--PRON-Dat (11)</li>
      <li>VERB-Fin--PRON-Nom (261)</li>
      <li>VERB-Inf--NOUN-Acc (5)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--NOUN-Nom (11)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Inf--PRON-Nom (17)</li>
      <li>VERB-Part--NOUN-Acc (5)</li>
      <li>VERB-Part--NOUN-Acc-ADP(fyrir) (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(um) (1)</li>
      <li>VERB-Part--NOUN-Dat (8)</li>
      <li>VERB-Part--NOUN-Dat-ADP(í) (1)</li>
      <li>VERB-Part--NOUN-Nom (83)</li>
      <li>VERB-Part--PRON-Dat (3)</li>
      <li>VERB-Part--PRON-Nom (22)</li>
      <li>VERB-Sup--NOUN-Acc (2)</li>
      <li>VERB-Sup--NOUN-Dat (4)</li>
      <li>VERB-Sup--NOUN-Nom (71)</li>
      <li>VERB-Sup--PRON-Acc (1)</li>
      <li>VERB-Sup--PRON-Gen (1)</li>
      <li>VERB-Sup--PRON-Nom (38)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (2)</li>
      <li>VERB--NOUN-Dat (4)</li>
      <li>VERB--NOUN-Nom (1)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB-Fin--NOUN-Acc (252)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(ekki) (1)</li>
      <li>VERB-Fin--NOUN-Dat (53)</li>
      <li>VERB-Fin--NOUN-Gen (4)</li>
      <li>VERB-Fin--NOUN-Nom (17)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (36)</li>
      <li>VERB-Fin--PRON-Acc-ADP(við) (1)</li>
      <li>VERB-Fin--PRON-Dat (28)</li>
      <li>VERB-Fin--PRON-Gen (2)</li>
      <li>VERB-Fin--PRON-Nom (5)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Acc (149)</li>
      <li>VERB-Inf--NOUN-Dat (34)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(á) (1)</li>
      <li>VERB-Inf--NOUN-Gen (2)</li>
      <li>VERB-Inf--NOUN-Nom (4)</li>
      <li>VERB-Inf--PRON-Acc (19)</li>
      <li>VERB-Inf--PRON-Dat (8)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Acc-ADP(við) (1)</li>
      <li>VERB-Part--NOUN-Dat (2)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--NOUN-Nom (1)</li>
      <li>VERB-Part--PRON-Dat (1)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Sup--NOUN-Acc (51)</li>
      <li>VERB-Sup--NOUN-Dat (14)</li>
      <li>VERB-Sup--NOUN-Gen (1)</li>
      <li>VERB-Sup--PRON-Acc (9)</li>
      <li>VERB-Sup--PRON-Dat (10)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Dat (5)</li>
      <li>VERB-Fin--PRON-Dat (9)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Inf--NOUN-Dat (6)</li>
      <li>VERB-Inf--PRON-Dat (2)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>compound:prt</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>obl:arg</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>discourse</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
