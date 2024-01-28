---
layout: base
title:  'UD_Icelandic-IcePaHC'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Icelandic IcePaHC

Language: [Icelandic](/is/index.html) (code: `is`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.7 release.

The following people have contributed to making this treebank part of UD: Þórunn Arnardóttir, Hinrik Hafsteinsson, Einar Freyr Sigurðsson, Hildur Jónsdóttir, Kristín Bjarnadóttir, Anton Karl Ingason, Kristján Rúnarsson, Steinþór Steingrímsson, Joel C. Wallenberg, Eiríkur Rögnvaldsson.

Repository: [UD_Icelandic-IcePaHC](https://github.com/UniversalDependencies/UD_Icelandic-IcePaHC)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udis_icepahc213)<br />
Download all treebanks: [UD 2.13](/#download)

License: CC BY-SA 4.0

Genre: fiction, bible, nonfiction, legal

Questions, comments?
General annotation questions (either Icelandic-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Icelandic-IcePaHC/issues).
If you want to collaborate, please contact [thar&nbsp;(æt)&nbsp;hi&nbsp;•&nbsp;is, hinrik&nbsp;•&nbsp;hafst&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com, einar&nbsp;•&nbsp;freyr&nbsp;•&nbsp;sigurdsson&nbsp;(æt)&nbsp;arnastofnun&nbsp;•&nbsp;is].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | assigned by a program, not checked manually |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

UD_Icelandic-IcePaHC is a conversion of the [Icelandic Parsed Historical Corpus (IcePaHC)](https://linguist.is/icelandic_treebank/Icelandic_Parsed_Historical_Corpus_(IcePaHC)) to the Universal Dependencies scheme.

The conversion was done using [UDConverter](https://github.com/thorunna/UDConverter).



The Icelandic Parsed Historical Corpus (IcePaHC) is a one-million-word, diachronic corpus which includes 61 texts from the 12th to 21st centuries. These texts were originally manually parsed according to the Penn Parsed Corpora of Historical English (PPCHE) annotation scheme. These parsed texts were later automatically converted to the Universal Dependencies scheme to create UD_Icelandic-IcePaHC.

## Text categories

UD_Icelandic-IcePaHC contains the following main genres:
- **NAR**: Narratives (sagas, fiction)
- **REL**: Religious texts (bible, sermons)
- **SCI**: Science (linguistics, natural sciences, history)
- **BIO**: Biographical material (biographies, travelogues)
- **LAW**: Law texts

Further subclassification is reflected in the extended genre label. For example **NAR-SAG** means narrative-saga and **REL-BIB** means religious text-bible

Each sentence ID in UD-Icelandic-IcePaHC carries the following information:

```
1150.FIRSTGRAMMAR.SCI-LIN,1.1
```
- Publication year of the text (`1150`)
- Name of the text (`FIRSTGRAMMAR`)
- Text genre (`SCI-LIN`)
- Index within text (`1`)
- Index within file (`1`)

Using the sentence IDs within UD_Icelandic-IcePaHC, specific genres or periods can be extracted or filtered from the treebank CoNLL-U files.

## Data split

For further info on each text, see the [IcePaHC documentation](https://linguist.is/icelandic_treebank/Texts).

**TRAIN:**
- `1150.HOMILIUBOK.REL-SER`
- `1210.THORLAKUR.REL-SAG`
- `1250.STURLUNGA.NAR-SAG`
- `1260.JOMSVIKINGAR.NAR-SAG`
- `1270.GRAGAS.LAW-LAW`
- `1275.MORKIN.NAR-HIS`
- `1300.ALEXANDER.NAR-SAG`
- `1310.GRETTIR.NAR-SAG`
- `1325.ARNI.NAR-SAG`
- `1350.FINNBOGI.NAR-SAG`
- `1400.GUNNAR.NAR-SAG`
- `1400.VIGLUNDUR.NAR-SAG`
- `1450.ECTORSSAGA.NAR-SAG`
- `1450.JUDIT.REL-BIB`
- `1450.VILHJALMUR.NAR-SAG`
- `1480.JARLMANN.NAR-SAG`
- `1525.ERASMUS.NAR-SAG`
- `1540.NTJOHN.REL-BIB`
- `1593.EINTAL.REL-OTH`
- `1611.OKUR.REL-OTH`
- `1650.ILLUGI.NAR-SAG`
- `1659.PISLARSAGA.BIO-AUT`
- `1661.INDIAFARI.BIO-TRA`
- `1675.ARMANN.NAR-FIC`
- `1675.MAGNUS.BIO-OTH`
- `1675.MODARS.NAR-FIC`
- `1680.SKALHOLT.NAR-REL`
- `1725.BISKUPASOGUR.NAR-REL`
- `1790.FIMMBRAEDRA.NAR-SAG`
- `1791.JONSTEINGRIMS.BIO-AUT`
- `1830.HELLISMENN.NAR-SAG`
- `1835.JONASEDLI.SCI-NAT`
- `1859.HUGVEKJUR.REL-SER`
- `1861.ORRUSTA.NAR-FIC`
- `1882.TORFHILDUR.NAR-FIC`
- `1888.VORDRAUMUR.NAR-FIC`
- `1907.LEYSING.NAR-FIC`
- `1908.OFUREFLI.NAR-FIC`
- `1985.MARGSAGA.NAR-FIC`
- `1985.SAGAN.NAR-FIC`
- `2008.MAMMA.NAR-FIC`

**TEST:**
- `1150.FIRSTGRAMMAR.SCI-LIN`
- `1210.JARTEIN.REL-SAG`
- `1350.MARTA.REL-SAG`
- `1450.BANDAMENN.NAR-SAG`
- `1400.GUNNAR2.NAR-SAG`
- `1540.NTACTS.REL-BIB`
- `1628.OLAFUREGILS.BIO-TRA`
- `1745.KLIM.NAR-FIC`
- `1850.PILTUR.NAR-FIC`
- `1920.ARIN.REL-SER`

**DEV:**
- `1250.THETUBROT.NAR-SAG`
- `1350.BANDAMENNM.NAR-SAG`
- `1475.AEVINTYRI.NAR-REL`
- `1525.GEORGIUS.NAR-REL`
- `1630.GERHARD.REL-OTH`
- `1720.VIDALIN.REL-SER`
- `1888.GRIMUR.NAR-FIC`
- `1883.VOGGUR.NAR-FIC`
- `1902.FOSSAR.NAR-FIC`
- `2008.OFSI.NAR-SAG`


## Acknowledgments

This project was funded by The Strategic Research and Development Programme for Language Technology, grant no. 180020-5301. Thanks are due to Örvar Kárason, whose previous work was used as a basis for the conversion.

The Icelandic Parsed Historical Corpus (IcePaHC) is available at https://linguist.is/icelandic_treebank/Download and https://repository.clarin.is/repository/xmlui/handle/20.500.12537/62.

Morphological features were generated using ABLTagger, a PoS tagger for Icelandic, developed by Steinþór Steingrímsson, Örvar Kárason and Hrafn Loftsson and available [here](https://github.com/steinst/ABLTagger).

## References

```
@inproceedings{arnardottir-etal-2020-universal,
title = "A {U}niversal {D}ependencies Conversion Pipeline for a {P}enn-format Constituency Treebank",
author = "Arnard{\'o}ttir, {\TH}{\'o}runn and
Hafsteinsson, Hinrik and
Sigur{\dh}sson, Einar Freyr and
Bjarnad{\'o}ttir, Krist{\'\i}n and
Ingason, Anton Karl and
J{\'o}nsd{\'o}ttir, Hildur and
Steingr{\'\i}msson, Stein{\th}{\'o}r",
booktitle = "Proceedings of the Fourth Workshop on Universal Dependencies (UDW 2020)",
month = dec,
year = "2020",
address = "Barcelona, Spain (Online)",
publisher = "Association for Computational Linguistics",
url = "https://www.aclweb.org/anthology/2020.udw-1.3",
pages = "16--25",
abstract = "The topic of this paper is a rule-based pipeline for converting constituency treebanks based on the Penn Treebank format to Universal Dependencies (UD). We describe an Icelandic constituency treebank, its annotation scheme and the UD scheme. The conversion is discussed, the methods used to deliver a fully automated UD corpus and complications involved. To show its applicability to corpora in different languages, we extend the pipeline and convert a Faroese constituency treebank to a UD corpus. The result is an open-source conversion tool, published under an Apache 2.0 license, applicable to a Penn-style treebank for conversion to a UD corpus, along with the two new UD corpora.",
}

@inproceedings{arnardottir-etal-2023-evaluating,
title = "Evaluating a {U}niversal {D}ependencies Conversion Pipeline for {I}celandic",
author = "Arnard{\'o}ttir, {\TH}{\'o}runn and
Hafsteinsson, Hinrik and
Jasonarson, Atli and
Ingason, Anton and
Steingr{\'\i}msson, Stein{\th}{\'o}r",
editor = {Alum{\"a}e, Tanel and
Fishel, Mark},
booktitle = "Proceedings of the 24th Nordic Conference on Computational Linguistics (NoDaLiDa)",
month = may,
year = "2023",
address = "T{\'o}rshavn, Faroe Islands",
publisher = "University of Tartu Library",
url = "https://aclanthology.org/2023.nodalida-1.69",
pages = "698--704",
abstract = "We describe the evaluation and development of a rule-based treebank conversion tool, UDConverter, which converts treebanks from the constituency-based PPCHE annotation scheme to the dependency-based Universal Dependencies (UD) scheme. The tool has already been used in the production of three UD treebanks, although no formal evaluation of the tool has been carried out as of yet. By manually correcting new output files from the converter and comparing them to the raw output, we measured the labeled attachment score (LAS) and unlabeled attachment score (UAS) of the converted texts. We obtain an LAS of 82.87 and a UAS of 87.91. In comparison to other tools, UDConverter currently provides the best results in automatic UD treebank creation for Icelandic.",
}
```


# Statistics of UD Icelandic IcePaHC

## POS Tags

[ADJ](is_icepahc-pos-ADJ.html) – [ADP](is_icepahc-pos-ADP.html) – [ADV](is_icepahc-pos-ADV.html) – [AUX](is_icepahc-pos-AUX.html) – [CCONJ](is_icepahc-pos-CCONJ.html) – [DET](is_icepahc-pos-DET.html) – [INTJ](is_icepahc-pos-INTJ.html) – [NOUN](is_icepahc-pos-NOUN.html) – [NUM](is_icepahc-pos-NUM.html) – [PART](is_icepahc-pos-PART.html) – [PRON](is_icepahc-pos-PRON.html) – [PROPN](is_icepahc-pos-PROPN.html) – [PUNCT](is_icepahc-pos-PUNCT.html) – [SCONJ](is_icepahc-pos-SCONJ.html) – [VERB](is_icepahc-pos-VERB.html) – [X](is_icepahc-pos-X.html)

## Features

[Case](is_icepahc-feat-Case.html) – [Definite](is_icepahc-feat-Definite.html) – [Degree](is_icepahc-feat-Degree.html) – [Foreign](is_icepahc-feat-Foreign.html) – [Gender](is_icepahc-feat-Gender.html) – [Mood](is_icepahc-feat-Mood.html) – [Number](is_icepahc-feat-Number.html) – [NumType](is_icepahc-feat-NumType.html) – [Person](is_icepahc-feat-Person.html) – [PronType](is_icepahc-feat-PronType.html) – [Tense](is_icepahc-feat-Tense.html) – [VerbForm](is_icepahc-feat-VerbForm.html) – [Voice](is_icepahc-feat-Voice.html)

## Relations

[acl](is_icepahc-dep-acl.html) – [acl:relcl](is_icepahc-dep-acl-relcl.html) – [advcl](is_icepahc-dep-advcl.html) – [advmod](is_icepahc-dep-advmod.html) – [amod](is_icepahc-dep-amod.html) – [appos](is_icepahc-dep-appos.html) – [aux](is_icepahc-dep-aux.html) – [case](is_icepahc-dep-case.html) – [cc](is_icepahc-dep-cc.html) – [ccomp](is_icepahc-dep-ccomp.html) – [compound:prt](is_icepahc-dep-compound-prt.html) – [conj](is_icepahc-dep-conj.html) – [cop](is_icepahc-dep-cop.html) – [csubj](is_icepahc-dep-csubj.html) – [dep](is_icepahc-dep-dep.html) – [det](is_icepahc-dep-det.html) – [discourse](is_icepahc-dep-discourse.html) – [dislocated](is_icepahc-dep-dislocated.html) – [expl](is_icepahc-dep-expl.html) – [fixed](is_icepahc-dep-fixed.html) – [flat:foreign](is_icepahc-dep-flat-foreign.html) – [flat:name](is_icepahc-dep-flat-name.html) – [iobj](is_icepahc-dep-iobj.html) – [mark](is_icepahc-dep-mark.html) – [nmod](is_icepahc-dep-nmod.html) – [nmod:poss](is_icepahc-dep-nmod-poss.html) – [nsubj](is_icepahc-dep-nsubj.html) – [nummod](is_icepahc-dep-nummod.html) – [obj](is_icepahc-dep-obj.html) – [obl](is_icepahc-dep-obl.html) – [parataxis](is_icepahc-dep-parataxis.html) – [punct](is_icepahc-dep-punct.html) – [root](is_icepahc-dep-root.html) – [vocative](is_icepahc-dep-vocative.html) – [xcomp](is_icepahc-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 44029 sentences, 983671 tokens and 985049 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 109930 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 590 types of words that contain both letters and punctuation. Examples: kap., kongl., W., Jóh., Mag., Matth., Efra-Fossi, Kór., Gull-Haraldur, N., Neðra-Fossi, hndr., mr., Skegg-Broddi, etc., Lúk., rd., Prov., Dr., Jer., m., st., Gen., Gull-Harald, Tím., Devt., Dönsku-húsum, Efes., Heb., III., Matt., Músa-Bölverkur, Pét., Tít., b., c., ix., rdr., Akt., D., Fiðlu-Hansa, Hörða-Knúts, II., Jesaj., Job., Kor., O-já, Róm., S., Sálm.</li>
</ul>

<ul>
<li>This corpus contains 1377 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 242 types of multi-word tokens. Examples: skaltu, ertu, muntu, viltu, láttu, máttu, vertu, attú, veistu, áttu, sjáðu, heyrðu, farðu, þarftu, heldurðu, komdu, varstu, líttu, stattu, segðu, þeygi, gerðu, kanntu, geturðu, fórstu, hefurðu, gefðu, gættu, hafðu, manstu, sértu, sérðu, þars, þóttú, færðu, taktu, varastu, sendu, varaðu, Gakktu, Gjörðu, ferðu, fáðu, haltu, hugsaðu, hættu, koddu, minnstu, mundu, settu.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 18 word types tagged as particles (PART): Einninn, Einungis, alleinasta, at, atð, að, aðeins, bara, ein, eina, einasta, einir, einkum, einmitt, einu, eitt, jafnvel, nema</li>
</ul>

<ul>
<li>This corpus contains 92 lemmas tagged as pronouns (PRON): _, allur, annar, annars, annarstaðar, annaðhvort, báðir, einhver, einn, eitthvað, ekkert, enginn, flestallur, hann, hans, hinn, honum, hvatki, hvað, hvaða, hver, hvergi, hvern, hvert, hvor, hvort, hvortveggja, hvorugur, hví, hvílíkur, hvívetna, hún, lítill, maður, mer, minn, mit, miður, mér, neinn, nokkur, okkar, okkur, samur, sig, sinn, sjá, sjálfur, slíkur, sodda, soddan, soddur, sumur, svoddan, sá, sér, sérhver, vera, vettugi, við, viðlíka, viðlíkur, vor, vér, ykkar, yðar, yðarri, yður, yðvar, álíka, ég, ér, öðrumegin, ýmis, þ., þann, þar, þau, það, þeir, þeirra, þessi, þetta, þinn, því, þvílíka, þvílíkur, þá, þær, þér, þórólfur, þú</li>
</ul>

<ul>
<li>This corpus contains 156 lemmas tagged as determiners (DET): afarmikill, all, allfár, allir, alllítill, allmargur, allmikill, allnokkur, allralítill, allskonar, allskyns, allur, annar, annarhvor, annaðhvort, báðir, báðumegin, bæði, dálitill, dálítill, dálítið, einhver, einhvernveginn, einhverskonar, einhversstaðar, einn, eins, eitthvað, ekkert, ekki, enginn, fjölmargur, fleir, flestallur, flestir, flestur, fáeinir, fáeinn, fáir, fár, gervallur, geysimikill, gjörvallur, hann, helgur, hin, hinn, hinumegin, hitt, hlutur, hotvetna, hvar, hvað, hvaða, hvaðvetna, hver, hveregur, hvergi, hverigra, hverigur, hvernig, hverski, hverskonar, hverskyns, hversvetna, hvert, hveruga, hvetvetna, hvevetna, hvor, hvorgi, hvorigur, hvorki, hvorngi, hvort, hvortki, hvortveggja, hvorugur, hvorumegin, hvílíkur, hvívetna, hálf, hálfur, hún, inn, inur, jafnlítill, jafnmargur, jafnmikill, jafnmikið, langur, lítill, lítið, lítt, manngi, mannmargur, margur, megn, meira, meiri, mestallur, mestur, mikill, mikið, minni, neinn, nekkver, nokkur, nokkurntíma, nokkursstaðar, nokkurur, nokkuð, né, oflítill, ofmargur, ofmikill, ofurlítill, sa, sinn, sitthver, sjá, smár, snjámikill, stórmikill, sumpart, sumur, svolítill, sá, sérhver, sérhvor, síst, síðri, síður, varla, velflestur, velmargur, vettergi, vettugi, ófár, ógnarmargur, ótalmargur, öllumegin, örfár, örlítill, ýmis, ýmislegur, þau, það, þeir, þess, þessháttar, þessi, því, þvílíkur, þá, þær</li>
</ul>

<ul>
<li>Out of the above, 42 lemmas occurred sometimes as PRON and sometimes as DET: allur, annar, annaðhvort, báðir, einhver, einn, eitthvað, ekkert, enginn, flestallur, hann, hinn, hvað, hvaða, hver, hvergi, hvert, hvor, hvort, hvortveggja, hvorugur, hvílíkur, hvívetna, hún, lítill, neinn, nokkur, sinn, sjá, sumur, sá, sérhver, vettugi, ýmis, þau, það, þeir, þessi, því, þvílíkur, þá, þær</li>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as auxiliaries (AUX): blífa, fá, geta, hafa, kunna, mega, munu, skulu, vera, verða, vilja</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as AUX and sometimes as VERB: blífa, fá, geta, hafa, kunna, mega, munu, skulu, vera, verða, vilja</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>ADJ: verður, var, fær, nær, ríkir, sannast, átti, sanna, syndgir, varir</li>
    <li>ADP: á, fyr, nær, eptir, Meður, gegni, héreftir, næst, so, sér</li>
    <li>ADV: nær, heldur, snart, helst, fór, kann, aldri, braut, fyr, mátti</li>
    <li>AUX: var, er, voru, hafði, væri, eru, mun, hefði, sé, hefir</li>
    <li>CCONJ: eður, hverki, Hvörki, Né, en, heldur</li>
    <li>DET: sá, engi, öngum, fá, eð, Nokkuru, inna, minna, Meir, Sé</li>
    <li>INTJ: Hei, Vei, duddu, Áví, Ó, Óhó</li>
    <li>NOUN: vilja, mætti, leið, friðar, kosti, lifnaði, liði, miskunnar, skildi, hóf</li>
    <li>NUM: Xii, fjörutigi, iiii, iiijr, vii</li>
    <li>PRON: voru, sér, vorum, eg, yðrum, vorar, yðrar, yðrir, órar, hvör</li>
    <li>PROPN: Vali, sankti, Valdi, Georgíus, Maii, Majst, guði, Beljus, Belíus, Brúni</li>
    <li>PUNCT: "</li>
    <li>SCONJ: er, eð, at, eru, hvörri, hvört</li>
    <li>VERB: sagði, segir, kom, mælti, fór, tók, varð, gekk, lét, hafði</li>
    <li>X: Majst, Edimus, Item, Sicut, beati, nostra, nostri, omnium, patri, sankti</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>ADJ: sanna, breiða, helga, fegra, fullkomna, margfalda, yðra, Verra, auðga, bera</li>
    <li>ADP: fyr</li>
    <li>ADV: ske, framast, einast, fara, fá, skjótast, æfinlega, aldri, alloftast, fyrirkoma</li>
    <li>AUX: vera, hafa, verða, vilja, geta, mega, mundu, fá, hafast, hefi</li>
    <li>DET: engi, minna, sá, fá, meir, sjá, þenna, Margs, eð, ina</li>
    <li>NOUN: skaða, vilja, anda, sjá, loka, líkama, skála, sóma, Trúa, athuga</li>
    <li>PRON: yðra, sinna, Hina, hvörja, minna, óra, þeira</li>
    <li>PROPN: anda, Ótta, Antiokkia, Ermanus, Flegða, Loka, Mella, Pjatta, Syrpa, draga</li>
    <li>SCONJ: nema</li>
    <li>VERB: fara, segja, sjá, taka, koma, láta, ganga, gera, halda, vita</li>
    <li>X: Ná, hyggja, libra, nostra, sigla, tertia</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: vænst, leitt, kunnigt, auðsýnt, skyldir, sýnt, auglýstur, beint, dælt, fallin</li>
    <li>ADP: útgefið</li>
    <li>ADV: háttað, minnst, predikað, einnin, gjör, hverninn, komnir, Einatt, beint, breitt</li>
    <li>AUX: haft, hafður, hafðir, verið, hafandi, höfð, skylduð, hafið, getið, hafðar</li>
    <li>CCONJ: annaðhvert, bæði, hvörki</li>
    <li>DET: minnst, engi, Ekkert, hitt, nakkvað, nokkora, nökkvað</li>
    <li>NOUN: búandi, orðið, liðið, náð, gerð, ráðið, byggð, sæmd, talið, boðið</li>
    <li>PRON: yðvart, eg, okkart, sér, vor, vorra</li>
    <li>PROPN: Refur, Fiður, Herjuð, Mundt, Móður</li>
    <li>SCONJ: hvört</li>
    <li>VERB: kominn, sagt, komið, orðinn, komnir, komin, kallaður, getið, gert, farið</li>
    <li>X: Majst, regent, regerandi</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>ADJ: áminnst, greint, hlýðið, hrært, kunnigt, kært, lagt, leitt, ljósan, mein</li>
    <li>ADP: fyr, þótt</li>
    <li>ADV: fengið, gerst, gjör, snarast, aldri, alltið, brutt, dárað, einnin, gengið</li>
    <li>AUX: verið, haft, getað, mátt, viljað, getið, munt, fengið, hafið, munuð</li>
    <li>DET: engi, hitt, hvört, minnst, nakkvað, nökkut</li>
    <li>INTJ: Vei</li>
    <li>NOUN: náð, búið, sótt, styrkt, Dýrð, Glott, Verk, erfð, fagnað, klæði</li>
    <li>PRON: hitt, hvör, yðart</li>
    <li>PROPN: Ríkilað, Majst</li>
    <li>PUNCT: "</li>
    <li>VERB: komið, séð, fengið, gert, sagt, tekið, farið, orðið, gjört, gefið</li>
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
      <li>ADJ: sömu, fyrstu, góða, góð, hægri, góðar, vinstri, eigin, heilagri, heilagrar</li>
      <li>ADJ-Part: alklædd, brenndar, bölvuð, erfið, eygð, fallin, fegin, ferðbúnar, grafnar, haldin</li>
      <li>ADP: millum, sakir, eptir, fyr, handa, und, Kringum, fraraan, héreftir, innar</li>
      <li>ADV: þá, einnin, braut, hvörsu, einasta, mikla, fyrri, ein, þannin, Sannlega</li>
      <li>ADV-Part: einnin, festar, ofraðar, skorin, tíðkaðar</li>
      <li>AUX: skyldu, vera, vóru, vilda, höfð, skylda, hefir, hafðar, skyldum, Vil</li>
      <li>AUX-Part: höfð, hafðar, Munt, hafða, meguð, máttuð</li>
      <li>CCONJ: eður, bæði, annaðhvurt, eða</li>
      <li>DET: sú, þessa, þessi, allar, þeirri, þá, alla, eina, þær, þessari</li>
      <li>INTJ: hana, bittinú, du, ææææææ</li>
      <li>NOUN: leið, hendur, dóttur, hendi, nótt, stund, von, höndum, kona, konu</li>
      <li>NOUN-Part: gerð, byggð, framkvæmdar, sæmd, Dirfð, dáð, felldar, fjarlægðar, frægð, gerðar</li>
      <li>NUM: tvær, þrjár, hvorirtveggju, sex, fimm, tveim, tólf, fjórar, sjö, tveggja</li>
      <li>PART: ein, eina</li>
      <li>PRON: hún, henni, hennar, hana, sér, sína, sinni, þær, mín, þeirra</li>
      <li>PRON-Part: vorra</li>
      <li>PROPN: Maríu, Gróa, Sigríður, María, Órækja, Jerúsalem, Gróu, Ragnhildur, bylgja, Sigríði</li>
      <li>PROPN-Part: Herjuð</li>
      <li>PUNCT: "</li>
      <li>SCONJ: hverja, hverjar, hver, hvorrar, ein, hvaða, hvor, hvörju, hvörjum, hvörn</li>
      <li>VERB: komin, búin, orðin, leið, sett, kölluð, haldin, sagða, tekin, lifandi</li>
      <li>VERB-Part: komin, orðin, kölluð, sett, haldin, tekin, farin, nefnd, gefin, komnar</li>
      <li>X: trinitatis, sankti, Exordium, Item, Jerúsalem, Martilla, Miraculum, Sicut, brevíaríum, sacramentum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: góður, sama, gamall, sæla, dauður, góðan, sami, góðum, góðir, góða</li>
      <li>ADJ-Part: skyldir, auglýstur, genginn, mægður, ofsóttur, ráðinn, Lofaður, artaðir, auðmýktur, beinir</li>
      <li>ADP: fyr, millum, viður, eptir, ór, Milli, eftur, fyrir, fyrur, fá</li>
      <li>ADV: þá, aldri, einn, hverninn, fyrri, allir, mikill, aptur, hvörninn, aldregi</li>
      <li>ADV-Part: gjör, hverninn, komnir, fyr, gerr, kominn, liðinn</li>
      <li>AUX: mun, vilja, var, skyli, hafður, muni, hafðir, mundi, vóru, munir</li>
      <li>AUX-Part: hafður, hafðir, mundu, hafinn, munduð, værir</li>
      <li>CCONJ: Eður, bæði, hvörki, hverki, Hvatki, báðir, hvegi, hvortki, nema</li>
      <li>CCONJ-Part: bæði</li>
      <li>DET: sá, einn, þann, allir, þeim, hinn, öllum, alla, þessum, þessi</li>
      <li>INTJ: damm, Heill, fjandi, maður, Óvei, óóóóó</li>
      <li>NOUN: menn, maður, konungur, manna, biskup, mönnum, dag, tíma, mann, stað</li>
      <li>NOUN-Part: Kotungur, leónshvelpur, safnaður, samsamaður, óræktir, þrotinn</li>
      <li>NUM: tveir, tvo, þrír, tólf, þrjá, fimm, sex, fjórir, sjö, tíu</li>
      <li>PART: Einninn, einasta, einir</li>
      <li>PRON: hann, þeir, honum, hans, sér, þeim, þeirra, sig, sínum, sinn</li>
      <li>PRON-Part: sér</li>
      <li>PROPN: guð, guðs, herra, jesús, guði, drottinn, jesú, Illugi, Jón, Finnbogi</li>
      <li>PROPN-Part: Refur, Fiður, Móður</li>
      <li>SCONJ: hvor, hver, hverjum, hvern, hverjir, hvorn, hvers, hvorum, er, hvatki</li>
      <li>VERB: kominn, orðinn, komnir, búinn, kallaður, segjandi, farinn, borinn, settur, sá</li>
      <li>VERB-Part: kominn, orðinn, komnir, kallaður, farinn, borinn, settur, tekinn, nefndur, sendur</li>
      <li>X: sankti, Ektor, Trankival, sanktus, Darii, Alexandrum, domini, Assyria, Vidfraktus, Alexandri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: gott, sama, satt, betra, illt, góðu, nóg, sönnu, fyrsta, vísu</li>
      <li>ADJ-Part: vænst, leitt, kunnigt, auðsýnt, sýnt, beint, dælt, nýtt, stillt, Bezt</li>
      <li>ADP: millum, alls, fyr, fyri, ór, því, gagnvert, gögnum, kringis, það</li>
      <li>ADP-Part: útgefið</li>
      <li>ADV: hvað, mikið, langt, aldregi, því, hart, eitt, jafnsnart, allt, eina</li>
      <li>ADV-Part: háttað, minnst, predikað, Einatt, beint, breitt, flutt, greitt, hegat, hliðhalt</li>
      <li>AUX: em, haft, hafið, var, vilið, verið, myni, skylduð, vil, haf</li>
      <li>AUX-Part: haft, verið, skylduð, hafið, getið, höfð, munduð, Skuluð, haf, hafð</li>
      <li>CCONJ: bæði, hvörki, hverki, annað, annaðhvert, g, hvatki, hvortki, hvörgi, ok</li>
      <li>CCONJ-Part: annaðhvert, hvörki</li>
      <li>DET: þetta, allt, það, þessu, því, öllu, eitt, mikið, ekkert, nokkuð</li>
      <li>DET-Part: minnst, engi, Ekkert, hitt, nakkvað, nokkora, nökkvað</li>
      <li>INTJ: fokk, bússí, Æ, óvei</li>
      <li>NOUN: orð, ráð, hjarta, landi, mál, ríki, skip, líf, nafni, orðum</li>
      <li>NOUN-Part: orðið, liðið, náð, ráðið, talið, boðið, lokið, sætt, sótt, Okið</li>
      <li>NUM: tvö, þrjú, sex, fimm, fjögur, sjö, tólf, hálft, hundrað, tíu</li>
      <li>PART: einu, eitt</li>
      <li>PRON: það, því, þess, hvað, þau, sitt, annað, þeim, sínu, þeirra</li>
      <li>PRON-Part: yðvart, eg, okkart, vor</li>
      <li>PROPN: Íslandi, Íslands, Skálholti, helvíti, alþingi, Barði, Kaupinhafn, helvítis, Skálholt, Englandi</li>
      <li>PROPN-Part: Mundt</li>
      <li>PUNCT: "</li>
      <li>SCONJ: það, hvert, hvort, hvört, hver, hverju, hvör, em, er, hvors</li>
      <li>SCONJ-Part: hvört</li>
      <li>VERB: sagt, komið, búið, orðið, getið, farið, gert, mælt, gjört, tekið</li>
      <li>VERB-Part: sagt, komið, getið, gert, farið, mælt, orðið, tekið, talað, gjört</li>
      <li>X: Trankival, domini, Majst, Vernakíus, kalendas, Holofernis, sanktus, Kapitulum, evangelium, nostri</li>
      <li>X-Part: Majst, regent</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: góðum, góðir, góðar, góð, sömu, stór, bestu, góðra, heilagra, fyrstu</li>
      <li>ADJ-Fin: helga, syndgum, bera, blessuðu, göfgum, mæta, réttu, sanna, útvöldu, Nakið</li>
      <li>ADJ-Part: skyldir, artaðir, beinir, bilaðir, borin, brenndar, búin, drukknir, fallin, ferðbúnar</li>
      <li>ADP: við, millum, eptir, fyr, sakir, handa, gögnum, Kringum, eftir, héreftir</li>
      <li>ADP-Fin: yðrum</li>
      <li>ADV: þá, allir, fyrri, einnin, marga, margar, aldregi, fleiri, einir, margir</li>
      <li>ADV-Fin: forðum, koma, fóru, hvörsu, skjótast, Hverru, berjast, enda, fengust, ferðast</li>
      <li>ADV-Part: komnir, festar, flutt, fyr, ofraðar, tíðkaðar, þykkt</li>
      <li>AUX: voru, eru, hafa, höfðu, munu, skyldu, væru, vildu, skulum, mundu</li>
      <li>AUX-Fin: voru, eru, hafa, höfðu, munu, skyldu, væru, vildu, skulum, mundu</li>
      <li>AUX-Part: hafðir, skylduð, hafðar, höfð, munduð, mundu, Skuluð, höfðuð, munuð, mynduð</li>
      <li>CCONJ: bæði, hvörki, hverki, báðir, eða, hvörgi</li>
      <li>CCONJ-Fin: hverki</li>
      <li>CCONJ-Part: bæði</li>
      <li>DET: allir, öllum, þeim, alla, allra, þau, öll, margir, allar, þessi</li>
      <li>DET-Fin: engi, öngum, fá, inna, minna, Nokkuru, báðu, hvörjum, þenna</li>
      <li>DET-Part: nokkora</li>
      <li>INTJ: du, Æ</li>
      <li>NOUN: menn, manna, mönnum, orð, bræður, orðum, hendur, hluti, höndum, daga</li>
      <li>NOUN-Fin: vilja, anda, flugu, komu, stundu, skyldu, upprisu, yðrum, Sverðið, andskota</li>
      <li>NOUN-Part: framkvæmdar, alin, felldar, fjarlægðar, gerðar, hafnar, lagðar, metnaðar, rifin, sæmd</li>
      <li>NUM: tveir, tvo, tólf, fimm, sex, tvö, þrír, þrjá, sjö, tvær</li>
      <li>NUM-Fin: Xii, fjörutigi, iiii, vii</li>
      <li>PART: einir</li>
      <li>PRON: þeir, þeim, þeirra, vér, oss, þau, yður, þér, við, sínum</li>
      <li>PRON-Fin: voru, vorum, yðrum, eg, sinna, yðra, hvörjum, hvörra, hvorju, hvörja</li>
      <li>PRON-Part: sér, vor</li>
      <li>PROPN: gyðinga, gyðingar, Hólum, gyðingum, Hellismenn, grikkir, Georgíum, júðar, himnum, Bessastöðum</li>
      <li>PROPN-Fin: Guddu, Gálu, Senda, Snarinefja, Vamba, drottna</li>
      <li>PUNCT: "</li>
      <li>PUNCT-Fin: "</li>
      <li>SCONJ: hverjar, hverjir, hver, er, eru, hvaða, hverja, hvör, hvörjum</li>
      <li>SCONJ-Fin: eru</li>
      <li>VERB: komu, fóru, gengu, sögðu, tóku, urðu, koma, höfðu, komnir, sáu</li>
      <li>VERB-Fin: komu, fóru, gengu, sögðu, tóku, urðu, koma, höfðu, sáu, riðu</li>
      <li>VERB-Part: komnir, komin, kallaðir, settir, teknir, sendir, orðnir, farnir, sett, nefndir</li>
      <li>X: sankti, Georgíum, Kapitulum, Alexandrum, Miraculum, delictum, privilegium, sanctorum, Exordium, Taraskonum</li>
      <li>X-Fin: Item, nostra, omnium, statuta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: sama, gott, satt, góða, góður, fyrsta, þriðja, heilaga, sæla, gamall</li>
      <li>ADJ-Fin: verður, var, fær, nær, ríkir, sannast, átti, syndgir, varir, fegri</li>
      <li>ADJ-Part: vænst, leitt, kunnigt, auðsýnt, sýnt, auglýstur, beint, dælt, genginn, mægður</li>
      <li>ADP: á, fyr, alls, viður, eptir, nær, ór, fyri, því, Meður</li>
      <li>ADP-Fin: á, fyr, nær, eptir, Meður, gegni, héreftir, næst, so, sér</li>
      <li>ADP-Part: útgefið</li>
      <li>ADV: hvað, aldri, þá, nær, einn, einnin, heldur, hverninn, einasta, fyrri</li>
      <li>ADV-Fin: nær, heldur, snart, helst, fór, kann, aldri, braut, fyr, mátti</li>
      <li>ADV-Part: háttað, minnst, predikað, einnin, gjör, hverninn, Einatt, beint, breitt, gerr</li>
      <li>AUX: var, er, hafði, væri, mun, hefði, sé, hefir, hefur, skal</li>
      <li>AUX-Fin: var, er, hafði, væri, mun, hefði, sé, hefir, hefur, skal</li>
      <li>AUX-Part: haft, hafður, verið, höfð, hafið, getið, Munt, haf, hafinn, hafð</li>
      <li>CCONJ: eður, hvörki, hverki, bæði, annað, hvatki, hvortki, Né, annaðhvert, annaðhvurt</li>
      <li>CCONJ-Fin: eður, hverki, Hvörki, Né, en, heldur</li>
      <li>CCONJ-Part: annaðhvert, hvörki</li>
      <li>DET: þetta, sá, allt, einn, það, þann, þessu, hinn, þessi, þessa</li>
      <li>DET-Fin: sá, engi, eð, Meir, Nokkuru, Sé, einkis, einnrar, engvan, fæstu</li>
      <li>DET-Part: minnst, engi, Ekkert, hitt, nakkvað, nökkvað</li>
      <li>INTJ: bússí, fokk, hana, Hei, bittinú, damm, Óhó, óvei, Heill, Vei</li>
      <li>INTJ-Fin: Hei, Vei, duddu, Áví, Ó, Óhó</li>
      <li>NOUN: maður, konungur, biskup, dag, mann, stað, kóngur, tíma, herra, föður</li>
      <li>NOUN-Fin: mætti, leið, friðar, kosti, lifnaði, liði, miskunnar, skildi, hóf, kostar</li>
      <li>NOUN-Part: orðið, liðið, náð, gerð, ráðið, byggð, talið, boðið, lokið, sæmd</li>
      <li>NUM: hálft, hvorirtveggju, hvorttveggja, hálfan, hálfu, hundrað, hálfa, hvorutveggja, hálfs, iij</li>
      <li>NUM-Fin: iiijr</li>
      <li>PART: einu, Einninn, ein, eina, einasta, eitt</li>
      <li>PRON: hann, það, því, þú, eg, ég, honum, hans, hún, mér</li>
      <li>PRON-Fin: sér, eg, vorar, yðrar, yðrir, órar, hvör, hver, hvörja, hvörs</li>
      <li>PRON-Part: yðvart, eg, okkart, vorra</li>
      <li>PROPN: guð, guðs, herra, jesús, guði, drottinn, jesú, Illugi, Jón, Finnbogi</li>
      <li>PROPN-Fin: Vali, sankti, Valdi, Georgíus, Maii, Majst, guði, Beljus, Belíus, Brúni</li>
      <li>PROPN-Part: Refur, Fiður, Herjuð, Mundt, Móður</li>
      <li>PUNCT: "</li>
      <li>SCONJ: það, er, hvert, hvor, hvört, hvort, hver, eð, hverja, hverjum</li>
      <li>SCONJ-Fin: er, eð, at, hvörri, hvört</li>
      <li>SCONJ-Part: hvört</li>
      <li>VERB: sagði, segir, kom, mælti, fór, tók, varð, gekk, lét, hafði</li>
      <li>VERB-Fin: sagði, segir, kom, mælti, fór, tók, varð, gekk, lét, hafði</li>
      <li>VERB-Part: kominn, sagt, komið, orðinn, kallaður, komin, getið, gert, farið, mælt</li>
      <li>X: Trankival, domini, Majst, Ektor, sanktus, Vernakíus, sankti, Anno, Darii, trinitatis</li>
      <li>X-Fin: Majst, Edimus, Sicut, beati, nostri, patri, sankti</li>
      <li>X-Part: Majst, regent</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: sama, góða, gott, góðan, satt, þriðja, sæla, stóra, sömu, heilaga</li>
      <li>ADJ-Part: borin, bættan, endurleystan, fyrra, innifaldar, leifðan, léttan, nefnda, samlíkt, slétt</li>
      <li>ADP: fyr, sakir, eptir, ór, fyri, kringis, tíl, und, utanfyrir, þvert</li>
      <li>ADV: þá, fyrri, mikið, einasta, mikla, aldregi, hvað, mikinn, eina, marga</li>
      <li>ADV-Part: hverninn, létt</li>
      <li>AUX: skyldu, em, vilja, vóru, vera, vilda, mun, hafið, væra, hefir</li>
      <li>AUX-Part: mundu, hafða</li>
      <li>CCONJ: bæði, hvörki, hverki, annað, eður, hvortki, nema</li>
      <li>CCONJ-Part: hvörki</li>
      <li>DET: þetta, þann, alla, það, allt, þá, þessa, einn, allan, eitt</li>
      <li>DET-Part: engi</li>
      <li>INTJ: hana, damm, du, fokk, Æ, óvei</li>
      <li>NOUN: menn, dag, mann, orð, tíma, son, land, leið, ráð, hendur</li>
      <li>NOUN-Part: alin</li>
      <li>NUM: tvo, þrjá, tvö, þrjú, sex, tvær, tólf, fimm, fjóra, sjö</li>
      <li>PART: einasta, eitt</li>
      <li>PRON: það, hann, mig, sig, sína, sinn, hana, þig, sitt, þá</li>
      <li>PRON-Part: vorra</li>
      <li>PROPN: guð, jesúm, Þorlák, Illuga, Þorstein, drottin, herra, jesú, Jón, Finnboga</li>
      <li>PUNCT: "</li>
      <li>SCONJ: það, hverja, hvern, hvert, hvorn, em, hvaða, hverjar, hvört</li>
      <li>VERB: búið, orðið, lifandi, sagða, gjört, heitið, boðið, lagðan, lifanda, blessaða</li>
      <li>VERB-Part: gert, sagða, gerða, birt, talað, getið, keypt, komna, ráðið, sendan</li>
      <li>X: trinitatis, Jesúm, Kristum, Anno, Bethaniam, Domini, Jerúsalem, sankti, Alexandríam, Apologiam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: sama, góðum, góðu, sönnu, fyrstu, löngu, vísu, nýju, sömu, stórum</li>
      <li>ADP: millum, fyr, því, gögnum, Kringum, eptir, fá, miðli, sinnum, sökum</li>
      <li>ADV: aldri, því, einum, hvörsu, miklu, aldregi, braut, stórum, einu, miklum</li>
      <li>AUX: mun, skyldu, vilja, vóru, vera, muni, mætti, skyldum, vorum, megu</li>
      <li>CCONJ: hvörki, hverki, hvatki, hvortki</li>
      <li>DET: þeim, þessu, öllum, því, þessum, öllu, þeirri, einu, einum, miklu</li>
      <li>NOUN: mönnum, landi, manni, nafni, orðum, sinni, hendi, máli, stað, höndum</li>
      <li>NUM: tveimur, tveim, fjórum, fimm, þremur, tólf, þrem, sex, hvorirtveggju, sjö</li>
      <li>PART: einu</li>
      <li>PRON: því, honum, mér, sér, þeim, þér, sínum, henni, oss, yður</li>
      <li>PROPN: guði, Íslandi, Noregi, Sturlu, jesú, kristi, Hólum, Jóni, Skálholti, Gissuri</li>
      <li>SCONJ: hverjum, hverju, hvorum, er, hvaða, hvörju, hvörjum, hvörn, hvörri</li>
      <li>VERB: sér, búnu, leið, liðnum, liðinni, mæltu, lifandi, liðnu, ákveðnum, brotnu</li>
      <li>VERB-Part: liðnu</li>
      <li>X: sankti, domini, Alexandrum, Georgíum, Kapitulum, Anno, Miraculum, delictum, privilegium, sanctorum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: heilagra, góðra, góðs, hægri, heilagrar, heilags, eilífs, ills, sæla, kristinna</li>
      <li>ADP: alls, fyr, handa, gagnvert, innar, jafnfram, sakir, Þá, ór</li>
      <li>ADV: eins, alls, forkunnar, samaleiðis, sæmiliga, aldregi, blíðliga, náliga, oftliga, ákafliga</li>
      <li>AUX: vóru, vera, skyldu, mátta, vilja, Má, hefir, mega, munda, vilda</li>
      <li>CCONJ: eður, eða</li>
      <li>DET: allra, þess, þessa, hins, þeirra, alls, þeirrar, mikils, margra, þessarar</li>
      <li>NOUN: manna, konungs, biskups, kóngs, manns, föður, staðar, lífs, handa, guðs</li>
      <li>NUM: tveggja, þriggja, sex, tólf, fimm, níu, fimmtán, tíu, hundrað, sjö</li>
      <li>PRON: hans, þeirra, þess, hennar, síns, sín, sinna, yðar, mín, annars</li>
      <li>PROPN: guðs, drottins, jesú, Krists, herra, Jóns, Sturlu, Maríu, Þorláks, Íslands</li>
      <li>PUNCT: "</li>
      <li>SCONJ: hvers, hvorrar, hvors, hvör</li>
      <li>VERB: lifanda, Ganga, lifandi, gjörða, liðna, gerva, heitins, komanda, launa, vitu</li>
      <li>X: Holofernis, kalendas, Darii, Domini, Vernakíus, profundis, rupata, stadía, ANIMAE, Academísins</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: gott, góður, stór, gamall, góð, dauður, satt, sama, sami, góðir</li>
      <li>ADJ-Part: vænst, leitt, kunnigt, auðsýnt, skyldir, sýnt, auglýstur, beint, dælt, fallin</li>
      <li>ADP: við, fyr, viður, eptir, sakir, fyri, gagnvert, ór, það, Gagnvart</li>
      <li>ADP-Part: útgefið</li>
      <li>ADV: hvað, einnin, einn, allir, mikill, fyrri, hverninn, langt, aldregi, aptur</li>
      <li>ADV-Part: háttað, minnst, predikað, einnin, gjör, komnir, Einatt, beint, breitt, festar</li>
      <li>AUX: em, var, skyli, vera, haft, hafður, hafðir, mundi, verið, vilið</li>
      <li>AUX-Part: haft, hafður, hafðir, verið, höfð, skylduð, hafið, getið, hafðar, munduð</li>
      <li>CCONJ: bæði, eður, hvörki, hverki, annað, Hvatki, annaðhvert, annaðhvurt, báðir, g</li>
      <li>CCONJ-Part: annaðhvert, bæði</li>
      <li>DET: sá, þetta, allt, allir, þessi, einn, það, hinn, sú, enginn</li>
      <li>DET-Part: minnst, Ekkert, engi, hitt, nakkvað, nokkora, nökkvað</li>
      <li>INTJ: bússí, bittinú, fokk, Heill, fjandi, maður, Æ, Óhó, Óvei, ææææææ</li>
      <li>NOUN: menn, maður, konungur, biskup, kóngur, faðir, herra, prestur, bræður, jarl</li>
      <li>NOUN-Part: orðið, liðið, náð, gerð, ráðið, byggð, sæmd, talið, boðið, framkvæmdar</li>
      <li>NUM: tveir, þrír, tólf, fjórir, tvö, fimm, tvær, sex, þrjár, þrjú</li>
      <li>PART: Einninn, ein, eina, einir</li>
      <li>PRON: hann, þeir, það, þú, eg, ég, hún, vér, hvað, þér</li>
      <li>PRON-Part: yðvart, eg, okkart, sér, vor</li>
      <li>PROPN: guð, jesús, drottinn, Illugi, herra, Finnbogi, Sturla, Grettir, Jón, Oddur</li>
      <li>PROPN-Part: Refur, Fiður, Herjuð, Mundt, Móður</li>
      <li>PUNCT: "</li>
      <li>SCONJ: það, hvor, hvert, hver, hvort, hvört, hverjar, hverjir, ein, er</li>
      <li>SCONJ-Part: hvört</li>
      <li>VERB: kominn, sagt, komið, orðinn, komnir, búinn, komin, kallaður, búið, orðið</li>
      <li>VERB-Part: kominn, sagt, komið, orðinn, komnir, komin, kallaður, getið, farið, gert</li>
      <li>X: Trankival, Ektor, sanktus, domini, sankti, Vernakíus, Majst, Darii, Dominus, Item</li>
      <li>X-Part: Majst, regent</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: fyrsta, fyrstu, þriðja, næsta, betra, heilaga, sæla, góða, fyrri, gamla</li>
      <li>ADP: fraraan, fyr, fá</li>
      <li>ADV: fyrri, einnin, hverninn, einasta, eina, hvörnin, hvörninn, þannin, þanninn, næsta</li>
      <li>AUX: vilið, hafið, vóru, vilda, verðið, væra, myni, mynið, séið, fingu</li>
      <li>CCONJ: hvörki, eður, hvortki</li>
      <li>DET: meira, meiri, fleiri, mesta, fleira, mikla, mesti, mestu, minna, eina</li>
      <li>NOUN: daginn, fólkið, veturinn, keisarinn, maðurinn, nóttina, borginni, málið, höfuðið, landið</li>
      <li>NUM: hvorntveggja, hálfa, hvortveggi, þrjátigi, 1., 11., 4., 8., 9., Hvortveggja</li>
      <li>PART: Einninn, eina, einasta</li>
      <li>PRON: minni, soddan, minna, þeirra, vorar, Sjálfan, min, okkarn, soddann, svoddan</li>
      <li>PROPN: drottins, Austvestan, sankti, Kýlan, gyðinganna, Norðsunnan, herrans, Kýlans, jólin, Jarlmann</li>
      <li>PUNCT: "</li>
      <li>VERB: orðið, heitið, liðið, boðið, kunni, orðin, svarið, blessaða, heita, sagða</li>
      <li>X: sankti, Academísins, Belina, Dominum, Lazari, Magdalum, Roddanum, Tígrin, Verluc, crimina</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: gott, satt, góður, stór, góð, góðum, gamall, góða, dauður, góðan</li>
      <li>ADP: millum, fyr, eptir, viður, sakir, ór, fyri, gagnvert, handa, gögnum</li>
      <li>ADV: aldri, aldregi, mikið, langt, mikill, einn, braut, hart, jafnsnart, hvörsu</li>
      <li>AUX: mun, em, skyldu, vera, vóru, var, vilja, skyli, muni, vil</li>
      <li>CCONJ: hvörki, eður, hverki, hvatki, annaðhvurt, eða, g, hvegi, hvortki, hvörgi</li>
      <li>DET: mikið, mikill, margir, miklu, margt, mikil, mörgum, mikinn, marga, engi</li>
      <li>INTJ: bússí, fokk, bittinú, damm, Æ, óvei, Heill, fjandi, maður, Óhó</li>
      <li>NOUN: menn, maður, konungur, manna, biskup, mönnum, orð, dag, tíma, mann</li>
      <li>NUM: hálft, hvorirtveggju, hálfan, hálfum, ij, hálfu, iij, hálfa, hálfs, hálfur</li>
      <li>PART: einu, einir</li>
      <li>PRON: hönum, vor, hvör, mitt, sinni, vorum, soddan, vær, annað, þeira</li>
      <li>PROPN: guð, guðs, herra, jesús, guði, drottinn, jesú, Illugi, Jón, Finnbogi</li>
      <li>SCONJ: hvört, hvör, ein, em, er, hvatki, hvörju, hvörjum, hvörn, hvörri</li>
      <li>VERB: búið, búinn, segjandi, búin, búnir, höggur, fallinn, leið, kömur, ger</li>
      <li>X: Trankival, domini, Ektor, sanktus, Vernakíus, Anno, Darii, trinitatis, Alexandrum, Georgíum</li>
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
      <li>ADJ: nær, betra, fyrri, betri, fyrra, eldri, stærri, lengra, yngri, æðri</li>
      <li>ADP: nær, fyrr, ór</li>
      <li>ADV: heldur, fyrr, síðar, betur, nær, framar, lengur, oftar, síður, fremur</li>
      <li>AUX: myni</li>
      <li>CCONJ: hvortki, hvörki</li>
      <li>DET: meir, meira, meiri, fleiri, fleira, minna, síður, minni, fleirum, innar</li>
      <li>NOUN: minni, síður, sakir, forvitri, allstaðar, bráðar, byggingarkúnstarinnar, engi, reiðara, réttara</li>
      <li>NUM: vi, xii, átján</li>
      <li>PRON: minni, minna, soddan, hvörra, sinna, yðvarra, þínni</li>
      <li>PROPN: saltara, GANGI, Hlymreksfari, Jaíri, Konáli, Mörukári, Teófíli, farisearanna, himnna, kristi</li>
      <li>VERB: heldur, endaðri, ver, betri, fremur, fá, nær, víprar, Kunni, Lýsi</li>
      <li>X: sankti, Lazari, seminarii</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: gott, satt, góða, góður, stór, góð, góðum, heilaga, þriðja, góðu</li>
      <li>ADP: fyr, eptir, Gagnvart, Kringum, eftur, fá, innar, tilbeðin, ór, þvert</li>
      <li>ADV: mikið, einasta, langt, mikill, eina, einn, hart, þá, eins, mikla</li>
      <li>AUX: var, vilda, vóru, væra, vert, fær, hafða, fekk, mætta, skyldir</li>
      <li>CCONJ: Eður, hvörki</li>
      <li>DET: mikið, mikill, margir, miklu, margt, mikil, mikla, mörgum, mikinn, marga</li>
      <li>INTJ: Heill, ææææææ</li>
      <li>NOUN: dauða, heit, góða, búið, vísu, skyld, föstum, synda, trúu, allskonar</li>
      <li>NUM: hálft, hálfan, hálfum, hálfa, hálfs, hálfu, hálfur, hvorntveggja, ij, tvennum</li>
      <li>PART: einu, eina, einasta, einir</li>
      <li>PRON: soddan, mitt, vær, annað, svoddan, þvílíkan, yðvart, yðrum, vor, yðart</li>
      <li>PROPN: sankti, heilags, heilagur, Rauður, Ótta, Arkistratus, heilaga, helga, Konáll, Darius</li>
      <li>PUNCT: "</li>
      <li>SCONJ: hvört, ein, er</li>
      <li>VERB: búið, búinn, lifandi, búin, búnir, fallinn, lifanda, þegjandi, búnu, grátandi</li>
      <li>X: sankti, Vidfraktus, Item, Alexandrum, sanktus, Aristandus, Sicut, Stadium, Vagau, Valbert</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: fyrsta, fyrstu, næsta, besta, bestu, best, næst, næstu, fyrstur, síðustu</li>
      <li>ADP: fyrst, næst</li>
      <li>ADV: fyrst, næst, helst, best, mest, oftast, síðast, fremst, síst, lengst</li>
      <li>AUX: vart, vildir, vorum</li>
      <li>DET: mest, mesta, flestir, mestu, mesti, flestum, mestur, minnsta, flest, minnst</li>
      <li>NOUN: tigu, Arkistratus, Mannanna, dýra, fyrstu, föstu, gæfastur, hjartans, háttu, kunnustu</li>
      <li>NUM: 1., þrjátigi</li>
      <li>PRON: oss, minna, slík, vora, þeirra, þvílík</li>
      <li>PROPN: Tósti, Austvestan, Georgíum, Mannsins</li>
      <li>VERB: helst, fanst, verst, Þóttust, réttast, sannast, Rifjaðist, fyrfarast, gleðist, glíkjast</li>
      <li>X: Majst, mest</li>
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
      <li>ADJ-Fin: Heill, Hásu, Nakið, Skamt, Skjót, löstu, mildi, ofgóð, upprisu</li>
      <li>ADP-Fin: fyr</li>
      <li>ADV-Fin: hvörsu, hvört, takið</li>
      <li>AUX-Fin: hafið, skalt, mundu, megið, Munt, munuð, Skulu, haf, mátt, verið</li>
      <li>AUX-Inf: vert</li>
      <li>DET-Fin: engi, Nokkuru, engvan, fæstu, nökkut</li>
      <li>INTJ-Fin: duddu</li>
      <li>NOUN-Fin: hurðu, Furðu, Stundu, Sverðið, eig, far</li>
      <li>PRON-Fin: hvörju, hvörs, yðru, þaug, þínun</li>
      <li>PROPN-Fin: Yxu</li>
      <li>PUNCT-Fin: "</li>
      <li>SCONJ-Fin: at</li>
      <li>VERB-Fin: lát, sjá, seg, gef, far, kom, heyr, sjáið, tak, komið</li>
      <li>VERB-Inf: vert, Gjör</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ-Fin: verður, var, fær, nær, ríkir, sannast, átti, sanna, syndgir, varir</li>
      <li>ADP-Fin: á, fyr, nær, eptir, Meður, héreftir, næst, so, sér, yðrum</li>
      <li>ADV: nær, heldur, snart, helst, fór, kann, braut, fyr, mátti, næst</li>
      <li>ADV-Fin: nær, heldur, snart, helst, fór, kann, braut, fyr, mátti, næst</li>
      <li>AUX: var, er, voru, hafði, eru, mun, hefir, hefur, skal, hafa</li>
      <li>AUX-Fin: var, er, voru, hafði, eru, mun, hefir, hefur, skal, hafa</li>
      <li>CCONJ-Fin: eður, hverki, Né, en, heldur</li>
      <li>DET-Fin: sá, engi, öngum, fá, eð, inna, minna, Meir, Nokkuru, báðu</li>
      <li>INTJ-Fin: Hei, Vei, Áví, Ó, Óhó</li>
      <li>NOUN-Fin: vilja, leið, friðar, lifnaði, miskunnar, skildi, hóf, kostar, tignar, birti</li>
      <li>NUM-Fin: iiijr</li>
      <li>PRON-Fin: voru, sér, vorum, eg, vorar, yðrar, yðrum, yðrir, órar, hvör</li>
      <li>PROPN-Fin: Georgíus, Majst, Beljus, Belíus, Brúni, Guði, Gálu, Hrímgerður, Karatti, Kórmaks</li>
      <li>SCONJ-Fin: er, eð, eru, hvörri, hvört</li>
      <li>VERB: sagði, segir, kom, mælti, fór, tók, varð, gekk, lét, hafði</li>
      <li>VERB-Fin: sagði, segir, kom, mælti, fór, tók, varð, gekk, lét, hafði</li>
      <li>X-Fin: Majst, Edimus, Item, Sicut, nostra, omnium, statuta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>ADJ-Fin: fegri, svarti, verðir, frómi, glaði, sæti, Elsti, fáum, hæsti, lítilsvirði</li>
      <li>ADP-Fin: gegni, uni</li>
      <li>ADV-Fin: aldri, Forðum, kynni, byrji, ei, eigi, fyndust, geysi, liggi, liði</li>
      <li>AUX: væri, hefði, sé, skyldi, mundi, hafi, mætti, væru, skyldu, vildi</li>
      <li>AUX-Fin: væri, hefði, sé, skyldi, mundi, hafi, mætti, væru, skyldu, vildi</li>
      <li>CCONJ-Fin: Hvörki</li>
      <li>DET-Fin: engi, Sé, einkis, meiri, öngum</li>
      <li>NOUN-Fin: kosti, liði, mætti, verði, vilji, viti, hafi, mildi, biskupi, boði</li>
      <li>NUM-Fin: Xii, fjörutigi, iiii, vii</li>
      <li>PRON-Fin: hver, hvörjum, sinni, sé, sér, yðrum</li>
      <li>PROPN-Fin: Vali, Valdi, sankti, Maii, Guddu, Julii, Martii, Stefni, bausti, dragi</li>
      <li>VERB-Fin: ætti, kæmi, yrði, færi, verði, komi, þyki, þætti, fengi, þyrfti</li>
      <li>X-Fin: beati, nostri, patri, sankti</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Fin: var, átti, sétti, blessuðu, laust, réttu, sæti, volaði, útvöldu, Elsti</li>
      <li>ADP-Fin: fyr</li>
      <li>ADV: snart, fór, braut, mátti, kunni, fóru, hvörsu, kynni, stóð, vildi</li>
      <li>ADV-Fin: snart, fór, braut, mátti, kunni, fóru, hvörsu, kynni, vildi, Hverru</li>
      <li>AUX: var, voru, hafði, væri, hefði, skyldi, vildi, mundi, höfðu, mátti</li>
      <li>AUX-Fin: var, voru, hafði, væri, hefði, skyldi, vildi, mundi, höfðu, mátti</li>
      <li>DET-Fin: sá, engi, Nokkuru, báðu, meiri</li>
      <li>NOUN-Fin: mætti, leið, lifnaði, liði, skildi, hóf, birti, naut, flugu, færi</li>
      <li>PRON-Fin: voru, vorum, hver, vér, hvör, sér, hvorju, hvörja, hvörjum, hvörri</li>
      <li>PROPN-Fin: Brúni, Guddu, Guði, Gálu, Hrímgerður, Karatti, Pjatti, Skafti, Trankival, Vali</li>
      <li>SCONJ-Fin: hvörri, hvört</li>
      <li>VERB: sagði, kom, mælti, fór, tók, varð, gekk, lét, hafði, hét</li>
      <li>VERB-Fin: sagði, kom, mælti, fór, tók, varð, gekk, lét, hafði, hét</li>
      <li>VERB-Part: riðinn, aðskildir, boðinn, bívaraður, búinn, búnir, drepinn, gjörð, gjörðar, hindraður</li>
      <li>X-Fin: Edimus, Sicut, beati</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Fin: verður, fær, nær, ríkir, sannast, sanna, syndgir, varir, fegri, göfgir</li>
      <li>ADP-Fin: á, fyr, nær, eptir, Meður, gegni, héreftir, næst, so, sér</li>
      <li>ADV-Fin: nær, heldur, helst, kann, aldri, fyr, næst, fer, kemur, koma</li>
      <li>AUX: er, eru, mun, sé, hefir, hefur, skal, hafa, hafi, má</li>
      <li>AUX-Fin: er, eru, mun, sé, hefir, hefur, skal, hafa, hafi, má</li>
      <li>CCONJ-Fin: eður, hverki, Hvörki, Né, en, heldur</li>
      <li>DET-Fin: engi, öngum, fá, eð, inna, minna, Meir, Nokkuru, Sé, einkis</li>
      <li>INTJ-Fin: Hei, Vei, duddu, Áví, Ó, Óhó</li>
      <li>NOUN-Fin: vilja, friðar, kosti, miskunnar, kostar, tignar, verði, vilji, viti, boði</li>
      <li>NUM-Fin: Xii, fjörutigi, iiii, iiijr, vii</li>
      <li>PRON-Fin: sér, eg, yðrum, vorar, yðrar, yðrir, órar, sinna, yðra, hvörja</li>
      <li>PROPN-Fin: Vali, Valdi, sankti, Georgíus, Maii, Majst, Beljus, Belíus, Julii, Kórmaks</li>
      <li>PUNCT-Fin: "</li>
      <li>SCONJ-Fin: er, eð, at, eru</li>
      <li>VERB: segir, kemur, fer, verður, svarar, veit, heitir, gengur, þykir, tekur</li>
      <li>VERB-Fin: segir, kemur, fer, verður, svarar, veit, heitir, gengur, þykir, tekur</li>
      <li>VERB-Part: lifandi</li>
      <li>X-Fin: Majst, Item, nostra, nostri, omnium, patri, sankti, statuta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Fin: verður, var, fær, nær, ríkir, átti, sanna, syndgir, varir, fegri</li>
      <li>ADJ-Inf: sanna, breiða, helga, fegra, fullkomna, margfalda, yðra, Verra, auðga, bera</li>
      <li>ADJ-Part: leitt, kunnigt, auðsýnt, skyldir, sýnt, auglýstur, beint, dælt, fallin, genginn</li>
      <li>ADJ-Sup: greint, hlýðið, hrært, kunnigt, kært, lagt, leitt, ljósan, mein, mætt</li>
      <li>ADP-Fin: á, fyr, nær, eptir, Meður, gegni, héreftir, so, sér, uni</li>
      <li>ADP-Inf: fyr</li>
      <li>ADP-Part: útgefið</li>
      <li>ADP-Sup: fyr, þótt</li>
      <li>ADV-Fin: nær, heldur, snart, fór, kann, aldri, braut, fyr, mátti, fer</li>
      <li>ADV-Inf: ske, fara, fá, æfinlega, aldri, fyrirkoma, gefa, gjör, jafna, líka</li>
      <li>ADV-Part: háttað, predikað, einnin, gjör, hverninn, komnir, Einatt, beint, breitt, festar</li>
      <li>ADV-Sup: fengið, gjör, aldri, alltið, brutt, dárað, einnin, gengið, gerr, greitt</li>
      <li>AUX-Fin: var, er, voru, hafði, væri, eru, mun, hefði, sé, hefir</li>
      <li>AUX-Inf: vera, hafa, verða, vilja, geta, mega, mundu, fá, hefi, má</li>
      <li>AUX-Part: haft, hafður, hafðir, verið, hafandi, höfð, skylduð, hafið, getið, hafðar</li>
      <li>AUX-Sup: verið, haft, getað, mátt, viljað, getið, munt, fengið, hafið, munuð</li>
      <li>CCONJ-Fin: eður, hverki, Hvörki, Né, en, heldur</li>
      <li>CCONJ-Part: annaðhvert, bæði, hvörki</li>
      <li>DET-Fin: sá, engi, öngum, fá, eð, Nokkuru, inna, minna, Meir, Sé</li>
      <li>DET-Inf: engi, minna, sá, fá, sjá, þenna, Margs, eð, ina, inna</li>
      <li>DET-Part: engi, Ekkert, hitt, nakkvað, nokkora, nökkvað</li>
      <li>DET-Sup: engi, hitt, hvört, nakkvað, nökkut</li>
      <li>INTJ-Fin: Hei, Vei, duddu, Áví, Ó, Óhó</li>
      <li>INTJ-Sup: Vei</li>
      <li>NOUN-Fin: vilja, mætti, leið, friðar, kosti, lifnaði, liði, miskunnar, skildi, hóf</li>
      <li>NOUN-Inf: skaða, vilja, anda, sjá, loka, líkama, skála, sóma, Trúa, athuga</li>
      <li>NOUN-Part: búandi, orðið, liðið, náð, gerð, ráðið, byggð, sæmd, talið, boðið</li>
      <li>NOUN-Sup: náð, búið, sótt, styrkt, Dýrð, Glott, Verk, erfð, fagnað, klæði</li>
      <li>NUM-Fin: Xii, fjörutigi, iiii, iiijr, vii</li>
      <li>PRON-Fin: voru, sér, vorum, eg, yðrum, vorar, yðrar, yðrir, órar, hvör</li>
      <li>PRON-Inf: yðra, sinna, Hina, hvörja, minna, óra, þeira</li>
      <li>PRON-Part: yðvart, eg, okkart, sér, vor, vorra</li>
      <li>PRON-Sup: hitt, hvör, yðart</li>
      <li>PROPN-Fin: Vali, sankti, Valdi, Georgíus, Maii, guði, Beljus, Belíus, Brúni, Guddu</li>
      <li>PROPN-Inf: anda, Ótta, Antiokkia, Ermanus, Flegða, Loka, Mella, Pjatta, Syrpa, draga</li>
      <li>PROPN-Part: Refur, Fiður, Herjuð, Mundt, Móður</li>
      <li>PROPN-Sup: Ríkilað, Majst</li>
      <li>PUNCT-Fin: "</li>
      <li>SCONJ-Fin: er, eð, at, eru, hvörri, hvört</li>
      <li>SCONJ-Inf: nema</li>
      <li>SCONJ-Part: hvört</li>
      <li>VERB-Fin: sagði, segir, kom, mælti, fór, tók, varð, gekk, lét, hafði</li>
      <li>VERB-Inf: fara, segja, sjá, taka, koma, láta, ganga, gera, halda, vita</li>
      <li>VERB-Part: kominn, sagt, komið, orðinn, komnir, komin, kallaður, getið, gert, farið</li>
      <li>VERB-Sup: komið, séð, fengið, gert, sagt, tekið, farið, orðið, gjört, gefið</li>
      <li>X-Fin: Edimus, Item, Sicut, beati, nostra, nostri, omnium, patri, sankti, statuta</li>
      <li>X-Inf: Ná, hyggja, libra, nostra, sigla, tertia</li>
      <li>X-Part: regent, regerandi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>ADJ-Fin: sannast, hentust, hreinsast, hreinst, nægst, snarast, þéttust</li>
      <li>ADJ-Inf: leiðast, líkur, sannast, snjallast</li>
      <li>ADJ-Part: vænst, Bezt, auðvíst, beinst, byrst, frægst, hægst, ragast, sýnst, þynnst</li>
      <li>ADJ-Sup: áminnst, skírst, vænst</li>
      <li>ADP-Fin: næst</li>
      <li>ADV-Fin: helst, næst, einast, skjótast, Geyst, Sicut, barðist, berjast, fengust, ferðast</li>
      <li>ADV-Inf: framast, einast, skjótast, alloftast, gerr, helst, skírast, snarast, takast, vandast</li>
      <li>ADV-Part: minnst</li>
      <li>ADV-Sup: gerst, snarast, kynst, minnst, nærst, þankalaust</li>
      <li>AUX-Fin: hafast, hafðist, munuð, sért, ert, fengust, hafist, hefðust, höfðust, mundi</li>
      <li>AUX-Inf: hafast, hafst</li>
      <li>DET-Fin: fæstu</li>
      <li>DET-Inf: meir</li>
      <li>DET-Part: minnst</li>
      <li>DET-Sup: minnst</li>
      <li>NOUN-Fin: drustdrust, veizlan</li>
      <li>NOUN-Inf: finnast, glest, snjókast</li>
      <li>PRON-Fin: eg, yðart</li>
      <li>PROPN-Fin: Majst</li>
      <li>PUNCT-Sup: "</li>
      <li>VERB-Fin: þóttist, fannst, kvaðst, kveðst, sýndist, komst, settist, gerðist, sagðist, sýnist</li>
      <li>VERB-Inf: komast, berjast, finnast, búast, setjast, takast, eignast, gefast, minnast, gerast</li>
      <li>VERB-Part: komist, minnst, búist, sestur, barist, eignast, áminnst, Barðist, aðhafst, búizt</li>
      <li>VERB-Sup: komist, tekist, gerst, fundist, öðlast, barist, búist, reynst, eignast, birst</li>
      <li>X-Fin: Majst</li>
      <li>X-Part: Majst</li>
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
      <li>ADJ: sama, sömu, sami, samri, sams, hvílíkur, samur, glöggvasta, hvílík, samt</li>
      <li>ADP: fyr, Þá, það</li>
      <li>ADV: þá, hvílík, sama, sjálfum, glöggvasta, hvorsu, hvílíka, sjálfa, öðruvís, því</li>
      <li>AUX: var, vóru</li>
      <li>DET: þetta, sá, þessi, þann, þessu, það, þeim, þessa, þessum, þá</li>
      <li>NOUN: sá, þetta, okurið, sjálfa, sjálfan, strendli, þessi, þá</li>
      <li>NUM: þess</li>
      <li>PRON: sjálfur, það, þeim, þeir, sjálfum, slíkt, því, þeirra, sjálfan, þá</li>
      <li>PROPN: Þetta, Sjálfur, Sá, Sú, Þeir</li>
      <li>SCONJ: það, hverjar, hvílíkt</li>
      <li>VERB: sá, hét, sama, minni, Lét, bera, biðjum, hitt, kynni, sami</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: annar, annan, annað, annars, einn, eins, öðru, vorri, aðra, sama</li>
      <li>ADP: alls, fyr, eptir</li>
      <li>ADV: allir, allt, nokkuð, einn, hver, öll, alls, báðir, enginn, hvert</li>
      <li>AUX: mundi, vóru, Myndi</li>
      <li>CCONJ: bæði, annað, báðir, hverki</li>
      <li>DET: allt, allir, öllum, alla, öllu, ekkert, öll, allra, enginn, nokkuð</li>
      <li>NOUN: sumar, hver, vor, öllum, Engum, annan, einhverju, ekkert, engi, foldu</li>
      <li>NUM: hvorttveggja, hvorutveggja, hvorstveggja, Hvort, ein, eina, hver, nokkurt</li>
      <li>PART: ein</li>
      <li>PRON: annað, öðrum, annan, aðrir, annar, öðru, aðra, annars, önnur, hver</li>
      <li>PROPN: Enginn, Aðra, Aðrir, Bítlana, Hellismenn, Petrum, Reyðarmúla, Sumar</li>
      <li>SCONJ: hvor, hvert, hverja, hvort, hver, hverjum, hvern, hvorn, hvers, hvorrar</li>
      <li>VERB: vorar, báðum, ann, entri, forþént, hét, inntakast, kenndust, krafður, reifður</li>
      <li>X: Dominus, Tírus, regnum, sankti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADJ: hver</li>
      <li>ADV: hvað, hvert, hvers, hversu</li>
      <li>AUX: vildi</li>
      <li>DET: hver, hvaða, hvað, hverju, hverjir, hvers, hvern, hverjar, hverja, hvert</li>
      <li>NOUN: hver, hold</li>
      <li>NUM: hvorutveggja, xij</li>
      <li>PRON: hvað, hver, hverju, hvers, hverjir, hverra, hvern, hverjar, hverja, vorar</li>
      <li>SCONJ: hver, hverjar, hverjir, hvert, hvaða, hverju, hvort</li>
      <li>VERB: hvað, vorar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADJ: mitt, sér, H., elskuligan, kunnigt, sitt, sæt, vorra, Þess, þriðja</li>
      <li>ADP: við, fyr, því, eftir, Það</li>
      <li>ADV: þá, því, sér, mitt, það, þeir, þú, hann, þess, fyr</li>
      <li>AUX: sér, vorum, var</li>
      <li>DET: það, þeim, því, þeir, þess, þau, þeirra, þá, þær, Þessir</li>
      <li>INTJ: hana</li>
      <li>NOUN: sinn, sinni, Þú, ég, hann, mér, sér, hún, vorra, minna</li>
      <li>NUM: þeir, þess</li>
      <li>PRON: hann, það, þeir, því, þú, eg, ég, honum, hans, hún</li>
      <li>PROPN: Hann, Þú, Hans, Þér, Eg, Vér, Ég, Hún, Helga, Mér</li>
      <li>PUNCT: "</li>
      <li>SCONJ: það</li>
      <li>VERB: sér, minna, vora, ann, bannaða, brennanda, dansandi, fanst, fyltist, gerði</li>
      <li>X: Holofernis, Majst</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: 5., 1., 7., 10., 4., 3., 9., átta, 16., 2.</li>
      <li>ADV: einn, tveir, einum, eitt, þrír, tvö, átta, ein, eins, einu</li>
      <li>DET: einn, eitt, einum, ein, eina, einu, einni, eins, einnar, 1</li>
      <li>INTJ: du</li>
      <li>NOUN: hundruð, hundrað, móti, þúsund, brautu, hndr, sex, vj, ד, Bræður</li>
      <li>NUM: tólf, tveir, tvo, fimm, sex, tvö, 3, þrír, 2, sjö</li>
      <li>PART: einu, eitt</li>
      <li>PRON: hvörri, ór</li>
      <li>PROPN: 1, 4., 3., I, If, Jesaja, Tyrkjaskipið</li>
      <li>PUNCT: ", —</li>
      <li>VERB: átta, firrði, hylmast, lifir, bera, hvella</li>
      <li>X: Item</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Frac
    <ul>
      <li>ADJ: vǫn</li>
      <li>NOUN: ui, xx</li>
      <li>NUM: ij</li>
      <li>PUNCT: "</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>DET: hvaða</li>
      <li>NOUN: hundruð, þúsund</li>
      <li>NUM: tvö, fjögur, þrjú, fimm, tólf, hundruð, tuttugu, þrjá, fjörutíu, níu</li>
      <li>PROPN: Tvö</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADJ-Fin: syndgum, göfgum, Vei, auðgum, blessuðum, fríum, fáum, heilum, helgum, kæri</li>
      <li>ADP: við, á, eftir, fyr, yðrum</li>
      <li>ADP-Fin: á, fyr, yðrum</li>
      <li>ADV-Fin: forðum, fer, fór, Nær, aldri, dvel, helst, kann, kem, kemst</li>
      <li>AUX-Fin: var, vil, er, hefi, mun, skal, skulum, erum, hef, höfum</li>
      <li>CCONJ-Fin: hverki, Né, en</li>
      <li>DET: sá, öngum, engi, einkis, hvörjir, hvörjum, þeim</li>
      <li>DET-Fin: sá, öngum, engi, einkis, hvörjum</li>
      <li>INTJ-Fin: Hei, Áví, Ó, Óhó</li>
      <li>NOUN: ég, mér, Vér, eg, klæði, yðrum, BLOKK, boði, bæti, er</li>
      <li>NOUN-Fin: klæði, yðrum, BLOKK, boði, bæti, er, fjötrum, forakti, fótum, get</li>
      <li>PRON: eg, ég, mér, vér, mig, oss, við, okkur, mín, okkar</li>
      <li>PRON-Fin: vorum, eg, yðrum, hvörja, hvörjum, Annaðhvört, hver, örðum, þeim</li>
      <li>PROPN: Eg, Vér, Ég, Georgíus, Mér, Vali</li>
      <li>PROPN-Fin: Georgíus, Vali</li>
      <li>PUNCT: "</li>
      <li>VERB: veit, fór, segi, fékk, sá, ætla, kom, tók, sé, lét</li>
      <li>VERB-Fin: veit, fór, segi, fékk, sá, ætla, kom, tók, sé, lét</li>
      <li>X: Majst, omnium</li>
      <li>X-Fin: omnium</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADJ-Fin: verðir, Heill, Hásu, Nakið, Skamt, Skjót, heilagrar, hlýðið, löstu, mildi</li>
      <li>ADP: fyr, Nær</li>
      <li>ADP-Fin: fyr, Nær</li>
      <li>ADV: nær, þú, heldur, hvört, gerr, hvörsu, kemur, mætir, starfar, takið</li>
      <li>ADV-Fin: nær, heldur, hvört, gerr, hvörsu, kemur, mætir, starfar, takið, tekur</li>
      <li>AUX-Fin: ert, skalt, munt, hefir, hefur, vilt, hafið, eruð, skuluð, mátt</li>
      <li>CCONJ-Fin: hverki</li>
      <li>DET: engi, Nokkuru, engvan, fæstu, meiri, nökkut, þeim</li>
      <li>DET-Fin: engi, Nokkuru, engvan, fæstu, meiri, nökkut</li>
      <li>INTJ-Fin: duddu</li>
      <li>NOUN: Þú, þér, hurðu, ér, Furðu, Stundu, Sverðið, eig, far, sverð</li>
      <li>NOUN-Fin: hurðu, Furðu, Stundu, Sverðið, eig, far, sverð</li>
      <li>PRON: þú, þér, yður, þig, yðar, þið, þín, ér, ykkur, ykkar</li>
      <li>PRON-Fin: eg, hvörju, hvörn, hvörs, hvörja, hvörra, yðru, þaug, þínun</li>
      <li>PROPN: Þú, Þér, Yxu, Þig</li>
      <li>PROPN-Fin: Yxu</li>
      <li>PUNCT: "</li>
      <li>PUNCT-Fin: "</li>
      <li>SCONJ-Fin: at</li>
      <li>VERB-Fin: lát, sjá, veist, seg, gef, átt, far, sjáið, ætlar, segið</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ-Fin: verður, var, fær, nær, ríkir, sannast, átti, syndgir, varir, fegri</li>
      <li>ADP-Fin: á, fyr, nær, eptir, Meður, gegni, héreftir, næst, so, sér</li>
      <li>ADV-Fin: nær, heldur, snart, helst, fór, braut, fyr, kann, mátti, næst</li>
      <li>AUX-Fin: var, er, voru, hafði, væri, eru, hefði, sé, mun, skyldi</li>
      <li>CCONJ-Fin: eður, Hvörki, heldur</li>
      <li>DET-Fin: sá, engi, fá, eð, inna, minna, Meir, Nokkuru, Sé, báðu</li>
      <li>INTJ-Fin: Vei</li>
      <li>NOUN-Fin: vilja, mætti, leið, friðar, kosti, lifnaði, liði, miskunnar, skildi, kostar</li>
      <li>NUM-Fin: Xii, fjörutigi, iiii, iiijr, vii</li>
      <li>PRON-Fin: voru, sér, vorar, yðrar, yðrir, órar, hvör, sinna, yðra, vér</li>
      <li>PROPN-Fin: Vali, sankti, Valdi, Maii, Majst, guði, Beljus, Belíus, Brúni, Guddu</li>
      <li>SCONJ-Fin: er, eð, eru, hvörri, hvört</li>
      <li>VERB-Fin: sagði, segir, kom, mælti, tók, varð, gekk, fór, hét, lét</li>
      <li>X-Fin: Majst, Edimus, Item, Sicut, beati, nostra, nostri, patri, sankti, statuta</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Vant, Aum, Darius, Heil, iiii, Besti, Gamall, Heili, Italiani, Ofanvert</li>
          <li>ADP: fyr, of, umb, Und, intra, nema</li>
          <li>ADV: ei, sicut, so, ogsvo, Mart, item, fraMe, nu, Allvel, Brott</li>
          <li>AUX: Vil, man, myni, Munu, Vilda, emk, er, hefir, hefoi</li>
          <li>CCONJ: oc, et</li>
          <li>DET: in, þenna, engi, ina, inu, mart, enu, Allan, Alt, Eina</li>
          <li>INTJ: Hei, Jaaaá, hahaha, he, Vei, Bless, Blubbs, Eia, Hahahaha, O</li>
          <li>NOUN: son, anno, dal, kap, Majestets, hold, hertug, leon, von, Lof</li>
          <li>NUM: ij, iij, iiij, iiii, xii, vii, ccc, ix, xi, xiii</li>
          <li>PRON: Oss, þaug, huer, þeira, Haun, Minn, Sitt, Soddan, Vor, Vort</li>
          <li>PROPN: Erasmus, Metternich, Darius, Vali, Dominus, Pelissier, Moyses, Menon, Petrus, Thiers</li>
          <li>PUNCT: —</li>
          <li>VERB: Bar, Gessovel, Vita, Komu, Tel, talt, Sest, Stend, Vil, do</li>
          <li>X: anno, in, item, domini, et, Dominus, etc, de, Achior, corpus</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: vera, blífa.</li>
</ul>

<ul>
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: hafa, munu, skulu, vilja, mega, geta, verða, fá, kunna.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (44)</li>
      <li>VERB--NOUN-Acc (148)</li>
      <li>VERB--NOUN-Dat (180)</li>
      <li>VERB--NOUN-Gen (15)</li>
      <li>VERB--NOUN-Nom (1057)</li>
      <li>VERB--PRON (68)</li>
      <li>VERB--PRON-Acc (73)</li>
      <li>VERB--PRON-Dat (226)</li>
      <li>VERB--PRON-Gen (11)</li>
      <li>VERB--PRON-Nom (1770)</li>
      <li>VERB-Fin--NOUN (86)</li>
      <li>VERB-Fin--NOUN-Acc (618)</li>
      <li>VERB-Fin--NOUN-Dat (545)</li>
      <li>VERB-Fin--NOUN-Gen (81)</li>
      <li>VERB-Fin--NOUN-Nom (11820)</li>
      <li>VERB-Fin--PRON (121)</li>
      <li>VERB-Fin--PRON-Acc (828)</li>
      <li>VERB-Fin--PRON-Dat (2281)</li>
      <li>VERB-Fin--PRON-Gen (104)</li>
      <li>VERB-Fin--PRON-Nom (27911)</li>
      <li>VERB-Fin--PRON-Nom-ADP(hjá) (1)</li>
      <li>VERB-Fin--PRON-Nom-ADP(til) (1)</li>
      <li>VERB-Inf--NOUN (23)</li>
      <li>VERB-Inf--NOUN-Acc (536)</li>
      <li>VERB-Inf--NOUN-Dat (44)</li>
      <li>VERB-Inf--NOUN-Gen (29)</li>
      <li>VERB-Inf--NOUN-Nom (1188)</li>
      <li>VERB-Inf--PRON (117)</li>
      <li>VERB-Inf--PRON-Acc (538)</li>
      <li>VERB-Inf--PRON-Dat (374)</li>
      <li>VERB-Inf--PRON-Gen (14)</li>
      <li>VERB-Inf--PRON-Nom (4710)</li>
      <li>VERB-Part--NOUN (20)</li>
      <li>VERB-Part--NOUN-Acc (108)</li>
      <li>VERB-Part--NOUN-Dat (280)</li>
      <li>VERB-Part--NOUN-Gen (35)</li>
      <li>VERB-Part--NOUN-Nom (1614)</li>
      <li>VERB-Part--PRON (21)</li>
      <li>VERB-Part--PRON-Acc (52)</li>
      <li>VERB-Part--PRON-Dat (443)</li>
      <li>VERB-Part--PRON-Gen (56)</li>
      <li>VERB-Part--PRON-Nom (1612)</li>
      <li>VERB-Sup--NOUN (9)</li>
      <li>VERB-Sup--NOUN-Acc (65)</li>
      <li>VERB-Sup--NOUN-Dat (45)</li>
      <li>VERB-Sup--NOUN-Gen (10)</li>
      <li>VERB-Sup--NOUN-Nom (928)</li>
      <li>VERB-Sup--PRON (9)</li>
      <li>VERB-Sup--PRON-Acc (108)</li>
      <li>VERB-Sup--PRON-Dat (190)</li>
      <li>VERB-Sup--PRON-Gen (12)</li>
      <li>VERB-Sup--PRON-Nom (3229)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (40)</li>
      <li>VERB--NOUN-Acc (498)</li>
      <li>VERB--NOUN-Dat (203)</li>
      <li>VERB--NOUN-Gen (88)</li>
      <li>VERB--NOUN-Nom (261)</li>
      <li>VERB--PRON (35)</li>
      <li>VERB--PRON-Acc (153)</li>
      <li>VERB--PRON-Dat (88)</li>
      <li>VERB--PRON-Gen (23)</li>
      <li>VERB--PRON-Nom (149)</li>
      <li>VERB-Fin--NOUN (161)</li>
      <li>VERB-Fin--NOUN-Acc (9882)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(og) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(á) (1)</li>
      <li>VERB-Fin--NOUN-Dat (2040)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(af) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(fyrir) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(með) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(í) (1)</li>
      <li>VERB-Fin--NOUN-Gen (638)</li>
      <li>VERB-Fin--NOUN-Nom (1457)</li>
      <li>VERB-Fin--PRON (354)</li>
      <li>VERB-Fin--PRON-Acc (3677)</li>
      <li>VERB-Fin--PRON-Dat (1502)</li>
      <li>VERB-Fin--PRON-Gen (294)</li>
      <li>VERB-Fin--PRON-Nom (1611)</li>
      <li>VERB-Inf--NOUN (73)</li>
      <li>VERB-Inf--NOUN-Acc (4702)</li>
      <li>VERB-Inf--NOUN-Dat (1115)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(í) (2)</li>
      <li>VERB-Inf--NOUN-Gen (388)</li>
      <li>VERB-Inf--NOUN-Nom (399)</li>
      <li>VERB-Inf--PRON (89)</li>
      <li>VERB-Inf--PRON-Acc (2127)</li>
      <li>VERB-Inf--PRON-Dat (771)</li>
      <li>VERB-Inf--PRON-Dat-ADP(eftir) (1)</li>
      <li>VERB-Inf--PRON-Gen (198)</li>
      <li>VERB-Inf--PRON-Nom (362)</li>
      <li>VERB-Part--NOUN (3)</li>
      <li>VERB-Part--NOUN-Acc (126)</li>
      <li>VERB-Part--NOUN-Dat (63)</li>
      <li>VERB-Part--NOUN-Gen (20)</li>
      <li>VERB-Part--NOUN-Nom (158)</li>
      <li>VERB-Part--PRON (13)</li>
      <li>VERB-Part--PRON-Acc (55)</li>
      <li>VERB-Part--PRON-Dat (33)</li>
      <li>VERB-Part--PRON-Gen (12)</li>
      <li>VERB-Part--PRON-Nom (119)</li>
      <li>VERB-Sup--NOUN (18)</li>
      <li>VERB-Sup--NOUN-Acc (1439)</li>
      <li>VERB-Sup--NOUN-Dat (315)</li>
      <li>VERB-Sup--NOUN-Dat-ADP(af) (2)</li>
      <li>VERB-Sup--NOUN-Gen (74)</li>
      <li>VERB-Sup--NOUN-Nom (153)</li>
      <li>VERB-Sup--PRON (29)</li>
      <li>VERB-Sup--PRON-Acc (677)</li>
      <li>VERB-Sup--PRON-Dat (237)</li>
      <li>VERB-Sup--PRON-Gen (37)</li>
      <li>VERB-Sup--PRON-Nom (206)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--NOUN-Acc (3)</li>
      <li>VERB--NOUN-Dat (47)</li>
      <li>VERB--NOUN-Nom (5)</li>
      <li>VERB--PRON (16)</li>
      <li>VERB--PRON-Acc (15)</li>
      <li>VERB--PRON-Dat (117)</li>
      <li>VERB--PRON-Gen (2)</li>
      <li>VERB-Fin--NOUN (7)</li>
      <li>VERB-Fin--NOUN-Acc (88)</li>
      <li>VERB-Fin--NOUN-Dat (483)</li>
      <li>VERB-Fin--NOUN-Gen (17)</li>
      <li>VERB-Fin--NOUN-Nom (22)</li>
      <li>VERB-Fin--PRON (33)</li>
      <li>VERB-Fin--PRON-Acc (232)</li>
      <li>VERB-Fin--PRON-Dat (2645)</li>
      <li>VERB-Fin--PRON-Gen (12)</li>
      <li>VERB-Fin--PRON-Nom (38)</li>
      <li>VERB-Inf--NOUN (5)</li>
      <li>VERB-Inf--NOUN-Acc (32)</li>
      <li>VERB-Inf--NOUN-Dat (230)</li>
      <li>VERB-Inf--NOUN-Gen (9)</li>
      <li>VERB-Inf--NOUN-Nom (4)</li>
      <li>VERB-Inf--PRON (10)</li>
      <li>VERB-Inf--PRON-Acc (72)</li>
      <li>VERB-Inf--PRON-Dat (1278)</li>
      <li>VERB-Inf--PRON-Gen (10)</li>
      <li>VERB-Inf--PRON-Nom (11)</li>
      <li>VERB-Part--NOUN-Acc (2)</li>
      <li>VERB-Part--NOUN-Dat (37)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--PRON-Acc (7)</li>
      <li>VERB-Part--PRON-Dat (70)</li>
      <li>VERB-Part--PRON-Gen (2)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
      <li>VERB-Sup--NOUN (1)</li>
      <li>VERB-Sup--NOUN-Acc (8)</li>
      <li>VERB-Sup--NOUN-Dat (67)</li>
      <li>VERB-Sup--NOUN-Nom (1)</li>
      <li>VERB-Sup--PRON (2)</li>
      <li>VERB-Sup--PRON-Acc (34)</li>
      <li>VERB-Sup--PRON-Dat (537)</li>
      <li>VERB-Sup--PRON-Gen (3)</li>
      <li>VERB-Sup--PRON-Nom (4)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>compound:prt</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:poss</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>compound</a>, <a>flat</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
