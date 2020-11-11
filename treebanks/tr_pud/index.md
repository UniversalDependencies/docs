---
layout: base
title:  'UD_Turkish-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Turkish PUD

Language: [Turkish](/tr/index.html) (code: `tr`)<br/>
Family: Turkic, Southwestern

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Savas Cetin, Martin Popel, Daniel Zeman, Francis Tyers, Çağrı Çöltekin, Utku Türk, Furkan Atmaca, Şaziye Betül Özateş, Abdullatif Köksal, Balkız Öztürk Başaran, Tunga Güngör, Arzucan Özgür.

Repository: [UD_Turkish-PUD](https://github.com/UniversalDependencies/UD_Turkish-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udtr_pud27)<br />
Download all treebanks: [UD 2.7](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Turkish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Turkish-PUD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, not checked manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
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

# Statistics of UD Turkish PUD

## POS Tags

[ADJ](tr_pud-pos-ADJ.html) – [ADP](tr_pud-pos-ADP.html) – [ADV](tr_pud-pos-ADV.html) – [AUX](tr_pud-pos-AUX.html) – [CCONJ](tr_pud-pos-CCONJ.html) – [DET](tr_pud-pos-DET.html) – [INTJ](tr_pud-pos-INTJ.html) – [NOUN](tr_pud-pos-NOUN.html) – [NUM](tr_pud-pos-NUM.html) – [PRON](tr_pud-pos-PRON.html) – [PROPN](tr_pud-pos-PROPN.html) – [PUNCT](tr_pud-pos-PUNCT.html) – [SCONJ](tr_pud-pos-SCONJ.html) – [SYM](tr_pud-pos-SYM.html) – [VERB](tr_pud-pos-VERB.html) – [X](tr_pud-pos-X.html)

## Features

[Aspect](tr_pud-feat-Aspect.html) – [Case](tr_pud-feat-Case.html) – [Definite](tr_pud-feat-Definite.html) – [Evident](tr_pud-feat-Evident.html) – [Foreign](tr_pud-feat-Foreign.html) – [Mood](tr_pud-feat-Mood.html) – [Number](tr_pud-feat-Number.html) – [Number[psor]](tr_pud-feat-Number-psor.html) – [NumType](tr_pud-feat-NumType.html) – [Person](tr_pud-feat-Person.html) – [Person[psor]](tr_pud-feat-Person-psor.html) – [Polarity](tr_pud-feat-Polarity.html) – [PronType](tr_pud-feat-PronType.html) – [Reflex](tr_pud-feat-Reflex.html) – [Register](tr_pud-feat-Register.html) – [Tense](tr_pud-feat-Tense.html) – [VerbForm](tr_pud-feat-VerbForm.html) – [Voice](tr_pud-feat-Voice.html)

## Relations

[acl](tr_pud-dep-acl.html) – [advcl](tr_pud-dep-advcl.html) – [advmod](tr_pud-dep-advmod.html) – [advmod:emph](tr_pud-dep-advmod-emph.html) – [amod](tr_pud-dep-amod.html) – [appos](tr_pud-dep-appos.html) – [aux](tr_pud-dep-aux.html) – [aux:q](tr_pud-dep-aux-q.html) – [case](tr_pud-dep-case.html) – [cc](tr_pud-dep-cc.html) – [cc:preconj](tr_pud-dep-cc-preconj.html) – [ccomp](tr_pud-dep-ccomp.html) – [clf](tr_pud-dep-clf.html) – [compound](tr_pud-dep-compound.html) – [compound:lvc](tr_pud-dep-compound-lvc.html) – [compound:redup](tr_pud-dep-compound-redup.html) – [conj](tr_pud-dep-conj.html) – [cop](tr_pud-dep-cop.html) – [csubj](tr_pud-dep-csubj.html) – [dep](tr_pud-dep-dep.html) – [det](tr_pud-dep-det.html) – [det:predet](tr_pud-dep-det-predet.html) – [discourse](tr_pud-dep-discourse.html) – [dislocated](tr_pud-dep-dislocated.html) – [fixed](tr_pud-dep-fixed.html) – [flat](tr_pud-dep-flat.html) – [goeswith](tr_pud-dep-goeswith.html) – [iobj](tr_pud-dep-iobj.html) – [mark](tr_pud-dep-mark.html) – [nmod](tr_pud-dep-nmod.html) – [nmod:poss](tr_pud-dep-nmod-poss.html) – [nsubj](tr_pud-dep-nsubj.html) – [nummod](tr_pud-dep-nummod.html) – [obj](tr_pud-dep-obj.html) – [obl](tr_pud-dep-obl.html) – [orphan](tr_pud-dep-orphan.html) – [parataxis](tr_pud-dep-parataxis.html) – [punct](tr_pud-dep-punct.html) – [root](tr_pud-dep-root.html) – [xcomp](tr_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 16536 tokens and 16882 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2179 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 598 types of words that contain both letters and punctuation. Examples: M.Ö., Çin'in, 2014'te, Avrupa'nın, Üniversitesi'nde, İngiltere'de, 2012'de, ABD'de, Afrika'da, Akdeniz'de, Fransa'nın, Meksika'nın, Moğolistan'ın, Roma'da, Rona'nın, Rusya'ya, Savaşı'nın, Trump'ın, İtalya'ya, 1492'de, 1820'de, 1879'da, 1911'de, 1912'de, 1916'da, 1960'lardan, 1976'da, 1990'lı, 2004'te, 2011'de, 60'lı, ABD'nin, Alaska'da, Alvarez'in, Amerika'da, Amerika'nın, Antarktika'yı, Arnavutluk'un, Asya'da, Avrupa'da, Avustralya'da, Avustralya'nın, Clinton'un, Clinton'ın, Disney'in, Doss'un, Ekim'de, Fransa'dan, Gine'de, Hollanda'da</li>
</ul>

<ul>
<li>This corpus contains 346 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 275 types of multi-word tokens. Examples: arasındaki, sonraki, üzerindeki, bölgedeki, sahiptir, Üniversitesi'ndeki, aittir, ayındaki, değildi, dünyadaki, hakkındaki, ilgilidir, vardır, yaşındaki, yoksa, ABD'deki, Roma'daki, alandaki, buradaki, dolardır, dönemindeki, dışındaki, etrafındaki, gibiydi, görevdeki, göstergesidir, kıyısındaki, liderliğindeki, merkezdeki, tartışmalıdır, tümördür, vardı, yoktu, önceki, ülkedeki, 1912'deki, 1914'teki, 1996'daki, 2014'teki, ABD'deydi, Afrika'daki, Akdeniz'deki, Amerika'daki, Avrasya'daki, Avrupa'daki, Balkanlar'daki, Batı'daki, Brexit'teki, Cambridgeshire'deki, Capua'daki.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 33 lemmas tagged as pronouns (PRON): Buray, _, bazı, ben, bir, birbiri, biri, birçoğu, biz, bu, bura, diğer, hangi, hangis, hepsi, herkes, hiçbiri, kendi, kim, kimse, ne, nere, o, on, ora, senden, siz, tamam, çok, çoğ, Şura, şey, şu</li>
</ul>

<ul>
<li>This corpus contains 24 lemmas tagged as determiners (DET): %, 50, _, bazı, başka, bir, birkaç, birtakım, birçok, bu, diğer, hangi, her, herhangi, hiçbir, kaç, ne, o, tüm, yüz, çok, çoğu, öte, şu</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as PRON and sometimes as DET: _, bazı, bir, bu, diğer, hangi, ne, o, çok, şu</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): _, değil, i, mi, ol</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: _, değil, i, ol</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>ADV: olmadan, ederken, akarken, bulunmadan, durmadan, düşünmeden, görünürken, çekerken, İyileşerek</li>
    <li>AUX: yken, ken, olmadan</li>
    <li>NOUN: etmeden, olmadan, oluşmadan, yapılmadan</li>
    <li>VERB: etkilenmeden</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>ADJ: kalma</li>
    <li>AUX: olmasına, olma, olmakla, olması, olmasının, olmaya, olmak, itmeye, olmaktan, olmaları</li>
    <li>NOUN: büyüme, savunma, edilmesi, soruşturma, çalışma, etmeye, çıkmaya, alma, etmesi, etmesini</li>
    <li>VERB: beklemeye, etmesine, gerçekleştirmesi, uzaklaştırmaya, çıkmaya</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: gerçekleştirilen, e​v​c​i​l​l​e​ş​t​i​r​i​l​e​n​l​e​ş​t​i​r​i​l​e​n, gerçekleşen, gerçekleştiren, sertleşen, sorgulayacakları, zorlaştıran</li>
    <li>NOUN: b​a​y​a​ğ​ı​l​a​ş​t​ı​r​d​ı​k​l​a​r​ı​n​ı, edilen, gerçekleştiği, gerçekleştiğinde, ölümsüzleşeceği</li>
    <li>VERB: gerçekleşen</li>
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
      <li>ADJ: destekler, beklenmedik</li>
      <li>ADV: açıklamaların, ülkelerden</li>
      <li>AUX: olabilirler, değillerdir, diniz, ler, musunuz, olabileceklerini, olduklarında, olmalısınız, olurlar, olursak</li>
      <li>NOUN: insanlar, güçler, yıllar, erkekler, yatırımcıların, yıllarda, Demokratlar, aylarında, bölgeler, devletleri</li>
      <li>PRON: bunlar, bunların, bunlardan, bazıları, diğerlerinin, kendilerini, şeyler, şunları, Kendilerine, bazılarını</li>
      <li>PROPN: Romalılar, Çinliler, Alpler, Atinalılar, Fenikeliler, Francisco'luların, Malenezyalıların, Meksikalılar, Spartalılar, Aborijinleri</li>
      <li>VERB: vurgular, verdiler, alacaklar, düşünüyoruz, ediyorlar, etkilenmişlerdir, ettiler, kalmışlardır, olursak, raporlar</li>
      <li>X: lerin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: büyük, yeni, son, sahip, fazla, ilk, aynı, iyi, ilgili, yüksek</li>
      <li>ADJ-Part: gerçekleştirilen, e​v​c​i​l​l​e​ş​t​i​r​i​l​e​n​l​e​ş​t​i​r​i​l​e​n, gerçekleşen, gerçekleştiren, sertleşen, zorlaştıran</li>
      <li>ADP: doğru, ilgili, dahil, sıra, adına, ki</li>
      <li>ADV: açıkça, fazla, böyle, iyice, neden, yeni, az, iyi, ziyade, değil</li>
      <li>ADV-Conv: ederken, akarken, görünürken, çekerken</li>
      <li>AUX: olan, dır, dir, değil, oldu, ise, olduğunu, ydı, ydi, olduğu</li>
      <li>CCONJ: and</li>
      <li>DET: bir, bu, her, diğer, birçok, bazı, tüm, o, birkaç, şu</li>
      <li>NOUN: yıl, kuzey, güney, tarafından, yer, arasında, hava, kez, savaş, M.Ö.</li>
      <li>NOUN-Ger: edilmesine, edilmesini, f​e​d​e​r​a​l​l​e​ş​t​i​r​i​l​m​e​s​i​n​i, gerçekleştirmekten, kentleşme, kolaylaştırmamız, sömürgeleştirme, yoğunlaşmaya, yıkılmasıyla, çekilme</li>
      <li>NOUN-Part: b​a​y​a​ğ​ı​l​a​ş​t​ı​r​d​ı​k​l​a​r​ı​n​ı, gerçekleştiği, gerçekleştiğinde, ölümsüzleşeceği</li>
      <li>NUM: iki, üç, on, bir, milyon, altı, 10, dört, milyar, 1</li>
      <li>PRON: bu, kendi, Bununla, biri, bunu, bunun, onu, ne, o, buna</li>
      <li>PROPN: İngiliz, Çin, Alman, Amerika, ABD, Hong, Akdeniz, Avrupa, Fransız, Hint</li>
      <li>PUNCT: 1794), dedi</li>
      <li>VERB: dedi, etti, başladı, söyledi, çıktı, edildi, verdi, ediyor, geldi, aldı</li>
      <li>VERB-Ger: gerçekleştirmesi, uzaklaştırmaya</li>
      <li>VERB-Part: gerçekleşen</li>
      <li>X: Go, H, Son, in, 'da, Buck, Golden, Her, Knuck</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Abl
    <ul>
      <li>ADJ: sıradan</li>
      <li>ADP: ardından</li>
      <li>ADV: ülkelerden</li>
      <li>AUX: olduğundan, olmadığından, olmaktan</li>
      <li>AUX-Ger: olmaktan</li>
      <li>NOUN: tarafından, azından, yüzden, açısından, bakımından, yüzyıldan, görevden, ölümünden, üzerinden, 1960'lardan</li>
      <li>NOUN-Ger: başlamasından, devralınmasından, değiştirmesinden, gelmesinden, gerilemesinden, gerçekleştirmekten, geçirmekten, geçmesinden, gönderebilmekten, görmekten</li>
      <li>PRON: bunlardan, kendinden, Senden, birbirinden, bundan</li>
      <li>PROPN: Fransa'dan, Meiji'den, AB'den, Akhalar'dan, Avery'den, Balkanlar'dan, Danimarkacadan, Fince'den, Holden'den, Kanada'dan</li>
      <li>VERB: kaldığından</li>
      <li>X: Golden</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>AUX: olduğunu, olacağını, olmadığını, olabileceğini, olabileceklerini, olmayacağını, olmayı</li>
      <li>AUX-Ger: olmayı</li>
      <li>DET: çoğu</li>
      <li>NOUN: gerektiğini, olduğunu, bölümünü, kişiyi, durumu, dünyayı, etmesini, ihtimalini, planını, verdiğini</li>
      <li>NOUN-Ger: etmesini, almayı, etmeyi, çalışmasını, çalışmayı, almamasını, almasını, atanmasını, ayrılmayı, açıklamasını</li>
      <li>PRON: bunu, onu, kendisini, bizi, kendilerini, çoğunu, burayı, kendini, şunları, bazılarını</li>
      <li>PROPN: Antarktika'yı, Moravia'yı, Abakumov'u, Akdeniz'i, Almanya'yı, Andy'yi, Angel'i, Anshi'yi, Avrupa'yı, Avusturya'yı</li>
      <li>VERB: edildiğini</li>
      <li>X: Heart"ı</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADP: adına</li>
      <li>ADV: hale, yerine</li>
      <li>AUX: olmasına, olmaya, olduğuna, itmeye</li>
      <li>AUX-Ger: olmasına, olmaya, itmeye</li>
      <li>NOUN: ortaya, başına, ele, yerine, hale, yere, altına, haline, yılına, araya</li>
      <li>NOUN-Ger: etmeye, çıkmaya, almaya, bozulmaya, kalmasına, koymaya, kullanmaya, kurmaya, olmasına, oluşturmasına</li>
      <li>PRON: buna, ona, birbirine, bize, buraya, Kendilerine, Size, birine, bunlara, kendisine</li>
      <li>PROPN: Rusya'ya, İtalya'ya, Trump'a, ABD'ye, Agora'ya, Ahit'e, Albany'ye, Amerika'ya, Angeles'a, Asya'ya</li>
      <li>VERB: aldığına, beklemeye, etmesine, sayıldığına, uzaklaştırmaya, çıkmaya</li>
      <li>VERB-Ger: beklemeye, etmesine, uzaklaştırmaya, çıkmaya</li>
      <li>X: Mps'ye</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADV: açıklamaların</li>
      <li>AUX: olmasının, olduğunun, olmanın</li>
      <li>AUX-Ger: olmasının, olmanın</li>
      <li>NOUN: savaşın, yatırımcıların, yüzyılın, bölgenin, Savaşı'nın, alanlarının, bankanın, devletin, dönemin, dünyanın</li>
      <li>NOUN-Ger: alınmasının, atılmasının, basmasının, edilmesinin, etmenin, etmesinin, geçirmesinin, kalmasının, saldırmanın, sevmelerinin</li>
      <li>PRON: bunun, onun, bunların, birinin, Bizim, benim, diğerlerinin, hangisinin, hepsinin, kendisinin</li>
      <li>PROPN: Çin'in, Avrupa'nın, Fransa'nın, Meksika'nın, Moğolistan'ın, Rona'nın, Trump'ın, ABD'nin, Alvarez'in, Amerika'nın</li>
      <li>X: Anyway"in, lerin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>AUX-Ger: olmakla</li>
      <li>NOUN: nedeniyle, nedenle, çoğunlukla, ihtimalle, kesinlikle, başarıyla, hızla, kıyasla, kızla, olasılıkla</li>
      <li>NOUN-Ger: canlandırmakla, ermesiyle, etmesiyle, girmekle, hesaplamakla, incelenmesiyle, kurulmasıyla, nitelendirmesiyle, olmasıyla, tasarlamakla</li>
      <li>PRON: Bununla, onunla, birbiriyle, biriyle, burayla, kendisiyle, onlarla</li>
      <li>PROPN: Arnavutluk'la, Britanya'yla, Douglas'la, Eagle'la, Horton'la, Plantagenet'le, Records'la</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADV: arasında, şekilde, gelindiğinde, noktada, sonunda, yazısında</li>
      <li>AUX: olduklarında, olduğunda</li>
      <li>DET: yüzde</li>
      <li>NOUN: arasında, şekilde, yılında, konusunda, üzerinde, altında, hakkında, sayıda, zamanda, arada</li>
      <li>NOUN-Ger: avlanmasında, etmede</li>
      <li>NOUN-Part: gerçekleştiğinde</li>
      <li>NUM: yüzde</li>
      <li>PRON: orada, burada, birinde, nerede, bunda, onda, çoğunda</li>
      <li>PROPN: İngiltere'de, ABD'de, Afrika'da, Akdeniz'de, Roma'da, Alaska'da, Amerika'da, Asya'da, Avrupa'da, Avustralya'da</li>
      <li>VERB: edildiğinde</li>
      <li>X: Street'te, 'da</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ-Ger: kalma</li>
      <li>ADJ-Part: gerçekleştiren, sorgulayacakları</li>
      <li>AUX: olduğu, olma, olmak, olması, olmaları</li>
      <li>AUX-Ger: olma, olmak, olması, olmaları</li>
      <li>NOUN: büyüme, kısmı, durum, edilmesi, film, kişi, savunma, insan, insanlar, polisi</li>
      <li>NOUN-Ger: büyüme, edilmesi, savunma, soruşturma, çalışma, çatışma, alma, almaları, artması, ayırma</li>
      <li>NOUN-Part: ölümsüzleşeceği</li>
      <li>PRON: bu, bunlar, o, ben, biri, şey, bazıları, birçoğu, herkes, burası</li>
      <li>PROPN: Trump, Blunt, Kesha, Mishima, Winstone, Yunanistan, Çin, Afrika, Aldrin, Alpler</li>
      <li>VERB: kalmak, getirmek</li>
      <li>X: Dead, Knew, News, Prayer, Uber, You</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: bu, her, diğer, tüm, o, şu, hangi</li>
      <li>PRON: bu, o</li>
      <li>X: Her</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: bir</li>
      <li>DET: bir, birçok, bazı, birkaç, herhangi, hiçbir, Birtakım, çoğu</li>
      <li>NUM: bir</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: yok, inanılmaz, edilemez, almaz, alışılmamış, beklenmedik, bulunmayan, cevaplanamamış, doymayan, doğmamış</li>
      <li>ADJ-Part: sorgulayacakları</li>
      <li>ADV: değil, olmadan, etmezken, onaylamayarak, taşmayınca, bulunmadan, durmadan, düşünmeden</li>
      <li>ADV-Conv: olmadan, bulunmadan, durmadan, düşünmeden</li>
      <li>AUX: değil, değildir, olmayan, olmadığını, olmaz, değildi, değillerdir, olmadan, olmadığından, olmamalı</li>
      <li>AUX-Conv: olmadan</li>
      <li>DET: hiçbir</li>
      <li>NOUN: olmadığını, uyuşmazlık, almaması, almamasını, anlamadığını, beklemediğine, bulunmadığı, bulunmaması, bulunmamasını, bulunmamaya</li>
      <li>NOUN-Conv: etmeden, olmadan, oluşmadan, yapılmadan</li>
      <li>NOUN-Ger: almaması, almamasını, bulunmaması, bulunmamasını, bulunmamaya, etmemeyi, görülmemesine, inanmamaları, sağlamaması, tamamlanmamasından</li>
      <li>PRON: hiçbiri</li>
      <li>VERB: değil, bilmiyorum, almadı, anlamadı, anlaşılamaz, bilemiyorum, bilinmiyordu, bilmiyor, bozulmadı, bulunamadı</li>
      <li>VERB-Conv: etkilenmeden</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: var, eden, gelen, olan, edilen, yapılan, bulunan, oluşan, yaptığı, geçen</li>
      <li>ADV: ederek, edip, kullanarak, geçerek, giderek, olup, başlayarak, göndererek, kaldırarak, olarak</li>
      <li>AUX: olarak, olan, ise, olduğunu, olduğu, olup, olacağını, olabileceğini, olduğuna, olunca</li>
      <li>DET: bir, bu, her, diğer, birçok, bazı, tüm, o, birkaç, şu</li>
      <li>NOUN: gerektiğini, olduğunu, alan, artış, artışı, gelindiğinde, verdiğini, artışın, başladığında, direniş</li>
      <li>NOUN-Part: edilen</li>
      <li>NUM: bir</li>
      <li>PRON: bu, Bununla, biri, bunu, bunun, onu, bunlar, o, buna, orada</li>
      <li>VERB: alan, bulurken, bırakılırken, gelerek, ise, kaldıkça, sayarak, aldığına, bilinen, duran</li>
      <li>X: Her</li>
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
      <li>ADJ: inanılmaz, edilemez, uygulanabilir, Yenilenebilir, almaz, gerçekleştirilen, güvenilir, güvenilmez, izlenebilir, Çalar</li>
      <li>AUX: olabilir, olursa, olabilirler, olmaz, olmayabilir, olur, olurlar, olursak</li>
      <li>NOUN: durum, geçer, payandalar</li>
      <li>PROPN: Gezer</li>
      <li>VERB: yapar, anlatır, başlar, bulunur, eder, görülür, içerir, sağlar, açabilir, dönerdi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>ADV-Conv: akarken, ederken, çekerken</li>
      <li>VERB: farklılaşır</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>ADJ: edecek, gerçekleştirilen, Birleşmiş, adanmış, alacak, alışılmamış, beklenmedik, biçilmiş, cevaplanamamış, donatılmış</li>
      <li>ADJ-Ger: kalma</li>
      <li>ADJ-Part: gerçekleştirilen, e​v​c​i​l​l​e​ş​t​i​r​i​l​e​n​l​e​ş​t​i​r​i​l​e​n, gerçekleşen, gerçekleştiren, sertleşen, sorgulayacakları, zorlaştıran</li>
      <li>ADP: ki</li>
      <li>ADV: olmadan, bulunmadan, durmadan, düşünmeden, yükselecek, İyileşerek</li>
      <li>ADV-Conv: olmadan, bulunmadan, durmadan, düşünmeden, İyileşerek</li>
      <li>AUX: dır, dir, oldu, ydı, olmak, ydi, dı, olmuştur, tir, olacak</li>
      <li>AUX-Conv: yken, ken, olmadan</li>
      <li>AUX-Ger: olmasına, olma, olmakla, olması, olmasının, olmaya, olmak, itmeye, olmaktan, olmaları</li>
      <li>NOUN: yapmak, etmek, büyüme, savunma, edilmesi, soruşturma, çalışma, etmeye, görmek, çıkmaya</li>
      <li>NOUN-Conv: etmeden, olmadan, oluşmadan, yapılmadan</li>
      <li>NOUN-Ger: büyüme, savunma, edilmesi, soruşturma, çalışma, etmeye, çıkmaya, alma, etmesi, etmesini</li>
      <li>NOUN-Part: b​a​y​a​ğ​ı​l​a​ş​t​ı​r​d​ı​k​l​a​r​ı​n​ı, edilen, gerçekleştiği, gerçekleştiğinde, ölümsüzleşeceği</li>
      <li>PUNCT: dedi</li>
      <li>VERB: dedi, etti, başladı, söyledi, çıktı, edildi, verdi, geldi, aldı, edilmiştir</li>
      <li>VERB-Conv: etkilenmeden</li>
      <li>VERB-Ger: beklemeye, etmesine, gerçekleştirmesi, uzaklaştırmaya, çıkmaya</li>
      <li>VERB-Part: gerçekleşen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prog
    <ul>
      <li>AUX: oluyor</li>
      <li>NOUN: hatırlamakta</li>
      <li>VERB: ediyor, söylüyor, geliyor, gerekiyor, görünüyor, gösteriyor, alıyor, bulunmaktadır, diyor, içeriyor</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prosp
    <ul>
      <li>VERB: okuyacaktı, olacaklardı, yaratacaktı, üretecekti</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: ise, olsa, sa, olsaydı, se, yse</li>
      <li>VERB: olsa, ise, benzese, biliyorsanız, getirmese</li>
    </ul>
  </li>
</ul>

<ul>
  <li>CndGen
    <ul>
      <li>AUX: olursa, olursak</li>
      <li>VERB: olursa, olursak, bırakırsa, düşünülürse, gelirse, isterseniz, seçerse, yapılırsa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>CndPot
    <ul>
      <li>VERB: çözülebilse</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: inanılmaz, almaz, gerçekleştirilen, güvenilir, güvenilmez, Çalar</li>
      <li>ADP: ki</li>
      <li>AUX: dir, dır, olmuştur, tir, değildir, tır, dur, dür, olacaktır, olmaz</li>
      <li>NOUN: geçer, payandalar</li>
      <li>PROPN: Gezer</li>
      <li>VERB: edilmiştir, etmiştir, başlamıştır, almıştır, bulunmaktadır, gelmiştir, yapar, almaktadır, anlatır, başlar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>GenNec
    <ul>
      <li>VERB: kaçmamalıdır, oluşturulmalıdır</li>
    </ul>
  </li>
</ul>

<ul>
  <li>GenPot
    <ul>
      <li>ADJ: edilemez, uygulanabilir, Yenilenebilir, izlenebilir</li>
      <li>AUX: olabilir, olabilirler, olmayabilir</li>
      <li>VERB: açabilir, görülebilir, sağlayabilir, verebilir, anlaşılamaz, artırabilir, açabilirler, bekleyebilirdi, bulanıklaştırabilir, bulunabilir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>ADV: zorla</li>
      <li>AUX: olsun</li>
      <li>NOUN: ahdet, soyun, çekiçle</li>
      <li>PROPN: Yum</li>
      <li>VERB: at, atın, seçin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: edecek, gerçekleştirilen, Birleşmiş, adanmış, alacak, alışılmamış, beklenmedik, biçilmiş, donatılmış, donmuş</li>
      <li>ADJ-Ger: kalma</li>
      <li>ADJ-Part: gerçekleştirilen, e​v​c​i​l​l​e​ş​t​i​r​i​l​e​n​l​e​ş​t​i​r​i​l​e​n, gerçekleşen, gerçekleştiren, sertleşen, zorlaştıran</li>
      <li>ADV: değil, olmadan, ederken, akarken, bulunmadan, durmadan, düşünmeden, görünürken, yükselecek, çekerken</li>
      <li>ADV-Conv: olmadan, ederken, akarken, bulunmadan, durmadan, düşünmeden, görünürken, çekerken, İyileşerek</li>
      <li>AUX: değil, oldu, ydı, olmak, ydi, dı, dır, olacak, olmasına, yken</li>
      <li>AUX-Conv: yken, ken, olmadan</li>
      <li>AUX-Ger: olmasına, olma, olmakla, olması, olmasının, olmaya, olmak, itmeye, olmaktan, olmaları</li>
      <li>NOUN: yapmak, etmek, büyüme, savunma, edilmesi, soruşturma, çalışma, etmeye, görmek, çıkmaya</li>
      <li>NOUN-Conv: etmeden, olmadan, oluşmadan, yapılmadan</li>
      <li>NOUN-Ger: büyüme, savunma, edilmesi, soruşturma, çalışma, etmeye, çıkmaya, alma, etmesi, etmesini</li>
      <li>NOUN-Part: b​a​y​a​ğ​ı​l​a​ş​t​ı​r​d​ı​k​l​a​r​ı​n​ı, edilen, gerçekleştiği, gerçekleştiğinde</li>
      <li>PUNCT: dedi</li>
      <li>VERB: dedi, etti, başladı, söyledi, çıktı, edildi, verdi, ediyor, geldi, aldı</li>
      <li>VERB-Conv: etkilenmeden</li>
      <li>VERB-Ger: beklemeye, etmesine, gerçekleştirmesi, uzaklaştırmaya, çıkmaya</li>
      <li>VERB-Part: gerçekleşen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>ADJ: tartışmalı, Seçmeli</li>
      <li>AUX: olmalısınız, olmamalı</li>
      <li>VERB: eğitmeliyiz, olmalı</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Opt
    <ul>
      <li>NOUN: yana, dönene</li>
      <li>VERB: edelim, göre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>ADJ: cevaplanamamış, kısıtlayabilecek, sokabilecek, sorgulayacakları, çekilebilecek, çözülebilecek</li>
      <li>ADJ-Part: sorgulayacakları</li>
      <li>NOUN-Ger: gidebilmemiz, gönderebilmekten, kalabilmesi</li>
      <li>NOUN-Part: ölümsüzleşeceği</li>
      <li>VERB: alabildi, bilemiyorum, bulunamadı, erişemiyordu, girilebiliyordu, hissedebiliyordu, sakınamayabiliyor, sallayabiliyor, yürütebiliyor</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Aor
    <ul>
      <li>ADV-Conv: ederken, akarken, görünürken, çekerken</li>
      <li>VERB: gelir, farklılaşır, umarım</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>ADJ: edecek, alacak, görmeyecek, kısıtlayabilecek, sokabilecek, sorgulayacakları, yapılacak, çekilebilecek, çözülebilecek, çıkaracak</li>
      <li>ADJ-Part: sorgulayacakları</li>
      <li>ADV: yükselecek</li>
      <li>AUX: olmak, olacak, olacaktır</li>
      <li>NOUN: yapmak, etmek, görmek, oluşturmak, almak, dönmek, geçmek, izlemek, kurtarmak, kurtulmak</li>
      <li>NOUN-Part: ölümsüzleşeceği</li>
      <li>VERB: getirecektir, izlemek, kalmak, katılacak, olacak, yapacak, Karşılaştıracak, alacak, azaltacaktır, bulacaktır</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ: Birleşmiş, adanmış, alışılmamış, beklenmedik, biçilmiş, cevaplanamamış, donatılmış, donmuş, doğmamış, edilmiş</li>
      <li>AUX: oldu, ydı, ydi, dı, olmuştur, dır, di, dir, olsaydı, ti</li>
      <li>NOUN: b​a​y​a​ğ​ı​l​a​ş​t​ı​r​d​ı​k​l​a​r​ı​n​ı, gerçekleştiği, gerçekleştiğinde, kurduğunda</li>
      <li>NOUN-Part: b​a​y​a​ğ​ı​l​a​ş​t​ı​r​d​ı​k​l​a​r​ı​n​ı, gerçekleştiği, gerçekleştiğinde</li>
      <li>PUNCT: dedi</li>
      <li>VERB: dedi, etti, başladı, söyledi, çıktı, edildi, verdi, geldi, aldı, edilmiştir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>AUX: olmuştu, ti</li>
      <li>VERB: demişti, etmişti, girmişti, kalmıştı, kullanılmıştı, unutulmuştu, vermişti, açmıştı, başlamıştı, belirtmişti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ: inanılmaz, gerçekleştirilen, edilemez, tartışmalı, uygulanabilir, Seçmeli, Yenilenebilir, almaz, e​v​c​i​l​l​e​ş​t​i​r​i​l​e​n​l​e​ş​t​i​r​i​l​e​n, gerçekleşen</li>
      <li>ADJ-Ger: kalma</li>
      <li>ADJ-Part: gerçekleştirilen, e​v​c​i​l​l​e​ş​t​i​r​i​l​e​n​l​e​ş​t​i​r​i​l​e​n, gerçekleşen, gerçekleştiren, sertleşen, zorlaştıran</li>
      <li>ADP: ki</li>
      <li>ADV: değil, olmadan, bulunmadan, durmadan, düşünmeden, zorla, İyileşerek</li>
      <li>ADV-Conv: olmadan, bulunmadan, durmadan, düşünmeden, İyileşerek</li>
      <li>AUX: dir, dır, değil, tir, değildir, olsa, olabilir, olmasına, tır, yken</li>
      <li>AUX-Conv: yken, ken, olmadan</li>
      <li>AUX-Ger: olmasına, olma, olmakla, olması, olmasının, olmaya, olmak, itmeye, olmaktan, olmaları</li>
      <li>NOUN: büyüme, savunma, edilmesi, soruşturma, çalışma, etmeye, yana, çıkmaya, alma, etmesi</li>
      <li>NOUN-Conv: etmeden, olmadan, oluşmadan, yapılmadan</li>
      <li>NOUN-Ger: büyüme, savunma, edilmesi, soruşturma, çalışma, etmeye, çıkmaya, alma, etmesi, etmesini</li>
      <li>NOUN-Part: edilen</li>
      <li>PROPN: Gezer, Yum, del</li>
      <li>VERB: ediyor, söylüyor, geliyor, gerekiyor, görünüyor, gösteriyor, olsa, alıyor, bulunmaktadır, diyor</li>
      <li>VERB-Conv: etkilenmeden</li>
      <li>VERB-Ger: beklemeye, etmesine, gerçekleştirmesi, uzaklaştırmaya, çıkmaya</li>
      <li>VERB-Part: gerçekleşen</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Cau
    <ul>
      <li>ADJ: gerçekleştiren, zorlaştıran, çıkaracak</li>
      <li>ADJ-Part: gerçekleştiren, zorlaştıran</li>
      <li>AUX-Ger: olmaktan</li>
      <li>NOUN: azaltılmasında, b​a​y​a​ğ​ı​l​a​ş​t​ı​r​d​ı​k​l​a​r​ı​n​ı, gerçekleştirmekten, geçirmekten, gönderebilmekten, görmekten, kolaylaştırmamız, oluşturmak, oynamaktan, sömürgeleştirme</li>
      <li>NOUN-Ger: gerçekleştirmekten, geçirmekten, gönderebilmekten, görmekten, kolaylaştırmamız, oynamaktan, sömürgeleştirme, toplanmasıyla, vermekten, yaşamaktan</li>
      <li>NOUN-Part: b​a​y​a​ğ​ı​l​a​ş​t​ı​r​d​ı​k​l​a​r​ı​n​ı</li>
      <li>VERB: geçirdi, anlatır, belirtti, çıkardı, başlattı, değiştirdi, geliştirdi, adlandırdı, adlandırmışlardır, anlatıyor</li>
      <li>VERB-Ger: gerçekleştirmesi, uzaklaştırmaya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>CauPass
    <ul>
      <li>ADJ: gerçekleştirilen, e​v​c​i​l​l​e​ş​t​i​r​i​l​e​n​l​e​ş​t​i​r​i​l​e​n, geliştirilmiş, küçültülmüş</li>
      <li>ADJ-Part: gerçekleştirilen, e​v​c​i​l​l​e​ş​t​i​r​i​l​e​n​l​e​ş​t​i​r​i​l​e​n</li>
      <li>NOUN-Ger: f​e​d​e​r​a​l​l​e​ş​t​i​r​i​l​m​e​s​i​n​i, nitelendirmesiyle, oluşturulması</li>
      <li>VERB: adlandırılır, başlatıldı, bildirildi, bitirildi, d​e​ğ​e​r​l​e​n​d​i​r​i​l​m​e​k​t​e​d​i​r, değiştirildi, durdurulamazdı, durduruldu, etkinleştirilecek, evcilleştirildi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ: inanılmaz, edilemez, uygulanabilir, Yenilenebilir, adanmış, alışılmamış, beklenmedik, biçilmiş, cevaplanamamış, donatılmış</li>
      <li>ADV-Conv: görünürken</li>
      <li>NOUN-Conv: yapılmadan</li>
      <li>NOUN-Ger: edilmesi, alınmasının, kullanılması, verilmesi, yapılması, atanmasını, atılmasının, avlanmasında, ayrıştırılması, bozulması</li>
      <li>VERB: edildi, edilmiştir, yapıldı, edilmiş, görülür, bölünmüştür, edilir, etkilenmişlerdir, getirildi, görüldü</li>
      <li>VERB-Conv: etkilenmeden</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Evident</a></li>
</ul>

<ul>
  <li>Nfh
    <ul>
      <li>ADJ: Birleşmiş, adanmış, alışılmamış, biçilmiş, cevaplanamamış, donatılmış, donmuş, doğmamış, edilmiş, esnemiş</li>
      <li>AUX: olmuştur, olmuştu, mış, olmamıştır, olmuş</li>
      <li>VERB: edilmiştir, etmiştir, başlamıştır, almıştır, edilmiş, gelmiştir, etmiş, kalmıştır, vermiştir, yapmıştır</li>
    </ul>
  </li>
</ul>

<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: bazılarını, birbirlerini</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: nasıl, Ne</li>
      <li>DET: hangi, kaç, ne</li>
      <li>PRON: ne, kim, hangisinin, nerede, neler, nereye, neyi</li>
      <li>PROPN: Kim'in</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: birbirine, birbirinden, birbiriyle</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>AUX: di</li>
      <li>DET: kaç</li>
      <li>NOUN: 6.000'den</li>
      <li>NUM: iki, ikinci, üçüncü, Birinci, İkinci, 5., 8., on, yedi, üç</li>
      <li>PROPN: Di, On</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: kendi, kendisini, kendisi, kendinden, kendini, kendisinin, kendisine, kendisiyle</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADJ: beklenmedik</li>
      <li>AUX: olursak, tum, yım, üz</li>
      <li>NOUN: ahırıma, uğraşmayacağım</li>
      <li>PRON: ben, bizi, Bizim, benim, bize, beni</li>
      <li>VERB: bilmiyorum, döndüm, düşünüyorum, düşünüyoruz, ediyorum, olursak, Sanırım, alıyorum, anlıyorum, araştırıyoruz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADV: zorla</li>
      <li>AUX: diniz, musunuz, olmalısınız, sın</li>
      <li>NOUN: ahdet, soyun, çekiçle</li>
      <li>PRON: Senden, Size, sizin</li>
      <li>PROPN: Yum, del</li>
      <li>VERB: at, atın, başlarsınız, biliyorsanız, erişebilirsiniz, ettiniz, isterseniz, seçin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: inanılmaz, edecek, edilemez, tartışmalı, uygulanabilir, Birleşmiş, Seçmeli, Yenilenebilir, adanmış, alacak</li>
      <li>ADP: ki</li>
      <li>ADV: değil, ederken, akarken, görünürken, yükselecek, çekerken</li>
      <li>ADV-Conv: ederken, akarken, görünürken, çekerken</li>
      <li>AUX: dır, dir, değil, oldu, ise, ydı, ydi, dı, olmak, olmuştur</li>
      <li>NOUN: yapmak, etmek, yana, görmek, oluşturmak, almak, dönmek, geçmek, izlemek, kurtarmak</li>
      <li>PRON: kendisini, herkes, kendisi, birbirine, kendisinin, onu, bazılarını, birbirinden, birbiriyle, birbirlerini</li>
      <li>PROPN: Gezer</li>
      <li>PUNCT: dedi</li>
      <li>VERB: dedi, etti, başladı, söyledi, çıktı, edildi, verdi, ediyor, geldi, aldı</li>
      <li>X: lerin</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: geçtiğimiz, Kurduğumuz, duydukları, gösterebileceğiniz, kaydedebileceğiniz, kaydettikleri, koyabildiğimiz, kullandığımız, olduğumuz, sorgulayacakları</li>
      <li>ADJ-Part: sorgulayacakları</li>
      <li>AUX: olabileceklerini, olduğunuz, olmaları</li>
      <li>AUX-Ger: olmaları</li>
      <li>NOUN: almaları, günümüzde, topraklarına, yerlerinden, Aralarında, Denizimiz, Dönüşlerinde, akışlarını, artışlarını, aştıkları</li>
      <li>NOUN-Ger: almaları, bakmanız, benimsemelerine, canlandırmaları, değiştirmeleri, düşünmeleri, etmeleri, gidebilmemiz, girmelerine, harcamaları</li>
      <li>NOUN-Part: b​a​y​a​ğ​ı​l​a​ş​t​ı​r​d​ı​k​l​a​r​ı​n​ı</li>
      <li>PRON: Bazıları, bazılarını, birbirlerini, birileri, kendilerini</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: yaptığı, ettiği, yönettiği, bulunduğu, dini, duyduğu, oynadığı, söylediği, tarihi, aldığı</li>
      <li>ADJ-Part: gerçekleştiren</li>
      <li>ADP: boyunca, ardından, itibarıyla, adına, aracılığıyla</li>
      <li>ADV: arasında, birliklerince, gelindiğinde, sonunda, yazısında, yerine</li>
      <li>AUX: olduğunu, olduğu, olacağını, olmasına, olmadığını, olması, olmasının, olabileceğini, olduğuna, olduklarında</li>
      <li>AUX-Ger: olmasına, olması, olmasının</li>
      <li>DET: çoğu</li>
      <li>NOUN: tarafından, arasında, yılında, konusunda, başkanı, üzerinde, başına, altında, günü, hakkında</li>
      <li>NOUN-Ger: edilmesi, etmesi, etmesini, ödemesi, alınmasının, artması, kalmasına, kullanılması, olmasına, oluşturmasına</li>
      <li>NOUN-Part: gerçekleştiği, gerçekleştiğinde, ölümsüzleşeceği</li>
      <li>PRON: birinin, burası, diğerlerinin, kendisini, bazıları, birbiriyle, birçoğu, kendisi, kendisinin, neyi</li>
      <li>PROPN: Aborijinleri, Cumhuriyeti'ni, Devletleri, Garrard'ına, Kamerun'u, Kamerunları, Kiki, Marksizminin, Persliğine, Platon</li>
      <li>VERB: aldığına, edildiğinde, edildiğini, etmesine, ettiği, gerçekleştirmesi, göründüğü, kaldığından, sayıldığına</li>
      <li>VERB-Ger: etmesine, gerçekleştirmesi</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: If, You, Buck, Knuck</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>1
        <ul>
          <li>ADJ: geçtiğimiz, Kurduğumuz, Tanıdığım, koyabildiğimiz, kullandığımız, olduğumuz</li>
          <li>NOUN: günümüzde, Denizimiz, Telefonum, ahırıma, arkadaşlarımdan, durağım, edeceğimizi, edemeyeceğimiz, ekibimiz, etmeyeceğimizi</li>
          <li>NOUN-Ger: gidebilmemiz, kolaylaştırmamız, yapmamız</li>
          <li>PRON: benim</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>ADJ: gösterebileceğiniz, kaydedebileceğiniz</li>
          <li>AUX: olduğunuz</li>
          <li>NOUN: azından, 33'üne, 40'ına, Romalılaştırmanın, bakacağınızı, bakmanız, beslemenize, derinde, derinden, elinizde</li>
          <li>NOUN-Ger: bakmanız, uyumanıza, vermemiz</li>
          <li>PROPN: Platon</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>ADJ: yaptığı, ettiği, yönettiği, bulunduğu, dini, duyduğu, oynadığı, söylediği, tarihi, aldığı</li>
          <li>ADJ-Part: gerçekleştiren, sorgulayacakları</li>
          <li>ADP: boyunca, ardından, itibarıyla, adına, aracılığıyla</li>
          <li>ADV: arasında, birliklerince, gelindiğinde, sonunda, yazısında, yerine</li>
          <li>AUX: olduğunu, olduğu, olacağını, olmasına, olmadığını, olması, olmasının, olabileceğini, olduğuna, olabileceklerini</li>
          <li>AUX-Ger: olmasına, olması, olmasının, olmaları</li>
          <li>DET: çoğu</li>
          <li>NOUN: tarafından, arasında, yılında, konusunda, başkanı, üzerinde, başına, altında, günü, hakkında</li>
          <li>NOUN-Ger: edilmesi, etmesi, etmesini, ödemesi, almaları, alınmasının, artması, kalmasına, kullanılması, olmasına</li>
          <li>NOUN-Part: b​a​y​a​ğ​ı​l​a​ş​t​ı​r​d​ı​k​l​a​r​ı​n​ı, gerçekleştiği, gerçekleştiğinde, ölümsüzleşeceği</li>
          <li>PRON: biri, bazıları, birinin, burası, diğerlerinin, kendisini, çoğunu, Bunun, Kendilerine, bazılarını</li>
          <li>PROPN: Aborijinleri, Cumhuriyeti'ni, Devletleri, Garrard'ına, Kamerun'u, Kamerunları, Kiki, Marksizminin, Persliğine, Savaşı'nda</li>
          <li>VERB: aldığına, edildiğinde, edildiğini, etmesine, ettiği, gelir, gerçekleştirmesi, göründüğü, kaldığından, sayıldığına</li>
          <li>VERB-Ger: etmesine, gerçekleştirmesi</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Register</a>
    <ul>
      <li>Form
        <ul>
          <li>NOUN: hatırlamakta</li>
          <li>VERB: almakta, büyümekte, dayanmakta, dayanmaktadır, etmekte, gerilemekte, kullanılmakta, odaklanmakta, yaşanmaktaydı, örtüşmekte</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: ol, i, _.</li>
</ul>

<ul>
<li>This corpus uses 4 lemmas as auxiliaries (<a>aux</a>). Examples: değil, mi, ol, i.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (55)</li>
      <li>VERB--NOUN-Abl (1)</li>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--NOUN-Nom (332)</li>
      <li>VERB--PRON (2)</li>
      <li>VERB--PRON-ADP(de) (1)</li>
      <li>VERB--PRON-Nom (30)</li>
      <li>VERB-Conv--NOUN-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (131)</li>
      <li>VERB--NOUN-Abl (5)</li>
      <li>VERB--NOUN-Acc (132)</li>
      <li>VERB--NOUN-Dat (23)</li>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--NOUN-Ins (2)</li>
      <li>VERB--NOUN-Nom (5)</li>
      <li>VERB--PRON (2)</li>
      <li>VERB--PRON-Abl (1)</li>
      <li>VERB--PRON-Acc (17)</li>
      <li>VERB--PRON-Dat (1)</li>
      <li>VERB-Ger--NOUN-Acc (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (5)</li>
      <li>VERB--NOUN-Dat (51)</li>
      <li>VERB--PRON-Dat (2)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 7 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: yönet kendi, bul kendisini, devir kendisini, emin kendinden, ilan kendisini, kur kendisini, önemse kendini</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>advmod:emph</a>, <a>aux:q</a>, <a>cc:preconj</a>, <a>compound:lvc</a>, <a>compound:redup</a>, <a>det:predet</a>, <a>nmod:poss</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>vocative</a>, <a>expl</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
