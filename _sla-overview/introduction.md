---
layout: base
title:  'Introduction'
permalink: sla/overview/introduction.html
---

# Links to resources

* [PML-TQ](pmltq.html)
* [Slovak dictionary](http://slovnik.azet.sk/pravopis/slovnik-sj/)
* [Slovenian dictionary PONS](http://en.pons.com/translate)
* [Slovenian: Slovar slovenskega knjižnega jezika](http://bos.zrc-sazu.si/sskj.html)
* [Upper Sorbian dictionaries](http://85.214.109.148:8180/dict/online)

<script type="text/javascript">
function getTreebank()
{
    var treebank = "ud_cs";
    // Get a reference to the form id="pmltqform"
    var theForm = document.forms["pmltqform"];
    // Get a reference to the treebank the user chooses name="treebank":
    var radioTreebank = theForm.elements["treebank"];
    // Here since there are 2 radio buttons radioTreebank.length = 2.
    // We loop through the radio buttons.
    for(var i = 0; i < radioTreebank.length; i++)
    {
        // if the radio button is checked
        if(radioTreebank[i].checked)
        {
            treebank = radioTreebank[i].value;
            // If we get a match then we break out of this loop.
            // No reason to continue if we get a match.
            break;
        }
    }
    return treebank;
}

function setFilter()
{
    var theForm = document.forms["pmltqform"];
    // for $a.lemma give $1, count() sort by $2 desc, $1
    // Potřebujeme pole prvků, které přicházejí v úvahu, včetně jejich reprezentace v PML-TQ, např. lform ... lower($a.form).
    var availableAttr =
    [
        ['lemma', '$a.lemma'],
        ['lform', 'lower($a.form)'],
        ['tag',   '$a.tag'],
        ['prontype', '$a.iset/prontype'],
        ['numtype',  '$a.iset/numtype'],
        ['gender',   '$a.iset/gender'],
        ['number',   '$a.iset/number'],
        ['case',     '$a.iset/case']
    ];
    var forpart = '';
    var givepart = '';
    var ielement = 0;
    for(var i = 0; i < availableAttr.length; i++)
    {
        if(theForm.elements[availableAttr[i][0]].checked)
        {
            ielement++;
            if(ielement>1)
            {
                forpart += ', ';
                givepart += ', ';
                sortpart += ', ';
            }
            forpart += availableAttr[i][1];
            givepart += '$'+ielement;
            sortpart += '$'+ielement;
        }
    }
    var sortpart = '';
    if(ielement>=1)
    {
        if(theForm.elements["countsort"].checked)
        {
            sortpart = '$' + (ielement+1) + ' desc, ' + givepart;
        }
        else
        {
            sortpart = givepart + ', ' + '$' + (ielement+1) + ' desc';
        }
        givepart += ', count()';
    }
    theForm.elements['filter'].value = ' >> for ' + forpart + ' give ' + givepart + ' sort by ' + sortpart;
    theForm.elements['filteron'].checked = 1;
}

function gotoQuery()
{
    var treebank=getTreebank();
    var url = "https://lindat.mff.cuni.cz//services/pmltq/#!/treebank/"+treebank+"/query/";
    var theForm = document.forms["pmltqform"];
    url += theForm.elements["query"].value;
    if(theForm.elements["filteron"].checked==true)
    {
        url += theForm.elements["filter"].value;
    }
    //window.location.assign(url);
    document.getElementById('embed').src = url;
}
</script>

  <form id="pmltqform" method="get" action="#">
  <table>
    <tr>
      <td valign="top">
        <table>
          <tr>
        <td><input type="button" name="submit" value="Submit" onclick="gotoQuery();" /></td>
        <td><input id="cs" type="radio" name="treebank" value="ud_cs" />&nbsp;<label for="cs">[cs]</label></td>
        <td><input id="cs-cac" type="radio" name="treebank" value="ud_cs_cac" />&nbsp;<label for="cs-cac">[cscac]</label></td>
        <td><input id="sk" type="radio" name="treebank" value="hamledt_sk" />&nbsp;<label for="sk">[sk]</label></td>
        <td><input id="pl" type="radio" name="treebank" value="ud_pl" />&nbsp;<label for="pl">[pl]</label></td>
        <td><input id="ru" type="radio" name="treebank" value="ud_ru" />&nbsp;<label for="ru">[ru]</label></td>
          </tr>
          <tr>
        <td></td>
        <td><input id="ru-str" type="radio" name="treebank" value="ud_ru_syntagrus" />&nbsp;<label for="ru-str">[rustr]</label></td>
        <td><input id="sl" type="radio" name="treebank" value="ud_sl" />&nbsp;<label for="sl">[sl]</label></td>
        <td><input id="hr" type="radio" name="treebank" value="ud_hr" />&nbsp;<label for="hr">[hr]</label></td>
        <td><input id="bg" type="radio" name="treebank" value="ud_bg" />&nbsp;<label for="bg">[bg]</label></td>
        <td><input id="cu" type="radio" name="treebank" value="ud_cu" />&nbsp;<label for="cu">[cu]</label></td>
          </tr>
        </table>
      </td>
      <td valign="top">
        Query:<br />
        Filter:&nbsp;<input type="checkbox" name="filteron" /><br />
      </td>
      <td valign="top">
        <input type="text" size="145" name="query" value='a-node $a := [tag="PRON"]' /><br />
        <input type="text" size="145" name="filter" value='>> for $a.lemma give $1, count() sort by $2 desc, $1' /><br />
        <input type="checkbox" name="lemma" checked />&nbsp;lemma
        <input type="checkbox" name="lform" checked />&nbsp;lform
        <input type="checkbox" name="tag" checked />&nbsp;tag
        <input type="checkbox" name="prontype" checked />&nbsp;prontype
        <input type="checkbox" name="numtype" checked />&nbsp;numtype
        <input type="checkbox" name="gender" checked />&nbsp;gender
        <input type="checkbox" name="number" checked />&nbsp;number
        <input type="checkbox" name="case" checked />&nbsp;case
        <input type="checkbox" name="countsort" checked />&nbsp;sort&nbsp;by&nbsp;count
        <input type="button" name="setfilter" value="Set filter" onclick="setFilter();" />
      </td>
    </tr>
  </table>
  </form>
  <iframe id="embed" name="embed" src="https://lindat.mff.cuni.cz//services/pmltq/" width="1580" height="680">
  <p>Your browser does not support iframes.</p>
  </iframe>
