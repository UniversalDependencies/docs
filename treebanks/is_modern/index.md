---
layout: base
title:  'UD_Icelandic-Modern'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Icelandic Modern

Language: [Icelandic](/is/index.html) (code: `is`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.8 release.

The following people have contributed to making this treebank part of UD: Kristján Rúnarsson, Þórunn Arnardóttir, Hinrik Hafsteinsson, Starkaður Barkarson, Hildur Jónsdóttir, Steinþór Steingrímsson, Einar Freyr Sigurðsson.

Repository: [UD_Icelandic-Modern](https://github.com/UniversalDependencies/UD_Icelandic-Modern)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udis_modern214)<br />
Download all treebanks: [UD 2.14](/#download)

License: CC BY-SA 4.0

Genre: nonfiction, news

Questions, comments?
General annotation questions (either Icelandic-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Icelandic-Modern/issues).
If you want to collaborate, please contact [krunars&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com, thar&nbsp;(æt)&nbsp;hi&nbsp;•&nbsp;is, hinrik&nbsp;•&nbsp;hafst&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com, starkadur&nbsp;•&nbsp;barkarson&nbsp;(æt)&nbsp;arnastofnun&nbsp;•&nbsp;is, hildur&nbsp;•&nbsp;jonsdottir&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com, steinthor&nbsp;•&nbsp;steingrimsson&nbsp;(æt)&nbsp;arnastofnun&nbsp;•&nbsp;is, einar&nbsp;•&nbsp;freyr&nbsp;•&nbsp;sigurdsson&nbsp;(æt)&nbsp;arnastofnun&nbsp;•&nbsp;is].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

UD_Icelandic-Modern is a conversion of the [modern additions](https://github.com/antonkarl/icecorpus/tree/master/additions2019) to the Icelandic Parsed Historical Corpus (IcePaHC) to the Universal Dependencies scheme.




The conversion was done using [UDConverter](https://github.com/thorunna/UDConverter).

Note that the treebank data in versions 2.8-2.10 is flawed in that various sentences are duplicated, resulting in an overlap between train / dev / test. This issue has been fixed as of version 2.11.

The modern additions to the Icelandic Parsed Historical Corpus (IcePaHC) is a corpus which includes 21st-century texts NOT found in [IcePaHC](https://repository.clarin.is/repository/xmlui/handle/20.500.12537/62). These texts were manually parsed according to the Penn Parsed Corpora of Historical English (PPCHE) annotation scheme as used for IcePaHC. These parsed texts were then automatically converted to the Universal Dependencies scheme to create UD_Icelandic-Modern. The corpus consists of 80 thousand tokens in total. The texts are unprepared parliament speeches by four Icelandic members of parliament in the period 2011–2015 and sports news texts from two reporters at the Icelandic National Broadcasting Service (RÚV) from 2016 and – as of version 2.11 – from 2017. These 21st-century additions are not found in [IcePaHC](https://repository.clarin.is/repository/xmlui/handle/20.500.12537/62) (which, however, contains two narrative texts from the 21st century).

Each sentence ID (`sent_id`) in UD_Icelandic-Modern carries the following information:

`ALTHINGI_BO_2015_G-33-4647803,.1`

- Text origin (`ALTHINGI`)
- Speaker (`BO`)
- Publication year of the text (`2015`)
- Name of original file (`G-33-4647803`)
- Sentence index within file (`.1`)

Along with sentence IDs within the UD corpus, each sentence contains an `X_ID` flag, indicating the original sentence(s) in IcePaHC. This is useful as some sentences in the UD scheme have more than one original sentence in IcePaHC. As sentence IDs are currently not represented in the original parsed corpus found [here](https://github.com/antonkarl/icecorpus/tree/master/additions2019), this flag is left blank, as `ID_MISSING` for each original sentence.


## Manually corrected portion

A subset of the UD corpus has been manually corrected after the automatic conversion, 15,151 words in total. The portion corrected belonged to the following files, as shown in each sentence's ID:
- `ALTHINGI_BO_2013`
- All files
- `ALTHINGI_BO_2014`
- All files
- `ALTHINGI_HHG_2013`
- Files G-33-4492074, G-33-4497471, G-33-4500256, G-33-4525575, G-33-4528305, G-33-4534200, G-33-4542329
- `ALTHINGI_SJS_2013`
- Files G-33-4493268, G-33-4496708, G-33-4496709, G-33-4496710, G-33-4500290, G-33-4500291, G-33-4503791, G-33-4510804, G-33-4517845, G-33-4517846, G-33-4524841, G-33-4528340, G-33-4542311, G-33-4542313, G-33-4545749, G-33-4545750, G-33-4545751, G-33-4556342, G-33-4556344, G-33-4563267, G-33-4565680

## Data split

**Training data**

61,817 words in total

- `ALTHINGI_BO_2013` - 16 sentences
- `ALTHINGI_BO_2014` - 174 sentences
- `ALTHINGI_BO_2015` - 284 sentences
- `ALTHINGI_HHG_2013` - 621 sentences
- `ALTHINGI_SJS_2013` - 658 sentences
- `ALTHINGI_TKG_2011` - 449 sentences
- `RUV_ESP_2016` - 238 sentences
- `RUV_TGS_2016` - 263 sentences

**Development data**

8,431 words in total

- `ALTHINGI_BO_2013` - 16 sentences
- `ALTHINGI_BO_2014` - 43 sentences
- `ALTHINGI_BO_2015` - 32 sentences
- `ALTHINGI_HHG_2013` - 54 sentences
- `ALTHINGI_SJS_2013` - 75 sentences
- `ALTHINGI_TKG_2011` - 53 sentences
- `RUV_ESP_2016` - 66 sentences
- `RUV_TGS_2016` - 55 sentences

**Testing data**

10,147 words in total

- `ALTHINGI_BO_2013` - 14 sentences
- `ALTHINGI_BO_2014` - 46 sentences
- `ALTHINGI_BO_2015` - 34 sentences
- `ALTHINGI_HHG_2013` - 45 sentences
- `ALTHINGI_SJS_2013` - 67 sentences
- `ALTHINGI_TKG_2011` - 41 sentences
- `RUV_ESP_2016` - 38 sentences
- `RUV_ESP_2017` - 43 sentences
- `RUV_TGS_2016` - 76 sentences
- `RUV_TGS_2017` - 34 sentences


## Acknowledgments

This project was funded by The Strategic Research and Development Programme for Language Technology, grant no. 180020-5301.

The modern additions to the Icelandic Parsed Historical Corpus (IcePaHC) are available [here](https://github.com/antonkarl/icecorpus/tree/master/additions2019).

Morphological features were generated using ABLTagger, a PoS tagger for Icelandic, developed by Steinþór Steingrímsson, Örvar Kárason and Hrafn Loftsson and available [here](https://github.com/steinst/ABLTagger).



# Statistics of UD Icelandic Modern

## POS Tags

[ADJ](is_modern-pos-ADJ.html) – [ADP](is_modern-pos-ADP.html) – [ADV](is_modern-pos-ADV.html) – [AUX](is_modern-pos-AUX.html) – [CCONJ](is_modern-pos-CCONJ.html) – [DET](is_modern-pos-DET.html) – [INTJ](is_modern-pos-INTJ.html) – [NOUN](is_modern-pos-NOUN.html) – [NUM](is_modern-pos-NUM.html) – [PART](is_modern-pos-PART.html) – [PRON](is_modern-pos-PRON.html) – [PROPN](is_modern-pos-PROPN.html) – [PUNCT](is_modern-pos-PUNCT.html) – [SCONJ](is_modern-pos-SCONJ.html) – [VERB](is_modern-pos-VERB.html) – [X](is_modern-pos-X.html)

## Features

[Case](is_modern-feat-Case.html) – [Definite](is_modern-feat-Definite.html) – [Degree](is_modern-feat-Degree.html) – [Foreign](is_modern-feat-Foreign.html) – [Gender](is_modern-feat-Gender.html) – [Mood](is_modern-feat-Mood.html) – [Number](is_modern-feat-Number.html) – [NumType](is_modern-feat-NumType.html) – [Person](is_modern-feat-Person.html) – [PronType](is_modern-feat-PronType.html) – [Tense](is_modern-feat-Tense.html) – [VerbForm](is_modern-feat-VerbForm.html) – [Voice](is_modern-feat-Voice.html)

## Relations

[acl](is_modern-dep-acl.html) – [acl:relcl](is_modern-dep-acl-relcl.html) – [advcl](is_modern-dep-advcl.html) – [advmod](is_modern-dep-advmod.html) – [amod](is_modern-dep-amod.html) – [appos](is_modern-dep-appos.html) – [aux](is_modern-dep-aux.html) – [case](is_modern-dep-case.html) – [cc](is_modern-dep-cc.html) – [ccomp](is_modern-dep-ccomp.html) – [compound](is_modern-dep-compound.html) – [compound:prt](is_modern-dep-compound-prt.html) – [conj](is_modern-dep-conj.html) – [cop](is_modern-dep-cop.html) – [csubj](is_modern-dep-csubj.html) – [dep](is_modern-dep-dep.html) – [det](is_modern-dep-det.html) – [discourse](is_modern-dep-discourse.html) – [expl](is_modern-dep-expl.html) – [fixed](is_modern-dep-fixed.html) – [flat:foreign](is_modern-dep-flat-foreign.html) – [flat:name](is_modern-dep-flat-name.html) – [iobj](is_modern-dep-iobj.html) – [mark](is_modern-dep-mark.html) – [nmod](is_modern-dep-nmod.html) – [nmod:poss](is_modern-dep-nmod-poss.html) – [nsubj](is_modern-dep-nsubj.html) – [nummod](is_modern-dep-nummod.html) – [obj](is_modern-dep-obj.html) – [obl](is_modern-dep-obl.html) – [parataxis](is_modern-dep-parataxis.html) – [punct](is_modern-dep-punct.html) – [root](is_modern-dep-root.html) – [vocative](is_modern-dep-vocative.html) – [xcomp](is_modern-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3535 sentences, 80391 tokens and 80394 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 6523 tokens (8%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 125 types of words that contain both letters and punctuation. Examples: hv., hæstv., þm., <percent/>, gr., H., kr., o., s., þús., frv., a., k., m., allsherjar-, kl., umr., efnahags-, umhverfis-, EES-samningnum, St., mín., nr., EES-samninginn, J., KR-ingar, R., sek., KR-inga, Pepsi-deildinni, b., fl., áfengis-, A-landsliðinu, Inkasso-deildarinnar, Paralympic-met, Saint-Germain, Twitter-síðu, bls., gogn.island.is, míní-samningaleið, sjávarútvegs-, u., þ., 110<percent/>-leiðina, 110<percent/>leiðina, 1<closeparen/>, 2<closeparen/>, 3<closeparen/>, 99xCOM_dashx66</li>
</ul>

<ul>
<li>This corpus contains 3 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 3 types of multi-word tokens. Examples: Afsakaðu, eignaupplýsingar, fyrirgefðu.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 3 word types tagged as particles (PART): að, aðeins, bara</li>
</ul>

<ul>
<li>This corpus contains 28 lemmas tagged as pronouns (PRON): annar, annars, annaðhvort, eina, ekki, fotbolti.net, hann, hvaða, hvaðeina, hver, hvor, hvort, hún, maður, minn, sami, sig, sinn, sjálfur, slíkur, sá, við, ég, það, þinn, því, þvílíkur, þú</li>
</ul>

<ul>
<li>This corpus contains 41 lemmas tagged as determiners (DET): allmikill, alls, allur, annaðhvort, báðir, bæði, dálítill, einhver, einn, enginn, fullmikill, fáeinir, fár, hinn, hvaða, hver, hvor, hvort, hvorugur, hún, lítill, margur, mikill, mikið, mismikill, mjög, neinn, nokkur, nógur, sumur, svolítill, svolítið, sá, talsverður, umtalsverður, öllsamall, örlítill, ýmis, það, þessi, þetta</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as PRON and sometimes as DET: annaðhvort, hvaða, hver, hvor, hvort, hún, sá, það</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): fá, geta, hafa, mega, munu, skulu, vera, verða, vilja</li>
</ul>

<ul>
<li>Out of the above, 9 lemmas occurred sometimes as AUX and sometimes as VERB: fá, geta, hafa, mega, munu, skulu, vera, verða, vilja</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>ADP: á</li>
    <li>ADV: lýtur</li>
    <li>AUX: er, var, eru, sé, hefur, væri, hafi, hafa, hefði, erum</li>
    <li>NOUN: Innheimtu, bönnum, leiðir</li>
    <li>VERB: hringir, held, kemur, á, finnst, þarf, þakka, verður, sagði, eigum</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>ADV: segja</li>
    <li>AUX: vera, hafa, geta, verða, vilja, mundu</li>
    <li>NOUN: þjónusta</li>
    <li>VERB: gera, fara, taka, koma, segja, vinna, sjá, fá, ræða, spyrja</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: rökstutt</li>
    <li>ADV: útfært</li>
    <li>AUX: verið, haft</li>
    <li>NOUN: liðið, orðið</li>
    <li>VERB: varðandi, gert, farið, keppt, gripið, sagt, tekið, komin, sett, búið</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>AUX: verið, haft, viljað, getað, mátt</li>
    <li>VERB: sagt, tekið, komið, gert, farið, orðið, séð, átt, reynt, gerst</li>
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
      <li>ADJ: góð, fyrri, síðustu, næstu, betri, fyrstu, ánægð, mikla, sammála, góða</li>
      <li>ADV: svona, fleiri, þannig, mikla, fallega, gríðarlega, kvitt, margar, meiri, mikil</li>
      <li>DET: þá, þessa, þessari, sú, þessar, þeirri, þær, þessi, þeim, hvaða</li>
      <li>NOUN: leið, raun, ræðu, ríkisstjórn, umræðu, klukkan, upplýsingar, veru, vinnu, aðgerðir</li>
      <li>NUM: tvær, þrjár, fimm, þúsund, sjö, þremur, níu, sex, tveggja, fjögurra</li>
      <li>PRON: hún, þær, hana, sér, sinni, henni, hennar, minni, mín, aðrar</li>
      <li>PROPN: Hrafnhildur, Bryndís, Evrópu, Chusovitina, Rún, Danmörku, Lúthersdóttir, Brasilíu, Grótta, París</li>
      <li>VERB: orðin, farin, komin, tekin, teknar, samþykkt, settar, skráð, felld, gerðar</li>
      <li>VERB-Part: orðin, farin, komin, tekin, teknar, samþykkt, settar, skráð, felld, gerðar</li>
      <li>X: skyttunar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: virðulegi, sammála, minnsta, besta, minni, nýjan, vinstri, fatlaðra, síðustu, viss</li>
      <li>ADV: svona, meiri, mikinn, margir, eins, fleiri, hugsanlega, marga, miklu, sammála</li>
      <li>DET: þeim, allir, meiri, þann, hins, einhvern, þeir, alla, sá, enginn</li>
      <li>NOUN: forseti, menn, þingmaður, ráðherra, tíma, herra, dag, stað, vegar, þingmanni</li>
      <li>NUM: þrír, fjóra, tveimur, átta, fimm, sex, tvo, fjórir, þrjá, fjórum</li>
      <li>PRON: hann, þeir, sér, sig, hans, sínum, honum, annars, öðrum, þeim</li>
      <li>PROPN: Ólympíuleikunum, Blöndal, Íslendingar, Ólympíuleikum, Þór, Jón, Pétur, Arnar, Forseti, Valur</li>
      <li>VERB: kominn, settir, sýndur, farinn, haldnir, komnir, orðinn, valinn, fluttur, gefinn</li>
      <li>VERB-Part: kominn, settir, sýndur, farinn, haldnir, komnir, orðinn, valinn, fluttur, gefinn</li>
      <li>X: final-four</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: hægt, gott, rétt, miklu, fyrsta, mikilvægt, sjálfsögðu, ljóst, síðasta, erfitt</li>
      <li>ADJ-Part: rökstutt</li>
      <li>ADV: rétt, svona, meira, mikið, mikil, mörgum, skýrt, ekkert, ytra, öðruvísi</li>
      <li>AUX-Part: verið, haft</li>
      <li>DET: þetta, það, þessu, allt, eitthvað, ekkert, því, þessi, þau, þeim</li>
      <li>NOUN: mál, fólk, máli, málið, ár, ára, ári, sæti, dæmis, árið</li>
      <li>NOUN-Part: liðið, orðið</li>
      <li>NUM: tvö, tveimur, fjögur, þrjú, fjórum, tíu, tveggja, þriggja, þremur, fjögurra</li>
      <li>PRON: það, því, þess, hvað, þau, annað, sér, hverju, sig, annars</li>
      <li>PROPN: Íslands, Ríó, Ísland, Alþingi, Íslandi, Frakklandi, Alþingis, Evrópusambandinu, Evrópusambandið, Evrópumótinu</li>
      <li>VERB: gert, farið, keppt, sagt, tekið, haldið, komið, sett, miðað, lagt</li>
      <li>VERB-Part: gert, farið, keppt, sagt, tekið, haldið, komið, sett, miðað, lagt</li>
      <li>X: nýafstöðu</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: síðustu, sammála, næstu, bestu, fyrstu, mismunandi, gömlu, fatlaðra, íslenskra, helstu</li>
      <li>ADP: við</li>
      <li>ADV: svona, fleiri, mörgum, mikil, margir, þannig, Hvernig, Næstum, einum, heiða</li>
      <li>AUX-Fin: eru, hafa, erum, voru, höfum, séu, getum, hafi, viljum, geta</li>
      <li>DET: þeim, þessum, þessi, allir, hvaða, öllum, þau, þessar, þeirra, þær</li>
      <li>NOUN: menn, m, ára, ár, leikunum, ráðherra, upplýsingar, efnum, mál, árum</li>
      <li>NOUN-Fin: bönnum</li>
      <li>NUM: tveimur, tvö, fjögur, þrjú, fimm, fjórum, tvær, tíu, átta, þremur</li>
      <li>PRON: við, okkur, þeir, þau, þær, okkar, þeim, sér, sig, þeirra</li>
      <li>PROPN: Ólympíuleikunum, Íslendingar, Ólympíuleikum, Ólympíuleikarnir, Frakkar, Íslendinga, Ólympíuleikana, Bandaríkjunum, Ólympíuleikar, KR-ingar</li>
      <li>VERB: eigum, þurfum, eiga, verðum, verða, koma, sjáum, komu, Gripið, vitum</li>
      <li>VERB-Fin: eigum, þurfum, eiga, verðum, verða, koma, sjáum, komu, Gripið, vitum</li>
      <li>VERB-Part: komin, settir, sett, teknar, haldnir, komnir, settar, tekin, afgreidd, gerð</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: virðulegi, hægt, gott, rétt, sammála, fyrsta, miklu, síðasta, mikilvægt, sjálfsögðu</li>
      <li>ADJ-Part: rökstutt</li>
      <li>ADP-Fin: á</li>
      <li>ADV: svona, rétt, meira, meiri, mikið, veginn, dæmis, mikinn, skýrt, ytra</li>
      <li>ADV-Fin: lýtur</li>
      <li>AUX-Fin: er, var, sé, hefur, væri, hefði, vil, hafi, hef, má</li>
      <li>AUX-Part: verið, haft</li>
      <li>DET: þetta, það, þessu, allt, eitthvað, ekkert, þessa, því, þá, meiri</li>
      <li>NOUN: forseti, þingmaður, fólk, máli, mál, tíma, málið, ráðherra, frú, herra</li>
      <li>NOUN-Fin: Innheimtu, leiðir</li>
      <li>NOUN-Part: liðið, orðið</li>
      <li>NUM: einn, eitt, einu, tvennt, þrettán</li>
      <li>PRON: það, ég, því, þess, hann, mér, hún, hvað, sér, mig</li>
      <li>PROPN: Íslands, Hrafnhildur, Ríó, Ísland, Alþingi, Íslandi, Blöndal, Bryndís, Frakklandi, Þór</li>
      <li>VERB: hringir, held, kemur, á, finnst, þarf, þakka, verður, sagði, kom</li>
      <li>VERB-Fin: hringir, held, kemur, á, finnst, þarf, þakka, verður, sagði, kom</li>
      <li>VERB-Part: gert, farið, keppt, sagt, tekið, haldið, kominn, komið, miðað, lagt</li>
      <li>X: final-four, nýafstöðu, skyttunar</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: fyrsta, mikla, besta, fyrra, góða, næstu, nýjan, síðustu, ákveðna, síðasta</li>
      <li>ADV: allt, svona, veginn, fleiri, meiri, mikil, mikinn, allan, allar, mikið</li>
      <li>DET: þetta, þá, það, meira, þessa, eitthvað, alla, allt, þann, einhvern</li>
      <li>NOUN: dag, mál, ár, málið, árið, tíma, leið, kvöld, morgun, ráð</li>
      <li>NUM: tvö, þús., fjögur, þrjú, fimm, fjóra, tvær, tvo, tíu, þrjá</li>
      <li>PRON: það, mig, sig, hvað, hana, okkur, annað, þau, þær, hann</li>
      <li>PROPN: Chusovitina, Ólympíuleikana, Evrópusambandið, Hrafnhildi, EES-samninginn, Evrópumótið, Ólympíuleika, Alþingi, Sjálfstæðisflokkinn, Íbúðalánasjóð</li>
      <li>VERB: afgreidda, dekkaðan, heita, kallaða, lánað, lánaða, staðfesta, upplýst, viðurkennt</li>
      <li>VERB-Part: afgreidda, dekkaðan, kallaða, lánað, lánaða, staðfesta, upplýst, viðurkennt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: miklu, sjálfsögðu, síðasta, síðustu, næsta, nógu, sama, minnsta, næstu, fyrsta</li>
      <li>ADV: svona, mörgum, öllum, þannig, því, Næstum, einum, nógu, sinni, sjónarmiðum</li>
      <li>DET: þessu, þeim, þessum, því, þessari, einu, öllum, þeirri, einhverju, öllu</li>
      <li>NOUN: máli, móti, raun, þingmanni, ári, tíma, stað, lagi, leikunum, leyti</li>
      <li>NUM: tveimur, fjórum, þremur, fimm, níu, sjö, tíu, þús., /100, 1:00,33</li>
      <li>PRON: því, mér, sér, okkur, þeim, sínum, hverju, sinni, öðrum, honum</li>
      <li>PROPN: Ríó, Ólympíuleikunum, Íslandi, Frakklandi, Ólympíuleikum, Alþingi, Evrópusambandinu, Danmörku, Brasilíu, Evrópumótinu</li>
      <li>VERB-Part: sögðu, komandi, kveðnu, liðnum, loknu, loknum, skoruðum, tilskildu, vaxandi</li>
      <li>X: nýafstöðu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: fatlaðra, íslenskra, fyrri, gömlu, heils, lengri, íslenskrar, eigin, góðs, vinstri</li>
      <li>ADV: annars, dæmis, vegar, þess, hagfræðilega, heiða</li>
      <li>DET: alls, hins, þeirra, þess, þessa, allra, einhvers, einhverra, margra, meiri</li>
      <li>NOUN: m, ára, dæmis, vegar, staðar, þingmanns, ráðherra, karla, konar, manna</li>
      <li>NUM: tveggja, þriggja, fjögurra, tuttugu, U-21, þús., fjórtán, nítján, sextán, sjö</li>
      <li>PRON: þess, annars, okkar, hans, hvers, þeirra, hennar, annarra, sinna, síns</li>
      <li>PROPN: Íslands, Alþingis, Evrópu, Danmerkur, Sjálfstæðisflokksins, Stjörnunnar, pírata, Frakklands, Framsóknarflokksins, Samtaka</li>
      <li>VERB-Part: skapaðar</li>
      <li>X: skyttunar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: virðulegi, hægt, sammála, rétt, gott, mikilvægt, ljóst, erfitt, góð, sama</li>
      <li>ADJ-Part: rökstutt</li>
      <li>ADP: við</li>
      <li>ADV: allt, rétt, meira, allir, hvað, svona, eins, ekkert, hverjir, margir</li>
      <li>AUX-Part: verið, haft</li>
      <li>DET: þetta, það, allt, ekkert, þessi, eitthvað, allir, sú, sá, eitt</li>
      <li>NOUN: forseti, menn, þingmaður, fólk, frú, herra, mál, ráðherra, klukkan, málið</li>
      <li>NOUN-Part: liðið, orðið</li>
      <li>NUM: 0, 17, 18, 16, 15, 19, þrír, 35, 40, 5</li>
      <li>PRON: ég, það, við, hann, hún, þeir, hvað, þau, þær, annað</li>
      <li>PROPN: Hrafnhildur, Ísland, Íslendingar, Alþingi, Bryndís, Blöndal, Jón, Pétur, Rún, Lúthersdóttir</li>
      <li>VERB: gert, farið, keppt, sagt, komin, sett, tekið, haldið, kominn, komið</li>
      <li>VERB-Part: gert, farið, keppt, sagt, komin, sett, tekið, haldið, kominn, komið</li>
      <li>X: final-four</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: virðulegi, fyrsta, síðustu, síðasta, íslenska, næsta, næstu, besta, fyrri, vinstri</li>
      <li>ADV: meira, fleiri, meiri, ytra, þyngra, endilega, eðlilega, hagfræðilega, miklu, minna</li>
      <li>DET: meiri, meira, fleiri, eina, eini, mesta, einu, fleira, miklu, minna</li>
      <li>NOUN: málið, árið, leikunum, klukkan, ríkið, landinu, svarið, liðinu, liðið, tímann</li>
      <li>PROPN: Ólympíuleikunum, Chusovitina, Evrópusambandinu, Ólympíuleikarnir, Evrópusambandið, Evrópumótinu, Ólympíuleikana, Bandaríkjunum, EES-samningnum, Sjálfstæðisflokksins</li>
      <li>VERB: heita</li>
      <li>X: skyttunar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: hægt, gott, rétt, miklu, mikilvægt, sjálfsögðu, ljóst, erfitt, góð, nógu</li>
      <li>ADV: rétt, mikil, mikið, mörgum, veginn, dæmis, mikinn, skýrt, margir, mikla</li>
      <li>DET: mikið, margir, mikil, miklu, margt, mörgu, einu, marga, margra, mörgum</li>
      <li>NOUN: forseti, menn, þingmaður, mál, ráðherra, fólk, tíma, máli, m, frú</li>
      <li>NUM: tvennt</li>
      <li>PRON: maður, manni</li>
      <li>PROPN: Íslands, Hrafnhildur, Ríó, Ísland, Alþingi, Íslandi, Blöndal, Íslendingar, Bryndís, Frakklandi</li>
      <li>VERB: búið, Tilkynnt, afmörkuð, tiltekinn</li>
      <li>X: final-four, nýafstöðu</li>
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
      <li>ADJ: fyrri, betri, minni, betra, fyrra, hærra, lengra, lengri, nánari, síðari</li>
      <li>ADP: meira</li>
      <li>ADV: betur, heldur, frekar, fyrr, miður, síður, lengur, síðar, meira, lengra</li>
      <li>DET: meiri, meira, fleiri, fleira, minna, minni, fleiru, fleirum, færri, meiru</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: virðulegi, hægt, sammála, gott, rétt, miklu, sama, íslenska, mikilvægt, sjálfsögðu</li>
      <li>ADV: þá, hvað, enda, frv., s., svona, sem, ósköp, hér, rétt</li>
      <li>DET: mikið, margir, mikil, miklu, eina, margt, einu, mörgu, marga, eini</li>
      <li>NOUN: Frú, samtaka, sænsku</li>
      <li>NUM: tvennt</li>
      <li>PART: bara, aðeins</li>
      <li>VERB: búið, Tilkynnt, afmörkuð, heita, komandi, krefjandi, tiltekinn</li>
      <li>X: nýafstöðu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: fyrsta, síðustu, síðasta, næsta, næstu, besta, fyrstu, bestu, minnsta, best</li>
      <li>ADV: fyrst, helst, síst, síðast, best, fremst, næst, lengst, nánast, oftast</li>
      <li>DET: mesta, mestu, flestir, mest, mestum, flesta, flestra, flestum, mestan, mestur</li>
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
      <li>NOUN-Fin: Innheimtu</li>
      <li>VERB-Fin: Gripið, samanber, fyrirgefið, Afsaka, athugið, bið, fyrirgef, komið, leyfðu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADP-Fin: á</li>
      <li>ADV: varðar, kunna, líkar, lýtur, tekur, verður, viðkemur</li>
      <li>ADV-Fin: lýtur</li>
      <li>AUX: er, var, eru, hefur, hafa, erum, vil, voru, hef, má</li>
      <li>AUX-Fin: er, var, eru, hefur, hafa, erum, vil, voru, hef, má</li>
      <li>NOUN-Fin: bönnum, leiðir</li>
      <li>VERB: hringir, held, kemur, á, finnst, þakka, þarf, verður, sagði, segir</li>
      <li>VERB-Fin: hringir, held, kemur, á, finnst, þarf, þakka, verður, sagði, kom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>ADV: telji</li>
      <li>AUX: sé, hafi, væri, hefði, séu, geti, verði, gæti, mundi, séum</li>
      <li>AUX-Fin: sé, væri, hafi, hefði, séu, geti, verði, gæti, mundi, séum</li>
      <li>VERB: verði, eigi, ætti, fari, þurfi, ættum, komi, yrði, eigum, fái</li>
      <li>VERB-Fin: verði, eigi, ætti, fari, þurfi, ættum, komi, yrði, eigum, fái</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADV-Part: útfært</li>
      <li>AUX: var, væri, hefði, voru, mundi, gæti, hafði, væru, hefðu, vildi</li>
      <li>AUX-Fin: var, væri, hefði, voru, gæti, mundi, hafði, væru, hefðu, vildi</li>
      <li>AUX-Part: verið</li>
      <li>VERB: sagði, kom, ætti, fór, tók, vann, varð, átti, velti, nefndi</li>
      <li>VERB-Fin: sagði, kom, ætti, fór, vann, tók, varð, átti, velti, gerði</li>
      <li>VERB-Part: Gripið, búið, búin, búinn, merktir, búnir, fært, gert, meiddur, orðið</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADP-Fin: á</li>
      <li>ADV: varðar, kunna, líkar, lýtur, tekur, telji, verður, viðkemur</li>
      <li>ADV-Fin: lýtur</li>
      <li>AUX: er, eru, sé, hefur, hafi, hafa, erum, vil, hef, má</li>
      <li>AUX-Fin: er, eru, sé, hefur, hafi, hafa, erum, vil, hef, má</li>
      <li>NOUN-Fin: Innheimtu, bönnum, leiðir</li>
      <li>VERB: hringir, held, kemur, á, finnst, þakka, þarf, verður, eigum, verði</li>
      <li>VERB-Fin: hringir, held, kemur, á, finnst, þarf, þakka, verður, eigum, verði</li>
      <li>VERB-Part: fljótandi, bindandi, farandi, fræðandi, komandi, ríkjandi, varðandi, vaxandi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Part: rökstutt</li>
      <li>ADP-Fin: á</li>
      <li>ADV-Fin: lýtur</li>
      <li>ADV-Inf: segja</li>
      <li>AUX-Fin: er, var, eru, sé, hefur, væri, hafi, hafa, hefði, erum</li>
      <li>AUX-Inf: vera, hafa, geta, verða, vilja, mundu</li>
      <li>AUX-Part: verið, haft</li>
      <li>AUX-Sup: verið, haft, viljað, getað, mátt</li>
      <li>NOUN-Fin: Innheimtu, bönnum, leiðir</li>
      <li>NOUN-Inf: þjónusta</li>
      <li>NOUN-Part: liðið, orðið</li>
      <li>VERB-Fin: hringir, held, kemur, á, þarf, þakka, verður, sagði, eigum, verði</li>
      <li>VERB-Inf: gera, fara, taka, koma, segja, vinna, sjá, fá, ræða, spyrja</li>
      <li>VERB-Part: varðandi, gert, farið, keppt, sagt, komin, sett, tekið, haldið, kominn</li>
      <li>VERB-Sup: sagt, tekið, komið, gert, farið, orðið, séð, átt, reynt, spilað</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mid
    <ul>
      <li>VERB-Fin: finnst, virðist, hefst, komst, gerist, komist, snýst, fannst, sýnist, komust</li>
      <li>VERB-Inf: komast, fylgjast, horfast, gerast, nálgast, búast, breytast, hefjast, kljást, minnast</li>
      <li>VERB-Part: hafist, komist, ráðist, ætlast, búist, forðast</li>
      <li>VERB-Sup: gerst, komist, fundist, þróast, aukist, borist, breyst, búist, hugnast, kynnst</li>
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
      <li>ADJ: sama</li>
      <li>ADV: þá</li>
      <li>DET: þetta, þessu, það, þeim, þessum, þessi, þá, þessa, því, þessari</li>
      <li>PRON: það, sjálfu, sama, slíkt, því, sjálf, sjálfur, slíku, sömu, þess</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: annað, jafnrík, önnur</li>
      <li>ADV: ekkert, allt</li>
      <li>DET: allt, eitthvað, ekkert, allir, alla, öllum, einhvern, alls, öll, einhver</li>
      <li>NOUN: Frú</li>
      <li>PRON: annað, annars, öðrum, aðrir, öðru, annarra, aðrar, aðra, hver, önnur</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: hvað</li>
      <li>DET: hvaða, hvað, hver, hverju, hverjir, hvers, hvert</li>
      <li>PRON: hvað, hverju, hvers, hver, hverjar, hvaða, hverjir, hvern, hverja, hvert</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADJ: hægri</li>
      <li>ADP: við</li>
      <li>ADV: þá</li>
      <li>DET: það, þær, því, þeim, þau, þeir, þess, þeirra, þá</li>
      <li>PRON: það, ég, við, því, þess, hann, mér, hún, sér, okkur</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: 2., 1., 3., 5., 8., 9., 11., 4., 6., 10.</li>
      <li>DET: einn, eitt, ein, einu</li>
      <li>NOUN: þúsund</li>
      <li>NUM: 100, 2, 200, 50, 2012, 3, 2016, 2010, 4, 10</li>
      <li>PUNCT: ”</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: 230, 34, þúsund</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADP: við</li>
      <li>AUX-Fin: er, erum, vil, hef, höfum, getum, var, get, viljum, hefði</li>
      <li>NOUN-Fin: bönnum</li>
      <li>PRON: ég, við, mér, okkur, mig, okkar, mín</li>
      <li>VERB-Fin: held, þakka, eigum, þurfum, tel, veit, hef, verðum, tek, verð</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: varst, getur, séuð, vilt</li>
      <li>NOUN-Fin: Innheimtu</li>
      <li>PRON: þið, þú, ykkur, þér</li>
      <li>VERB-Fin: Gripið, samanber, fyrirgefið, Afsaka, Munið, Vitið, aflar, athugið, bið, eyðir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP-Fin: á</li>
      <li>ADV-Fin: lýtur</li>
      <li>AUX-Fin: er, var, eru, sé, hefur, væri, hafa, hafi, voru, hefði</li>
      <li>NOUN-Fin: leiðir</li>
      <li>VERB-Fin: hringir, kemur, á, finnst, þarf, verður, sagði, verði, segir, kom</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADV: Djokovic, Millar</li>
          <li>PROPN: Barcelona, Djokovic, Randers, Alisher, Williams, Moore, Serena, Swahn, Antwerpen, Federer</li>
          <li>X: Molde, 2016, Eidur, FK, i, se, your, 22, 3, 8</li>
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
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: hafa, geta, vilja, munu, verða, mega, skulu, vera, fá.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-Nom (18)</li>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Nom (22)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (22)</li>
      <li>VERB-Fin--NOUN-Dat (42)</li>
      <li>VERB-Fin--NOUN-Gen (2)</li>
      <li>VERB-Fin--NOUN-Nom (963)</li>
      <li>VERB-Fin--PRON (47)</li>
      <li>VERB-Fin--PRON-Acc (74)</li>
      <li>VERB-Fin--PRON-Dat (155)</li>
      <li>VERB-Fin--PRON-Gen (5)</li>
      <li>VERB-Fin--PRON-Nom (1831)</li>
      <li>VERB-Inf--NOUN-Acc (22)</li>
      <li>VERB-Inf--NOUN-Dat (3)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Nom (121)</li>
      <li>VERB-Inf--PRON (5)</li>
      <li>VERB-Inf--PRON-Acc (9)</li>
      <li>VERB-Inf--PRON-Dat (3)</li>
      <li>VERB-Inf--PRON-Nom (282)</li>
      <li>VERB-Part--NOUN-Acc (9)</li>
      <li>VERB-Part--NOUN-Dat (30)</li>
      <li>VERB-Part--NOUN-Gen (1)</li>
      <li>VERB-Part--NOUN-Nom (184)</li>
      <li>VERB-Part--PRON (2)</li>
      <li>VERB-Part--PRON-Acc (4)</li>
      <li>VERB-Part--PRON-Dat (18)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Part--PRON-Nom (109)</li>
      <li>VERB-Sup--NOUN-Acc (4)</li>
      <li>VERB-Sup--NOUN-Dat (3)</li>
      <li>VERB-Sup--NOUN-Nom (163)</li>
      <li>VERB-Sup--PRON (6)</li>
      <li>VERB-Sup--PRON-Acc (3)</li>
      <li>VERB-Sup--PRON-Dat (6)</li>
      <li>VERB-Sup--PRON-Nom (303)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (7)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Nom (3)</li>
      <li>VERB--PRON-Acc (2)</li>
      <li>VERB--PRON-Dat (3)</li>
      <li>VERB--PRON-Nom (2)</li>
      <li>VERB-Fin--NOUN-Acc (620)</li>
      <li>VERB-Fin--NOUN-Dat (132)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(á) (1)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(í) (1)</li>
      <li>VERB-Fin--NOUN-Gen (14)</li>
      <li>VERB-Fin--NOUN-Nom (61)</li>
      <li>VERB-Fin--PRON (4)</li>
      <li>VERB-Fin--PRON-Acc (171)</li>
      <li>VERB-Fin--PRON-Dat (73)</li>
      <li>VERB-Fin--PRON-Gen (7)</li>
      <li>VERB-Fin--PRON-Nom (84)</li>
      <li>VERB-Inf--NOUN-Acc (644)</li>
      <li>VERB-Inf--NOUN-Dat (164)</li>
      <li>VERB-Inf--NOUN-Gen (28)</li>
      <li>VERB-Inf--NOUN-Nom (27)</li>
      <li>VERB-Inf--PRON-Acc (167)</li>
      <li>VERB-Inf--PRON-Dat (66)</li>
      <li>VERB-Inf--PRON-Gen (5)</li>
      <li>VERB-Inf--PRON-Nom (29)</li>
      <li>VERB-Part--NOUN-Acc (62)</li>
      <li>VERB-Part--NOUN-Dat (6)</li>
      <li>VERB-Part--NOUN-Dat-ADP(með) (1)</li>
      <li>VERB-Part--NOUN-Nom (12)</li>
      <li>VERB-Part--PRON-Acc (6)</li>
      <li>VERB-Part--PRON-Nom (10)</li>
      <li>VERB-Sup--NOUN (1)</li>
      <li>VERB-Sup--NOUN-Acc (120)</li>
      <li>VERB-Sup--NOUN-Dat (28)</li>
      <li>VERB-Sup--NOUN-Gen (6)</li>
      <li>VERB-Sup--NOUN-Nom (2)</li>
      <li>VERB-Sup--PRON (1)</li>
      <li>VERB-Sup--PRON-Acc (57)</li>
      <li>VERB-Sup--PRON-Dat (23)</li>
      <li>VERB-Sup--PRON-Gen (3)</li>
      <li>VERB-Sup--PRON-Nom (10)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Dat (3)</li>
      <li>VERB-Fin--NOUN-Acc (8)</li>
      <li>VERB-Fin--NOUN-Dat (26)</li>
      <li>VERB-Fin--NOUN-Nom (6)</li>
      <li>VERB-Fin--PRON-Acc (10)</li>
      <li>VERB-Fin--PRON-Dat (38)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN-Acc (18)</li>
      <li>VERB-Inf--NOUN-Dat (26)</li>
      <li>VERB-Inf--NOUN-Dat-ADP(til) (1)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--NOUN-Nom (3)</li>
      <li>VERB-Inf--PRON-Acc (7)</li>
      <li>VERB-Inf--PRON-Dat (31)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN-Dat (3)</li>
      <li>VERB-Part--PRON-Dat (3)</li>
      <li>VERB-Sup--NOUN-Acc (2)</li>
      <li>VERB-Sup--NOUN-Dat (2)</li>
      <li>VERB-Sup--PRON-Acc (1)</li>
      <li>VERB-Sup--PRON-Dat (21)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>compound:prt</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:poss</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
