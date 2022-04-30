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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udis_modern29)<br />
Download all treebanks: [UD 2.9](/#download)

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

UD_Icelandic-Modern is a conversion of the modern additions to the Icelandic Parsed Historical Corpus (IcePaHC) to the Universal Dependencies scheme.

The conversion was done using [UDConverter](https://github.com/thorunna/UDConverter).




The modern additions to the Icelandic Parsed Historical Corpus (IcePaHC) is a 92,939 word corpus which includes texts from the 21st century. These texts were originally manually parsed according to the Penn Parsed Corpora of Historical English (PPCHE) annotation scheme, as used in IcePaHC. These parsed texts were then automatically converted to the Universal Dependencies scheme to create UD_Icelandic-Modern. The texts are unprepared parliament speeches by four Icelandic members of parliament in the period 2011–2015 and sports news text from two reporters at the Icelandic National Broadcasting Service (RÚV) from 2016.

Each sentence ID (`sent_id`) in UD_Icelandic-Modern carries the following information:

`ALTHINGI_BO_2015_G-33-4647803,.1`

- Text origin (`ALTHINGI`)
- Speaker (`BO`)
- Publication year of the text (`2015`)
- Name of original file (`G-33-4647803`)
- Sentence index within file (`.1`)

Along with sentence IDs within the UD corpus, each sentence contains an `X_ID` flag, indicating the original sentence(s) in IcePaHC. This is useful as some sentences in the UD scheme have more than one original sentence in IcePaHC. As sentence IDs are currently not represented in the modern-text IcePaHC, this flag is left blank, as `ID_MISSING` for each original sentence.


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

72,917 words in total

- `ALTHINGI_BO_2013` - 16 sentences
- `ALTHINGI_BO_2014` - 174 sentences
- `ALTHINGI_BO_2015` - 284 sentences
- `ALTHINGI_HHG_2013` - 1215 sentences
- `ALTHINGI_SJS_2013` - 1458 sentences
- `ALTHINGI_TKG_2011` - 992 sentences
- `RUV_ESP_2016` - 580 sentences
- `RUV_TGS_2016` - 657 sentences

**Development data**

10,007 words in total

- `ALTHINGI_BO_2013` - 16 sentences
- `ALTHINGI_BO_2014` - 43 sentences
- `ALTHINGI_BO_2015` - 284 sentences
- `ALTHINGI_HHG_2013` - 192 sentences
- `ALTHINGI_SJS_2013` - 75 sentences
- `ALTHINGI_TKG_2011` - 53 sentences
- `RUV_ESP_2016` - 66 sentences
- `RUV_TGS_2016` - 55 sentences


**Testing data**

10,015 words in total

- `ALTHINGI_BO_2013` - 60
- `ALTHINGI_BO_2014` - 309
- `ALTHINGI_BO_2015` - 132
- `ALTHINGI_HHG_2013` - 45
- `ALTHINGI_SJS_2013` - 67
- `ALTHINGI_TKG_2011` - 41
- `RUV_ESP_2016` - 38
- `RUV_TGS_2016` - 76


## Acknowledgments

This project was funded by The Strategic Research and Development Programme for Language Technology, grant no. 180020-5301.

The modern additions to the Icelandic Parsed Historical Corpus (IcePaHC) are available [here](https://github.com/antonkarl/icecorpus/tree/master/finished/additions2019).

Morphological features were generated using ABLTagger, a PoS tagger for Icelandic, developed by Steinþór Steingrímsson, Örvar Kárason and Hrafn Loftsson and available [here](https://github.com/steinst/ABLTagger).



# Statistics of UD Icelandic Modern

## POS Tags

[ADJ](is_modern-pos-ADJ.html) – [ADP](is_modern-pos-ADP.html) – [ADV](is_modern-pos-ADV.html) – [AUX](is_modern-pos-AUX.html) – [CCONJ](is_modern-pos-CCONJ.html) – [DET](is_modern-pos-DET.html) – [INTJ](is_modern-pos-INTJ.html) – [NOUN](is_modern-pos-NOUN.html) – [NUM](is_modern-pos-NUM.html) – [PART](is_modern-pos-PART.html) – [PRON](is_modern-pos-PRON.html) – [PROPN](is_modern-pos-PROPN.html) – [PUNCT](is_modern-pos-PUNCT.html) – [SCONJ](is_modern-pos-SCONJ.html) – [VERB](is_modern-pos-VERB.html) – [X](is_modern-pos-X.html)

## Features

[Case](is_modern-feat-Case.html) – [Definite](is_modern-feat-Definite.html) – [Degree](is_modern-feat-Degree.html) – [Foreign](is_modern-feat-Foreign.html) – [Gender](is_modern-feat-Gender.html) – [Mood](is_modern-feat-Mood.html) – [Number](is_modern-feat-Number.html) – [Tense](is_modern-feat-Tense.html) – [VerbForm](is_modern-feat-VerbForm.html)

## Relations

[acl](is_modern-dep-acl.html) – [acl:relcl](is_modern-dep-acl-relcl.html) – [advcl](is_modern-dep-advcl.html) – [advmod](is_modern-dep-advmod.html) – [amod](is_modern-dep-amod.html) – [appos](is_modern-dep-appos.html) – [aux](is_modern-dep-aux.html) – [case](is_modern-dep-case.html) – [cc](is_modern-dep-cc.html) – [ccomp](is_modern-dep-ccomp.html) – [compound:prt](is_modern-dep-compound-prt.html) – [conj](is_modern-dep-conj.html) – [cop](is_modern-dep-cop.html) – [csubj](is_modern-dep-csubj.html) – [dep](is_modern-dep-dep.html) – [det](is_modern-dep-det.html) – [discourse](is_modern-dep-discourse.html) – [expl](is_modern-dep-expl.html) – [fixed](is_modern-dep-fixed.html) – [flat:foreign](is_modern-dep-flat-foreign.html) – [flat:name](is_modern-dep-flat-name.html) – [iobj](is_modern-dep-iobj.html) – [mark](is_modern-dep-mark.html) – [nmod](is_modern-dep-nmod.html) – [nmod:poss](is_modern-dep-nmod-poss.html) – [nsubj](is_modern-dep-nsubj.html) – [nummod](is_modern-dep-nummod.html) – [obj](is_modern-dep-obj.html) – [obl](is_modern-dep-obl.html) – [parataxis](is_modern-dep-parataxis.html) – [punct](is_modern-dep-punct.html) – [root](is_modern-dep-root.html) – [vocative](is_modern-dep-vocative.html) – [xcomp](is_modern-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 6928 sentences, 158134 tokens and 158150 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 12812 tokens (8%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 122 types of words that contain both letters and punctuation. Examples: hv., hæstv., þm., <percent/>, gr., H., kr., o., þús., frv., s., a., k., m., allsherjar-, kl., umr., efnahags-, umhverfis-, EES-samningnum, St., mín., nr., J., KR-ingar, R., sek., EES-samninginn, KR-inga, Pepsi-deildinni, fl., áfengis-, Inkasso-deildarinnar, Saint-Germain, Twitter-síðu, b., bls., gogn.island.is, míní-samningaleið, sjávarútvegs-, skulda-, u., þ., 110<percent/>-leiðina, 110<percent/>leiðina, 1<closeparen/>, 2<closeparen/>, 3<closeparen/>, 99xCOM_dashx66, A-landsliðs</li>
</ul>

<ul>
<li>This corpus contains 16 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 7 types of multi-word tokens. Examples: eignaupplýsingar, -útisigur, /s, Afsakaðu, fyrirgefðu, háttaði, nefndum.</li>
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
<li>This corpus contains 39 lemmas tagged as determiners (DET): allmikill, alls, allur, annaðhvort, báðir, bæði, dálítill, einhver, einn, enginn, fullmikill, fáeinir, fár, hinn, hvaða, hver, hvor, hvort, hún, lítill, margur, mikill, mikið, mismikill, mjög, neinn, nokkur, nógur, sumur, svolítill, svolítið, sá, talsverður, umtalsverður, öllsamall, örlítill, ýmis, það, þessi</li>
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
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>ADV: segja</li>
    <li>AUX: vera, hafa, geta, verða, vilja</li>
    <li>VERB: gera, fara, taka, koma, segja, vinna, sjá, fá, ræða, spyrja</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADV: útfært</li>
    <li>AUX: verið, haft, viljað, getað, mátt</li>
    <li>VERB: varðandi, gert, sagt, farið, tekið, komið, gripið, orðið, séð, keppt</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>PRON: það</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADV: heiða, mín., sjónarmiðum, árum, þingmenn</li>
      <li>NOUN: menn, m, ára, leikunum, mál, ár, upplýsingar, efnum, þingmenn, málum</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADV: veginn, dæmis, vegar, frumvarp, leið, sinni, tímann, tíð</li>
      <li>DET: hvaða, eitt, einu, einn, 1, eina, ein, eini, einni, eins</li>
      <li>NOUN: forseti, þingmaður, fólk, ráðherra, máli, tíma, mál, frú, málið, herra</li>
      <li>NUM: einn, eitt, 1, einu</li>
      <li>PRON: það</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: hv., fyrsta, mikla, besta, hæstv., fyrra, góða, næstu, ákveðna, gott</li>
      <li>ADV: allt, veginn, fleiri, meiri, mikil, mikinn, mikla, allan, allar, gríðarlega</li>
      <li>DET: þetta, það, þá, þessa, þann, allt, þessar, þær, þessi, eitthvað</li>
      <li>NOUN: mál, ár, dag, málið, árið, leið, tíma, morgun, kvöld, ráð</li>
      <li>NUM: 2012, 2010, tvö, 2008, 2009, 2011, fjögur, 100, 2014, þrjú</li>
      <li>PRON: það, mig, sig, hvað, hana, okkur, annað, þau, þær, hann</li>
      <li>VERB-Part: upplýst, afgreidda, kallaða, lánað, lánaða, sameinað, sett, viðurkennt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: hv., miklu, sjálfsögðu, síðasta, síðustu, næsta, nógu, sama, hæstv., minnsta</li>
      <li>ADV: mörgum, öllum, því, einum, miklu, mín., sinni, sjónarmiðum, tíð, árum</li>
      <li>DET: þessu, þeim, þessum, því, þessari, þeirri, öllum, einu, hinu, einhverju</li>
      <li>NOUN: máli, móti, raun, þingmanni, ári, tíma, stað, lagi, leikunum, leyti</li>
      <li>NUM: tveimur, fjórum, þremur, 4, sjö, 100, 2004, 2009, 28, fimm</li>
      <li>PRON: því, mér, sér, okkur, þeim, sínum, hverju, sinni, öðrum, honum</li>
      <li>VERB-Part: sögðu, komandi, kveðnu, liðnum, loknu, loknum, skoruðum, tilskildu, vaxandi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: hv., hæstv., íslenskra, fyrri, eigin, heils, lengri, vinstri, góðs, gömlu</li>
      <li>ADV: annars, dæmis, vegar, þess, heiða</li>
      <li>DET: hins, þeirra, þess, þessa, alls, allra, einhvers, þessara, meiri, þeirrar</li>
      <li>NOUN: m, ára, dæmis, vegar, staðar, þingmanns, ráðherra, karla, konar, manna</li>
      <li>NUM: 100, 200, 50, tveggja, 16, þriggja, 8, 18, fjögurra, 19</li>
      <li>PRON: þess, annars, okkar, hans, hvers, þeirra, hennar, annarra, sinna, síns</li>
      <li>VERB-Part: skapaðar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: hv., virðulegi, hægt, sammála, hæstv., rétt, gott, mikilvægt, ljóst, erfitt</li>
      <li>ADV: allt, hvað, allir, margir, mikið, það, ekkert, fleiri, frumvarp, hv.</li>
      <li>DET: þetta, það, þessi, sú, sá, þeir, allir, allt, eitthvað, ekkert</li>
      <li>NOUN: forseti, menn, þingmaður, frú, fólk, herra, mál, ráðherra, málið, klukkan</li>
      <li>NUM: 2, 0, 17, 3, 18, 16, 50, tvö, þrír, 15</li>
      <li>PRON: ég, það, við, hann, hún, þeir, hvað, þau, þær, annað</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: veginn, dæmis, vegar, frumvarp, heiða, leið, mín., sinni, sjónarmiðum, tímann</li>
      <li>NOUN: forseti, menn, þingmaður, mál, ráðherra, fólk, tíma, máli, m, frú</li>
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
      <li>ADJ: fyrri, betri, betra, minni, fyrra, hærra, lengri, nánari, síðari, vægari</li>
      <li>ADV: eins, heldur, betur, frekar, áður, fyrr, miður, síður, lengur, síðar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: hv., virðulegi, hæstv., hægt, sammála, gott, rétt, miklu, sama, mikilvægt</li>
      <li>ADV: þá, hér, bara, svo, þar, nú, þannig, mjög, alveg, hvernig</li>
      <li>DET: allt, eitthvað, ekkert, meiri, meira, mikið, allir, alla, öllum, alls</li>
      <li>PART: bara, aðeins</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: fyrsta, síðasta, síðustu, næsta, besta, næstu, bestu, fyrstu, minnsta, helstu</li>
      <li>ADV: fyrst, helst, síst, best, síðast, fremst, næst, lengst, mest, minnst</li>
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
      <li>VERB-Inf: samanber, fyrirgefið, Afsaka, fyrirgef, komið</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: varðar, kunna, líkar, lýtur, tekur, verður, viðkemur</li>
      <li>AUX: er, var, eru, hefur, hafa, erum, vil, voru, hef, má</li>
      <li>VERB: hringir, held, kemur, á, þakka, finnst, þarf, verður, sagði, fer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>ADV: telji</li>
      <li>AUX: sé, væri, hafi, hefði, séu, geti, verði, mundi, gæti, séum</li>
      <li>VERB: verði, eigi, ætti, fari, þurfi, ættum, komi, komist, yrði, hefði</li>
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
      <li>AUX: var, verið, væri, hefði, voru, mundi, gæti, hafði, haft, væru</li>
      <li>AUX-Part: verið, haft, viljað, getað, mátt</li>
      <li>VERB: gert, sagði, sagt, farið, tekið, kom, komið, ætti, gripið, orðið</li>
      <li>VERB-Part: gert, sagt, farið, tekið, komið, gripið, orðið, séð, keppt, sett</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADV: varðar, kunna, líkar, lýtur, tekur, telji, verður, viðkemur</li>
      <li>AUX: er, eru, sé, hefur, hafa, hafi, erum, vil, hef, höfum</li>
      <li>VERB: hringir, held, kemur, á, varðandi, þakka, finnst, þarf, verður, eigum</li>
      <li>VERB-Part: varðandi, Talandi, fljótandi, komandi, bindandi, farandi, fræðandi, fækkandi, færandi, gangandi</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
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
      <li>VERB--NOUN-Acc (26)</li>
      <li>VERB--NOUN-Dat (46)</li>
      <li>VERB--NOUN-Nom (2020)</li>
      <li>VERB--PRON (94)</li>
      <li>VERB--PRON-Acc (108)</li>
      <li>VERB--PRON-Dat (308)</li>
      <li>VERB--PRON-Gen (8)</li>
      <li>VERB--PRON-Nom (3730)</li>
      <li>VERB-Inf--NOUN-Acc (42)</li>
      <li>VERB-Inf--NOUN-Dat (4)</li>
      <li>VERB-Inf--NOUN-Gen (2)</li>
      <li>VERB-Inf--NOUN-Nom (224)</li>
      <li>VERB-Inf--PRON (8)</li>
      <li>VERB-Inf--PRON-Acc (18)</li>
      <li>VERB-Inf--PRON-Dat (6)</li>
      <li>VERB-Inf--PRON-Nom (560)</li>
      <li>VERB-Part--NOUN-Acc (22)</li>
      <li>VERB-Part--NOUN-Dat (72)</li>
      <li>VERB-Part--NOUN-Nom (680)</li>
      <li>VERB-Part--PRON (22)</li>
      <li>VERB-Part--PRON-Acc (8)</li>
      <li>VERB-Part--PRON-Dat (52)</li>
      <li>VERB-Part--PRON-Gen (2)</li>
      <li>VERB-Part--PRON-Nom (818)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Acc (1318)</li>
      <li>VERB--NOUN-Dat (254)</li>
      <li>VERB--NOUN-Dat-ADP(á) (2)</li>
      <li>VERB--NOUN-Dat-ADP(í) (2)</li>
      <li>VERB--NOUN-Gen (32)</li>
      <li>VERB--NOUN-Nom (48)</li>
      <li>VERB--PRON (4)</li>
      <li>VERB--PRON-Acc (402)</li>
      <li>VERB--PRON-Dat (154)</li>
      <li>VERB--PRON-Gen (14)</li>
      <li>VERB--PRON-Nom (116)</li>
      <li>VERB-Inf--NOUN-Acc (1338)</li>
      <li>VERB-Inf--NOUN-Dat (322)</li>
      <li>VERB-Inf--NOUN-Gen (50)</li>
      <li>VERB-Inf--NOUN-Nom (10)</li>
      <li>VERB-Inf--PRON-Acc (362)</li>
      <li>VERB-Inf--PRON-Dat (126)</li>
      <li>VERB-Inf--PRON-Gen (10)</li>
      <li>VERB-Inf--PRON-Nom (28)</li>
      <li>VERB-Part--NOUN-Acc (366)</li>
      <li>VERB-Part--NOUN-Dat (64)</li>
      <li>VERB-Part--NOUN-Dat-ADP(með) (2)</li>
      <li>VERB-Part--NOUN-Gen (14)</li>
      <li>VERB-Part--NOUN-Nom (16)</li>
      <li>VERB-Part--PRON (2)</li>
      <li>VERB-Part--PRON-Acc (148)</li>
      <li>VERB-Part--PRON-Dat (42)</li>
      <li>VERB-Part--PRON-Gen (6)</li>
      <li>VERB-Part--PRON-Nom (22)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-Acc (14)</li>
      <li>VERB--NOUN-Dat (70)</li>
      <li>VERB--PRON-Acc (16)</li>
      <li>VERB--PRON-Dat (80)</li>
      <li>VERB-Inf--NOUN-Acc (40)</li>
      <li>VERB-Inf--NOUN-Dat (58)</li>
      <li>VERB-Inf--PRON-Acc (12)</li>
      <li>VERB-Inf--PRON-Dat (66)</li>
      <li>VERB-Part--NOUN-Acc (2)</li>
      <li>VERB-Part--NOUN-Dat (14)</li>
      <li>VERB-Part--PRON-Dat (50)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>compound:prt</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nmod:poss</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>compound</a>, <a>flat</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
