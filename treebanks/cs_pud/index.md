---
layout: base
title:  'UD_Czech-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Czech PUD

Language: [Czech](/cs/index.html) (code: `cs`)<br/>
Family: Indo-European, Slavic

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Václava Kettnerová, Jan Hajič jr., Silvie Cinková, Zdeňka Urešová, Milan Straka, Jan Hajič, Jaroslava Hlaváčová, Daniel Zeman.

Repository: [UD_Czech-PUD](https://github.com/UniversalDependencies/UD_Czech-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udcs_pud29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Czech-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Czech-PUD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually, natively in UD style |

## Description

This is a part of the Parallel Universal Dependencies (PUD) treebanks created
for the [CoNLL 2017 shared task on Multilingual Parsing from Raw Text to
Universal Dependencies](http://universaldependencies.org/conll17/).




There are
1000 sentences in each language, always in the same order. (The sentence
alignment is 1-1 but occasionally a sentence-level segment actually consists
of two real sentences.) The sentences are taken from the news domain (sentence
id starts in ‘n’) and from Wikipedia (sentence id starts with ‘w’). There are
usually only a few sentences from each document, selected randomly, not
necessarily adjacent. The digits on the second and third position in the
sentence ids encode the original language of the sentence. The first 750
sentences are originally English (01). The remaining 250 sentences are
originally German (02), French (03), Italian (04) or Spanish (05) and they
were translated to other languages via English. Translation into German,
French, Italian, Spanish, Arabic, Hindi, Chinese, Indonesian, Japanese,
Korean, Portuguese, Russian, Thai and Turkish has been provided by DFKI and
performed (except for German) by professional translators. Then the data has
been annotated morphologically and syntactically by Google according to Google
universal annotation guidelines; finally, it has been converted by members of
the UD community to UD v2 guidelines.

Additional languages have been provided (both translation and native UD v2
annotation) by other teams: Czech by Charles University, Finnish by University
of Turku and Swedish by Uppsala University.

The entire treebank is labeled as test set (and was used for testing in the
shared task). If it is used for training in future research, the users should
employ ten-fold cross-validation.


## Acknowledgments

# Statistics of UD Czech PUD

## POS Tags

[ADJ](cs_pud-pos-ADJ.html) – [ADP](cs_pud-pos-ADP.html) – [ADV](cs_pud-pos-ADV.html) – [AUX](cs_pud-pos-AUX.html) – [CCONJ](cs_pud-pos-CCONJ.html) – [DET](cs_pud-pos-DET.html) – [NOUN](cs_pud-pos-NOUN.html) – [NUM](cs_pud-pos-NUM.html) – [PART](cs_pud-pos-PART.html) – [PRON](cs_pud-pos-PRON.html) – [PROPN](cs_pud-pos-PROPN.html) – [PUNCT](cs_pud-pos-PUNCT.html) – [SCONJ](cs_pud-pos-SCONJ.html) – [SYM](cs_pud-pos-SYM.html) – [VERB](cs_pud-pos-VERB.html)

## Features

[Abbr](cs_pud-feat-Abbr.html) – [AdpType](cs_pud-feat-AdpType.html) – [Animacy](cs_pud-feat-Animacy.html) – [Aspect](cs_pud-feat-Aspect.html) – [Case](cs_pud-feat-Case.html) – [Degree](cs_pud-feat-Degree.html) – [Foreign](cs_pud-feat-Foreign.html) – [Gender](cs_pud-feat-Gender.html) – [Gender[psor]](cs_pud-feat-Gender-psor.html) – [Hyph](cs_pud-feat-Hyph.html) – [Mood](cs_pud-feat-Mood.html) – [NameType](cs_pud-feat-NameType.html) – [Number](cs_pud-feat-Number.html) – [Number[psor]](cs_pud-feat-Number-psor.html) – [NumForm](cs_pud-feat-NumForm.html) – [NumType](cs_pud-feat-NumType.html) – [NumValue](cs_pud-feat-NumValue.html) – [Person](cs_pud-feat-Person.html) – [Polarity](cs_pud-feat-Polarity.html) – [Poss](cs_pud-feat-Poss.html) – [PrepCase](cs_pud-feat-PrepCase.html) – [PronType](cs_pud-feat-PronType.html) – [Reflex](cs_pud-feat-Reflex.html) – [Style](cs_pud-feat-Style.html) – [Tense](cs_pud-feat-Tense.html) – [Variant](cs_pud-feat-Variant.html) – [VerbForm](cs_pud-feat-VerbForm.html) – [Voice](cs_pud-feat-Voice.html)

## Relations

[acl](cs_pud-dep-acl.html) – [acl:relcl](cs_pud-dep-acl-relcl.html) – [advcl](cs_pud-dep-advcl.html) – [advmod](cs_pud-dep-advmod.html) – [advmod:emph](cs_pud-dep-advmod-emph.html) – [amod](cs_pud-dep-amod.html) – [appos](cs_pud-dep-appos.html) – [aux](cs_pud-dep-aux.html) – [aux:pass](cs_pud-dep-aux-pass.html) – [case](cs_pud-dep-case.html) – [cc](cs_pud-dep-cc.html) – [ccomp](cs_pud-dep-ccomp.html) – [compound](cs_pud-dep-compound.html) – [conj](cs_pud-dep-conj.html) – [cop](cs_pud-dep-cop.html) – [csubj](cs_pud-dep-csubj.html) – [csubj:pass](cs_pud-dep-csubj-pass.html) – [det](cs_pud-dep-det.html) – [det:numgov](cs_pud-dep-det-numgov.html) – [det:nummod](cs_pud-dep-det-nummod.html) – [discourse](cs_pud-dep-discourse.html) – [expl:pass](cs_pud-dep-expl-pass.html) – [expl:pv](cs_pud-dep-expl-pv.html) – [fixed](cs_pud-dep-fixed.html) – [flat](cs_pud-dep-flat.html) – [iobj](cs_pud-dep-iobj.html) – [mark](cs_pud-dep-mark.html) – [nmod](cs_pud-dep-nmod.html) – [nsubj](cs_pud-dep-nsubj.html) – [nsubj:pass](cs_pud-dep-nsubj-pass.html) – [nummod](cs_pud-dep-nummod.html) – [nummod:gov](cs_pud-dep-nummod-gov.html) – [obj](cs_pud-dep-obj.html) – [obl](cs_pud-dep-obl.html) – [obl:agent](cs_pud-dep-obl-agent.html) – [obl:arg](cs_pud-dep-obl-arg.html) – [orphan](cs_pud-dep-orphan.html) – [parataxis](cs_pud-dep-parataxis.html) – [punct](cs_pud-dep-punct.html) – [root](cs_pud-dep-root.html) – [vocative](cs_pud-dep-vocative.html) – [xcomp](cs_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 18565 tokens and 18610 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2636 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 10 types of words with spaces. Examples: 10 000, 100 000, 12 000, 15 001, 16 500, 19 999, 25 000, 330 000, 35 000, 600 000</li>
</ul>

<ul>
<li>This corpus contains 9 types of words that contain both letters and punctuation. Examples: e-maily, sci-fi, B-29, Ce-sü, Chu-nan, Chu-pej, Harley-Davidson, Šen-čenu, š’</li>
</ul>

<ul>
<li>This corpus contains 45 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 5 types of multi-word tokens. Examples: aby, kdyby, abych, abychom, abyste.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: INTJ, X</li>
</ul>

<ul>
<li>This corpus contains 12 word types tagged as particles (PART): Bohužel, Koneckonců, asi, ať, až, jen, jenom, ne, no, ovšem, snad, vůbec</li>
</ul>

<ul>
<li>This corpus contains 18 lemmas tagged as pronouns (PRON): I, co, což, jenž, já, kdo, kdokoli, nic, nikdo, něco, někdo, on, samý, se, ten, ty, veškerý, you</li>
</ul>

<ul>
<li>This corpus contains 27 lemmas tagged as determiners (DET): hodně, jaký, jakýkoli, jeho, jenž, každý, kolik, který, kterýkoli, mnoho, málo, můj, nějaký, několik, některý, onen, svůj, sám, takový, ten, tenhle, tento, tentýž, tolik, tvůj, všechen, žádný</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: jenž, ten</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as auxiliaries (AUX): být, bývat</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: být</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>VERB: Počínaje, nedbajíce, redukujíc</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: je, by, jsou, bude, jsem, není, jsme, budou, nebude, budeme</li>
    <li>VERB: má, je, může, říká, mohou, mají, lze, obsahuje, pomáhá, ukazuje</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: být</li>
    <li>VERB: mít, vidět, získat, najít, opustit, pokračovat, stát, vést, dělat, muset</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: řečeno, propuštěn, vedoucí, nabídnuto, následující, označen, poražena, používán, považováno, považovány</li>
    <li>AUX: byl, bylo, byla, byly, byli, nebyly, nebyla, nebyl, nebylo</li>
    <li>VERB: řekl, mohl, měl, stal, stala, uvedla, vedl, mohla, pracoval, rozhodl</li>
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
      <li>ADJ: první, nové, druhé, jižní, další, severní, velká, velké, vlastní, východní</li>
      <li>ADJ-Part: probíhající, dospívající, dívající, ležící, milující, nadcházejících, pocházející, poskytující, postupující, pronásledující</li>
      <li>AUX-Part: byla</li>
      <li>DET: která, které, své, svou, této, té, tato, její, kterou, tuto</li>
      <li>NOUN: době, oblasti, války, společnosti, země, policie, část, části, strany, říše</li>
      <li>NUM: jedné, jedna, jednu, jednou, una</li>
      <li>PRON: ní, jí, ji, níž, veškeré, jež, niž, ona, veškerou</li>
      <li>PROPN: Čína, Francie, Albánie, BBC, Británii, Clintonové, Evropě, Itálii, Ameriky, Asii</li>
      <li>VERB-Part: začala, řekla</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>ADJ: považovány, aktivovány, budovány, diskutovány, exponovány, legalizovány, odváty, otevřeny, ovlivněny, podloženy</li>
      <li>ADJ-Part: považovány, aktivovány, budovány, diskutovány, exponovány, legalizovány, odváty, otevřeny, ovlivněny, podloženy</li>
      <li>AUX-Part: byly, nebyly</li>
      <li>VERB-Part: měly, vypadaly, začaly, mohly, používaly, umožnily, vedly, vyvíjely, Následovaly, Podávaly</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Neut
    <ul>
      <li>ADJ: poražena, vytvořena, založena, chráněna, definována, dána, hlášena, kritizována, obviněna, odstraněna</li>
      <li>ADJ-Part: poražena, vytvořena, založena, chráněna, definována, dána, hlášena, kritizována, obviněna, odstraněna</li>
      <li>AUX-Part: byla, nebyla</li>
      <li>DET: naše, Moje</li>
      <li>NUM: dvě</li>
      <li>VERB-Conv: redukujíc</li>
      <li>VERB-Part: stala, uvedla, mohla, vedla, měla, ukázala, vydala, začala, řekla, umožnila</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: další, každý, Spojených, nové, nový, první, schopen, vládní, americké, dalších</li>
      <li>ADJ-Part: propuštěn, Vedoucí, označen, používán, prodán, studujících, uveden, vyslán, vytvořen, zvolen</li>
      <li>AUX-Part: byl, byli, nebyl</li>
      <li>DET: který, kteří, které, tento, svůj, své, ten, někteří, tyto, ty</li>
      <li>NOUN: roce, roku, l, lidí, rok, případě, dolarů, důsledku, film, den</li>
      <li>NUM: dva, jeden, oba</li>
      <li>PRON: kdo, jenž, někdo, on, kdokoli, kdokoliv, koho, nikdo, nikoho, nikým</li>
      <li>PROPN: USA, Trump, Trumpa, Donald, Mišima, Peking, Richarda, Seagal, Winstone, Wright</li>
      <li>VERB-Conv: Počínaje</li>
      <li>VERB-Part: řekl, mohl, měl, stal, vedl, pracoval, rozhodl, uvedl, vrátil, začal</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>DET: toho, tím, tohoto, n, svého, tomu, její, tom, svém, svým</li>
      <li>NUM: jedním, jednoho, jednom</li>
      <li>PRON: ho, mu, něj, ním, něm, jím, něhož, jehož, něho, němu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: posledních, další, jasné, možné, řečeno, jiné, šedesátých, Karibské, Severního, britského</li>
      <li>ADJ-Part: řečeno, nabídnuto, považováno, provedeno, psáno, rozděleno, zamítnuto, citováno, dobyto, dovoleno</li>
      <li>AUX-Part: bylo, nebylo</li>
      <li>DET: to, toto, které, která, své, tohle, některá, tato, všechno, žádná</li>
      <li>NOUN: let, století, letech, území, období, moře, místo, eur, města, omezení</li>
      <li>NUM: jedno</li>
      <li>PRON: je, samé</li>
      <li>PROPN: CNN, Mongolsko, Německo, Řecko, Brisbane, Mexiko, Nizozemí, Norsku, Ontaria, Rusku</li>
      <li>VERB-Part: bylo, mohlo, mělo, začalo, došlo, konalo, podařilo, poskytovalo, vedlo, vyšlo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Anim
    <ul>
      <li>ADJ: každý, další, Islámští, Vedoucí, australští, dalšími, egyptský, generální, generálního, jistý</li>
      <li>ADJ-Part: Vedoucí, studujících, dosluhující, navštěvující, nazýváni, oblečeni, osvobozeni, ozbrojeni, pohnuti, poraženi</li>
      <li>AUX-Part: byli</li>
      <li>DET: kteří, někteří, všichni, kterého, sami, svého, ty</li>
      <li>NOUN: lidí, lidé, obyvatel, prezident, člověk, investoři, král, lidi, muži, studenti</li>
      <li>PRON: kdo, někdo, kdokoli, kdokoliv, koho, nikdo, nikoho, nikým, někoho, oni</li>
      <li>PROPN: Trump, Trumpa, Donald, Mišima, Richarda, Seagal, Winstone, Wright, Šen, Aldrin</li>
      <li>VERB-Part: mohli, měli, rozhodli, bavili, dostali, neměli, potřebovali, požádali, stáli, tvořili</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: Spojených, nové, další, nový, první, vládní, dalších, dalším, hlavní, každý</li>
      <li>ADJ-Part: považovány, aktivovány, budovány, diskutovány, dospívajícího, exponovány, hanobící, legalizovány, měnícím, následující</li>
      <li>AUX-Part: byly, nebyly</li>
      <li>DET: které, svůj, který, tento, tyto, ty, její, každý, naše, náš</li>
      <li>NOUN: roce, roku, l, rok, případě, dolarů, důsledku, film, den, stát</li>
      <li>PRON: co, samý, čím</li>
      <li>PROPN: USA, Peking, Abbotsfordu, Egypta, Endurance, Facebooku, Ford, Glasgow, Hill, Hongkong</li>
      <li>VERB-Part: měly, vypadaly, začaly, mohly, používaly, umožnily, vedly, vyvíjely, Následovaly, Podávaly</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: nastraženýma</li>
      <li>NOUN: ušima</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: další, nové, posledních, Spojených, různých, dalších, jiných, malé, nových, první</li>
      <li>ADJ-Part: Vedoucí, považovány, studujících, aktivovány, budovány, diskutovány, dívající, exponovány, legalizovány, ležící</li>
      <li>AUX-Fin: jsou, jsme, budou, budeme, jste, nebudou, nejsou, Nejsme, bychom, byste</li>
      <li>AUX-Part: byly, byli, nebyly</li>
      <li>DET: které, kteří, své, tyto, svých, ty, těchto, která, někteří, všech</li>
      <li>NOUN: let, letech, lidí, dolarů, eur, liber, lidé, voleb, obyvatel, dat</li>
      <li>NUM: dva, čtyři, dvou, dvě, dvěma, tři, oba, obou, šesti, deseti</li>
      <li>PRON: nich, jim, nimi, nás, je, nichž, nám, jich, ně, jež</li>
      <li>PROPN: USA, Alpy, Andy, Australané, Mayové, News, Číňanů, Řekové, Židů, Aboriginci</li>
      <li>VERB-Conv: nedbajíce</li>
      <li>VERB-Fin: mohou, mají, existují, jsou, musíme, musíte, můžou, poskytují, používají, představují</li>
      <li>VERB-Part: měly, mohli, měli, rozhodli, vypadaly, začaly, bavili, dostali, mohly, neměli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur,Sing
    <ul>
      <li>ADJ: poražena, vytvořena, založena, chráněna, definována, dána, hlášena, kritizována, obviněna, odstraněna</li>
      <li>ADJ-Part: poražena, vytvořena, založena, chráněna, definována, dána, hlášena, kritizována, obviněna, odstraněna</li>
      <li>AUX-Part: byla, nebyla</li>
      <li>VERB-Part: stala, uvedla, mohla, vedla, měla, ukázala, vydala, začala, řekla, umožnila</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: první, druhé, jižní, severní, další, hlavní, velká, každý, větší, nové</li>
      <li>ADJ-Part: řečeno, propuštěn, nabídnuto, následující, označen, používán, považováno, probíhající, prodán, provedeno</li>
      <li>AUX-Fin: je, bude, jsem, není, nebude, budu, bych, bývá, nebudu</li>
      <li>AUX-Part: byl, bylo, nebyl, nebylo, byla</li>
      <li>CCONJ: i</li>
      <li>DET: to, který, která, toho, tím, její, tento, tohoto, své, toto</li>
      <li>NOUN: roce, roku, století, době, oblasti, l, moře, války, území, místo</li>
      <li>NUM: jedné, jeden, deset, jedna, jedním, jedno, jednoho, jednu, šest, devět</li>
      <li>PRON: ho, ní, jí, mu, mě, ji, něj, ním, jenž, níž</li>
      <li>PROPN: Čína, Francie, Albánie, Británii, Clintonové, Evropě, Itálii, Trump, Trumpa, Ameriky</li>
      <li>VERB-Conv: Počínaje, redukujíc</li>
      <li>VERB-Fin: má, je, může, říká, lze, obsahuje, pomáhá, ukazuje, nelze, stojí</li>
      <li>VERB-Part: řekl, mohl, měl, stal, vedl, pracoval, rozhodl, uvedl, vrátil, začal</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: další, první, vlastní, jiné, novou, nové, hlavní, dlouhé, druhou, nový</li>
      <li>ADJ-Part: sestávající, hanobící, následující, oddělující, omezující, pronásledující, představujícího, přistávající, rozhodující, splňující</li>
      <li>ADP: na, pro, za, o, v, po, mimo, přes, ve, mezi</li>
      <li>DET: to, své, svůj, svou, které, několik, který, kterou, mnoho, toto</li>
      <li>NOUN: místo, den, rok, část, roky, většinu, dluhopisy, lidi, možnost, měsíc</li>
      <li>NUM: dva, deset, dvě, čtyři, tři, jedno, jednu, šest, osm, jeden</li>
      <li>PRON: se, ho, co, ji, mě, je, nás, něco, nic, ně</li>
      <li>PROPN: Německo, Richarda, Trumpa, Abakumova, Aljašku, Alvareze, Andre, Anglii, Annu, Antarktidu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: Osmanské, Spojeným, nížinné, obecné, větší, Alexandrově, Druhé, Mrtvým, Parmské, Starší</li>
      <li>ADJ-Part: rozdělujícímu, zhoršujícímu, žijící</li>
      <li>ADP: k, proti, ke, kvůli, díky, vůči, navzdory, oproti</li>
      <li>DET: tomu, svým, kterému, své, těm, těmto, jakékoliv, jejím, kterým, svému</li>
      <li>NOUN: dispozici, podnebí, říši, dívkám, konci, obchodu, obsahu, radě, státům, většině</li>
      <li>NUM: oběma, dvěma</li>
      <li>PRON: si, mu, jí, jim, nám, mi, čemuž, nimž, němu, něčemu</li>
      <li>PROPN: Evropě, Itálii, Roně, Rusku, Andymu, Benoîtovi, Britům, Churchillovi, Disneyovi, Francii</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: jiných, nových, prvního, Spojených, amerického, dalších, druhé, nové, první, různých</li>
      <li>ADJ-Part: studujících, dospívající, dospívajícího, obklopujícího, probíhající, související, stojících, svíjejících, vedoucích, věřících</li>
      <li>ADP: z, do, od, ze, během, podle, u, kolem, bez, kromě</li>
      <li>DET: toho, tohoto, svého, svých, těchto, své, mnoha, té, všech, jejích</li>
      <li>NOUN: roku, let, století, války, lidí, dolarů, společnosti, doby, eur, liber</li>
      <li>NUM: jedné, dvou, deseti, jednoho, tří, šesti, obou, osmdesáti, padesáti, sedmi</li>
      <li>PRON: nich, ní, něj, jich, nichž, mě, něhož, sebe, jehož, jí</li>
      <li>PROPN: Clintonové, Albánie, Ameriky, Afriky, Burgoyna, Disneyho, Donalda, Duffyho, Egypta, Francie</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: americkou, dalším, velkou, dalšími, hlavním, hongkongským, nejvyšším, největším, politickou, první</li>
      <li>ADJ-Part: podporujícím, poskytující, postupující, rostoucí, rozvíjejícím, studujícím, vedoucími, vyskytujícími, zakládajícím, zvyšujícími</li>
      <li>ADP: s, mezi, před, se, pod, př, nad, za</li>
      <li>DET: tím, n, svým, jakým, jejím, mnoha, svou, tou, tímto, těmi</li>
      <li>NOUN: l, lety, rokem, autorem, cílem, nedostatkem, nemovitostmi, prezidentem, soudem, vedením</li>
      <li>NUM: dvěma, jedním, dvaceti, jednou, osmi, třemi</li>
      <li>PRON: ním, nimi, jím, čímž, nikým, ničím, ní, něčím, sebou, čím</li>
      <li>PROPN: Albánií, Bogdgegénem, Kristem, Markem, Alvarezem, Anglií, Asií, Averym, Benátkami, Brantem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: druhé, posledních, Velké, jižní, první, Nové, Severní, Spojených, bronzové, celém</li>
      <li>ADJ-Part: milující, měnícím, nadcházejících, následujícím, začínajících</li>
      <li>ADP: v, na, ve, po, o, při, a</li>
      <li>DET: této, tom, svém, té, kterém, tomto, kterých, některých, své, svých</li>
      <li>NOUN: roce, letech, době, případě, důsledku, oblasti, světě, městě, období, polovině</li>
      <li>NUM: dvou, jedné, obou, sedmi, šesti, dvaceti, jedenácti, jednom, pěti, sedmnácti</li>
      <li>PRON: níž, ní, něm, nich, nichž, něčem, sobě, veškeré</li>
      <li>PROPN: Británii, Asii, Africe, Americe, Evropě, Facebooku, Glasgow, Itálii, Norsku, Papui</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: další, první, velká, severní, každý, poslední, jasné, jižní, každá, možné</li>
      <li>ADJ-Part: Vedoucí, dosluhující, dívající, ležící, navštěvující, následující, pocházející, probíhající, příslušející, sledující</li>
      <li>ADP: de</li>
      <li>DET: to, který, která, které, kteří, mnoho, tento, její, toto, tato</li>
      <li>NOUN: film, lidé, společnost, vláda, moře, policie, prezident, stát, systém, člověk</li>
      <li>NUM: jeden, jedna, čtyři, dva, dvě, oba, devět, jedno, pět, sedmnáct</li>
      <li>PRON: což, co, kdo, jenž, někdo, já, nic, on, jež, kdokoli</li>
      <li>PROPN: Čína, Trump, Bluntová, Británie, Donald, Francie, Mišima, Seagal, Winstone, Wright</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>NOUN: přátelé</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PrepCase</a></li>
</ul>

<ul>
  <li>Npr
    <ul>
      <li>PRON: jenž, jež, jehož</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pre
    <ul>
      <li>PRON: nich, ní, něj, ním, nimi, nichž, níž, ně, něm, něhož</li>
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
      <li>ADJ: větší, vyšší, menší, Starší, afričtějšího, bezpečnější, horším, jemnější, jistější, lepší</li>
      <li>ADV: více, později, víc, dříve, méně, Přesněji, dál, lépe, raději, radši</li>
      <li>DET: více, víc, méně</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: další, nové, jižní, severní, hlavní, velká, velké, vlastní, poslední, jiné</li>
      <li>ADV: stejně, často, pravděpodobně, původně, samozřejmě, dobře, přibližně, společně, úplně, krátce</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: nejvyšší, největší, Nejnovější, nejdůležitější, nejhorších, nejlepších, nejvyšším, největším, Nejrozšířenější, Nejstarší</li>
      <li>ADV: nejlépe, nejvíce, nejméně, nejpozději, nejpravděpodobněji</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: neuvěřitelný, nevhodné, nezávislé, Nedávným, Nedávnými, Nezávislého, nedobrovolnými, nedobytné, nedávná, nedávného</li>
      <li>ADV: Nedlouho, nedaleko, nenapodobitelně, nenápadně, neoprávněně, neskutečně, nezbytně, nezávisle</li>
      <li>AUX-Fin: není, nebude, nebudou, nejsou, Nejsme, nebudu</li>
      <li>AUX-Part: nebyly, nebyla, nebyl, nebylo, byl</li>
      <li>NOUN: nezávislost, nedokončenost, nejednotnost, nesmrtelnost, nespokojenost, nezávislosti</li>
      <li>VERB-Conv: nedbajíce</li>
      <li>VERB-Fin: nelze, nemá, Nevím, nebude, nechce, nemají, nemusí, nemůžeme, není, Neznám</li>
      <li>VERB-Inf: nezobrazit</li>
      <li>VERB-Part: neměl, neměla, neměli, Nemohli, nedopřál, nedoznaly, nedošlo, neexistovalo, nekomunikoval, nekomunikovala</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: další, nové, jižní, severní, hlavní, velká, velké, vlastní, poslední, jiné</li>
      <li>ADJ-Part: řečeno, propuštěn, vedoucí, nabídnuto, následující, označen, poražena, používán, považováno, považovány</li>
      <li>ADV: více, stejně, často, později, pravděpodobně, původně, samozřejmě, víc, dobře, dříve</li>
      <li>AUX-Fin: je, jsou, bude, jsem, jsme, budou, budeme, budu, jste, bývají</li>
      <li>AUX-Inf: být</li>
      <li>AUX-Part: byl, bylo, byla, byly, byli</li>
      <li>DET: více, víc, méně, tohoto</li>
      <li>NOUN: roce, roku, let, století, letech, době, území, období, oblasti, l</li>
      <li>PROPN: Čína, Francie, USA, Čching, Albánie, BBC, Británii, Clintonové, Danevirke, Evropě</li>
      <li>VERB-Conv: Počínaje, redukujíc</li>
      <li>VERB-Fin: má, je, může, říká, mohou, mají, lze, obsahuje, pomáhá, ukazuje</li>
      <li>VERB-Inf: mít, vidět, získat, najít, opustit, pokračovat, stát, vést, dělat, muset</li>
      <li>VERB-Part: řekl, mohl, měl, stal, stala, uvedla, vedl, mohla, pracoval, rozhodl</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADJ: schopen, řečeno, propuštěn, rád, nabídnuto, označen, poražena, používán, považováno, považovány</li>
      <li>ADJ-Part: řečeno, propuštěn, nabídnuto, označen, poražena, používán, považováno, považovány, prodán, provedeno</li>
      <li>PRON: se, si, ho, mu, mě, mi</li>
    </ul>
  </li>
</ul>

<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>ADJ-Part: vedoucí, následující, používán, považováno, považovány, probíhající, sestávající, studujících, aktivovány, budovány</li>
      <li>AUX-Fin: bývají, bývá</li>
      <li>AUX-Part: byl</li>
      <li>VERB-Conv: Počínaje, nedbajíce</li>
      <li>VERB-Fin: říká, obsahuje, pomáhá, ukazuje, existují, patří, tvrdí, nachází, naznačuje, poskytují</li>
      <li>VERB-Inf: pokračovat, dělat, sledovat, vybírat, měnit, objevovat, posílat, používat, předvídat, tvořit</li>
      <li>VERB-Part: pracoval, režíroval, snažil, varoval, vládl, vypadaly, bavili, fungoval, konalo, miloval</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>ADJ-Part: nabídnuto, označen, prodán, rozděleno, vytvořen, vytvořena, založena, zamítnuto, zvolen, dovoleno</li>
      <li>VERB-Conv: redukujíc</li>
      <li>VERB-Fin: Polož, Skončíte, Zhodnotíme, koupím, naučí, navrhnu, navštíví, nedovolí, neobjeví, nerozvodní</li>
      <li>VERB-Inf: opustit, získat, udělat, vytvořit, zrušit, naučit, odhalit, překročit, vrátit, zajistit</li>
      <li>VERB-Part: rozhodl, vrátil, objevil, vydala, navštívil, rozhodli, setkal, umožnila, vyhlásil, vytvořil</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: by, bych, bychom, byste</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: Polož, Řekněme</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: je, jsou, bude, jsem, není, jsme, budou, nebude, budeme, budu</li>
      <li>VERB-Fin: má, je, může, říká, mohou, mají, lze, obsahuje, pomáhá, ukazuje</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: bude, budou, nebude, budeme, budu, nebudou, nebudu</li>
      <li>VERB-Fin: nebude, půjde, bude, neporoste</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Part: byl, bylo, byla, byly, byli, nebyly, nebyla, nebyl, nebylo</li>
      <li>VERB-Conv: redukujíc</li>
      <li>VERB-Part: řekl, mohl, měl, stal, stala, uvedla, vedl, mohla, pracoval, rozhodl</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: vedoucí, následující, probíhající, sestávající, studujících, dosluhující, dospívající, dospívajícího, dívající, hanobící</li>
      <li>AUX-Fin: je, jsou, jsem, není, jsme, jste, nejsou, Nejsme, bývají, bývá</li>
      <li>VERB-Conv: Počínaje, nedbajíce</li>
      <li>VERB-Fin: má, je, může, říká, mohou, mají, lze, obsahuje, pomáhá, ukazuje</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Part: vedoucí, následující, probíhající, sestávající, studujících, dosluhující, dospívající, dospívajícího, dívající, hanobící</li>
      <li>AUX-Fin: je, jsou, bude, jsem, není, jsme, budou, nebude, budeme, budu</li>
      <li>AUX-Part: byl, bylo, byla, byly, byli, nebyly, nebyla, nebyl, nebylo</li>
      <li>VERB-Conv: Počínaje, nedbajíce, redukujíc</li>
      <li>VERB-Fin: má, je, může, říká, mohou, mají, lze, obsahuje, pomáhá, ukazuje</li>
      <li>VERB-Inf: překonat</li>
      <li>VERB-Part: řekl, mohl, měl, stal, stala, uvedla, vedl, mohla, pracoval, rozhodl</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: řečeno, propuštěn, nabídnuto, označen, poražena, používán, považováno, považovány, prodán, provedeno</li>
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
      <li>ADV: tak, tam, teď, nyní, tentokrát, to, tu, zde, dosud, tady</li>
      <li>DET: to, toho, tím, tento, tohoto, toto, této, tomu, tyto, tato</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: sama, sám, sami, samo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: někdy, kdykoli, málokdy, několikrát, mnohokrát</li>
      <li>DET: mnoho, několik, mnoha, někteří, některé, některých, několika, některá, jakoukoli, jakoukoliv</li>
      <li>PRON: něco, někdo, kdokoli, kdokoliv, někoho, něčem, něčemu, něčím</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>ADV: jak, kde, kdy, proč, odkud, kam</li>
      <li>DET: který, které, která, kteří, kterou, kterého, kterém, kterých, jaké, jakým</li>
      <li>PRON: co, kdo, koho, čím</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: nikdy</li>
      <li>DET: žádná, žádné, žádný, žádném, žádným</li>
      <li>PRON: nic, nikdo, nikoho, nikým, ničím</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: jeho, jejich, své, její, n, svou, svého, svůj, svých, svým</li>
      <li>PRON: se, si, ho, nich, ní, jí, mu, mě, ji, něj</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: přičemž, zato</li>
      <li>DET: jejichž, jehož, jejíž</li>
      <li>PRON: což, jenž, nichž, níž, jež, něhož, čemuž, čímž, jehož, nimž</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: vždy</li>
      <li>DET: všech, všechny, každý, všechno, všichni, všeho, všemu</li>
      <li>PRON: veškeré, samé, samého, samý, veškerou</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: mnoho, několik, mnoha, několika, tolik, kolika, mála, málo</li>
      <li>NUM: dva, čtyři, dvou, dvě, jedné, 1, 3, jeden, 20, dvěma</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Mult
    <ul>
      <li>ADV: třikrát, dvakrát, jednou, několikrát, mnohokrát</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: první, druhé, prvního, třetí, druhou, šedesátých, druhý, dvacátého, padesátých, prvních</li>
      <li>ADV: poprvé, podruhé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>ADJ: jedni</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: achaimenovské, Achaimenovskou, Achaimenovská, Alexandrově, Bergeronova, Berijovo, Blochových, Caesarovi, Carangiina, Cottonovy</li>
      <li>DET: jeho, jejich, své, její, n, svou, svého, svůj, svých, svým</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: své, svou, svého, svůj, svých, svým, svém, svoje, svému, svými</li>
      <li>PRON: se, si, sebe, sobě, sebou</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: jsem, jsme, budeme, budu, bych, Nejsme, bychom, nebudu</li>
      <li>DET: n, naše, mých, Moje, mé, můj, naší, naším, náš</li>
      <li>PRON: mě, nás, nám, já, mi, me</li>
      <li>VERB-Fin: musíme, Myslím, Nevím, hraju, máme, nemůžeme, Jdeme, Musím, Míjíme, Navštěvuji</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: jste, byste</li>
      <li>DET: vašich</li>
      <li>PRON: Tebe, You, vám, vás</li>
      <li>VERB-Fin: musíte, Hádáte, Polož, Skončíte, máte, víte, čekáte</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: je, by, jsou, bude, není, budou, nebude, nebudou, nejsou, bývají</li>
      <li>DET: jeho, jejich, její, jejichž, jejím, jehož, jejích, jejího, jejíž</li>
      <li>PRON: ho, nich, ní, jí, mu, ji, něj, jim, ním, je</li>
      <li>VERB-Fin: má, je, může, říká, mohou, mají, lze, obsahuje, pomáhá, ukazuje</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: Carangiina, Germaininých</li>
      <li>DET: její, jejím, jejích, jejího, jejíž</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: achaimenovské, Achaimenovskou, Achaimenovská, Alexandrově, Bergeronova, Berijovo, Blochových, Caesarovi, Cottonovy, Césarovo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>DET: jeho, jehož</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: jejich, n, naše, jejichž, naší, naším, náš, vašich</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: jeho, její, jejím, jehož, jejích, mých, Moje, jejího, jejíž, mé</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: sv, tzv</li>
          <li>ADP: př</li>
          <li>ADV: cca</li>
          <li>DET: n</li>
          <li>NOUN: l, DNA, GCA, MPS, m, A, AIDS, APK, BK, CGI</li>
          <li>PROPN: USA, BBC, CNN, EU, OSN, RECO, AP, BA, BID, CBC</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Comprep
        <ul>
          <li>ADP: vzhledem</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: v, na, z, s, do, o, k, pro, za, po</li>
        </ul>
      </li>
      <li>Voc
        <ul>
          <li>ADP: ve, ze, se, ke, skrze, za</li>
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
          <li>ADJ: The, National, New, Saint, a, American, Canadian, Cottonovy, Dareiův, Die</li>
          <li>ADP: de, Von, of, Di, On</li>
          <li>ADV: cca</li>
          <li>CCONJ: and, If</li>
          <li>NOUN: brexitu, e-maily, Blood, Breaking, Buck, Business, CGI, CTV, City, Consumer</li>
          <li>PRON: You, me</li>
          <li>PROPN: USA, Danevirke, CNN, Aviva, Company, George, Investors, Joseph, Mount, Multi</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Hyph</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Indo, francouzsko</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NameType</a>
    <ul>
      <li>Com
        <ul>
          <li>ADJ: National, American, Die</li>
          <li>PROPN: USA, Čching, BBC, CNN, EU, Aviva, Company, Facebooku, Investors, Multi</li>
        </ul>
      </li>
      <li>Com,Geo
        <ul>
          <li>PROPN: Scotland</li>
        </ul>
      </li>
      <li>Com,Pro
        <ul>
          <li>PROPN: Ford, GM</li>
        </ul>
      </li>
      <li>Geo
        <ul>
          <li>ADJ: New, San, Beverly, Kapského, Los, Pearl, Severní, Silicon, South, Wall</li>
          <li>PROPN: Čína, Francie, Albánie, Británii, Danevirke, Evropě, Itálii, Ameriky, Asii, Británie</li>
        </ul>
      </li>
      <li>Geo,Giv
        <ul>
          <li>PROPN: Thrákie, Thrákii, Thrákií</li>
        </ul>
      </li>
      <li>Geo,Giv,Sur
        <ul>
          <li>ADP: Di</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>ADJ: Saint, Alexandrově, Caesarovi, Cottonovy, Césarovo, Dareiův, Edgarovy, Germaininých, Kimově</li>
          <li>PROPN: Donald, Richarda, Augustus, Donalda, František, George, González, Jasmína, Ježíše, Joseph</li>
        </ul>
      </li>
      <li>Giv,Sur
        <ul>
          <li>PROPN: James, Michael, Michala, Stephen, Štěpán</li>
        </ul>
      </li>
      <li>Nat
        <ul>
          <li>PROPN: Australané, Mayové, Číňanů, Řekové, Židů, Aboriginci, Achájů, Američan, Američané, Athéňanů</li>
        </ul>
      </li>
      <li>Oth
        <ul>
          <li>PROPN: Cup, Cupu</li>
        </ul>
      </li>
      <li>Pro
        <ul>
          <li>ADJ: El, World</li>
          <li>PROPN: Endurance, Dead, Greco, Loving, MahaNakhon, Mate, Nectar, Select, Simple, Slack</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>ADJ: achaimenovské, Achaimenovskou, Achaimenovská, Bergeronova, Berijovo, Blochových, Carangiina, Dossovy, Erdoganovu, Graftonova</li>
          <li>PROPN: Clintonové, Trump, Trumpa, Bluntová, Mišima, Seagal, Winstone, Wright, Šen, Aldrin</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Digit
        <ul>
          <li>NUM: 1, 3, 20, 2014, 2015, 5, 10, 100, 1492, 2010</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>NUM: I, III, II, IV, V, VI, X</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: dva, čtyři, dvou, dvě, jedné, jeden, dvěma, deset, jedna, jedním</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumValue</a>
    <ul>
      <li>1
        <ul>
          <li>ADJ: jedni</li>
        </ul>
      </li>
      <li>1,2,3
        <ul>
          <li>NUM: dva, čtyři, dvou, dvě, jedné, jeden, dvěma, jedna, jedním, tři</li>
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
          <li>NOUN: léta, včerejška</li>
          <li>PROPN: Papui, smartphone</li>
          <li>VERB-Conv: redukujíc</li>
        </ul>
      </li>
      <li>Coll
        <ul>
          <li>ADJ: chatovacím, podezřelý</li>
          <li>NOUN: sken</li>
          <li>VERB-Fin: potřebujem</li>
        </ul>
      </li>
      <li>Expr
        <ul>
          <li>ADJ: ztřeštěné</li>
        </ul>
      </li>
      <li>Rare
        <ul>
          <li>ADJ: napjatá, předpovězeno, upjaté</li>
          <li>ADJ-Part: předpovězeno</li>
          <li>NOUN: AIDS, datum</li>
          <li>PROPN: Australia, Capitol, Francisco, Jasona, Kenya, Kilimanjaro</li>
          <li>VERB-Part: ujal</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: být, bývat.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: být.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: být.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (4)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN-Gen (11)</li>
      <li>VERB-Fin--NOUN-Nom (212)</li>
      <li>VERB-Fin--PRON-Nom (17)</li>
      <li>VERB-Inf--NOUN-Nom (7)</li>
      <li>VERB-Part--NOUN (4)</li>
      <li>VERB-Part--NOUN-Acc (3)</li>
      <li>VERB-Part--NOUN-Gen (7)</li>
      <li>VERB-Part--NOUN-Gen-ADP(kolem) (1)</li>
      <li>VERB-Part--NOUN-Nom (293)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Gen (2)</li>
      <li>VERB-Part--PRON-Nom (22)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Acc (157)</li>
      <li>VERB-Fin--NOUN-Gen (7)</li>
      <li>VERB-Fin--NOUN-Nom (2)</li>
      <li>VERB-Fin--PRON-Acc (17)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Inf--NOUN-Acc (127)</li>
      <li>VERB-Inf--NOUN-Gen (6)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (17)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Acc (255)</li>
      <li>VERB-Part--NOUN-Gen (18)</li>
      <li>VERB-Part--NOUN-Nom (2)</li>
      <li>VERB-Part--PRON-Acc (42)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Inf--NOUN-Acc (1)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-Acc (1)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 132 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: stát se, rozhodnout se, nacházet se, vrátit se, objevit se, konat se, zdát se, dostat se, myslet si, setkat se, snažit se, týkat se, jednat se, lišit se, narodit se, objevovat se, pokusit se, potýkat se, skládat se, ujmout se, vyvíjet se, vzdát se, bavit se, blížit se, dopouštět se, držet se, ozvat se, podařit se, podržet si, podívat se, přát si, těšit se, vlévat se, vydat se, vyslovit se, věnovat se, zaměřit se, chovat se, cítit se, dařit se, divit se, dohadovat se, domnívat se, doporučovat se, dopustit se, dostavit se, dozvědět se, dát se, dít se, dívat se</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 39 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: používat se, soudit se, najít se, zvýšit se, brát se, datovat se, diskutovat se, dávat se, myslit se, měnit se, měřit se, naznačovat se, nazývat se, označovat se, očekávat se, podávat se, považovat se, pořádat se, prodávat se, proměnit se, provést se, psát se, předpokládat se, přepravovat se, rozpadnout se, rozvibrovat se, snížit se, stavět se, studovat se, svádět se, tradovat se, tvrdit se, vrátit se, vypočítávat se, vyučovat se, využívat se, věřit se, zvyšovat se, čekat se</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 28 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: dostat se, vrátit se, zapojit se, zapsat se, halit se, hledat se, měnit se, nastěhovat se, naučit se, naštvat se, obrátit se, odklonit se, potopit se, prohlásit se, promísit se, prosadit se, přeměnit se, připravovat se, rozvíjet se, rozšiřovat se, smířit se, spasit se, spojit se, udržet se, ukázat se, zaměstnat se, zastavit se, zhoršovat se</li>
    <ul>
      <li>Out of those, 3 lemmas occurred more than once, but never without a reflexive dependent. Examples: vrátit, zapojit, zapsat</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>advmod:emph</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>det:numgov</a>, <a>det:nummod</a>, <a>expl:pass</a>, <a>expl:pv</a>, <a>nsubj:pass</a>, <a>nummod:gov</a>, <a>obl:agent</a>, <a>obl:arg</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>expl</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
