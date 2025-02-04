var urlAtual = document.location.href.toLowerCase();
pixelIdFBB = '';
ysnVLibras = false;
ysnASB = false;
function checkURLAddJs(iframe) {
    if (urlAtual.indexOf('capcamead.com.br') >= 0) {
        pixelIdFBB = '178331666566085';
    } else if (urlAtual.indexOf("cursos24horaspremium.com.br") > 0) {
        if (!iframe) {
            addScriptHeadJs({
                type: 'text/javascript',
                id: 'eaf3f19e4fcac40131ee278cdb0284dd',
                src: 'https://www.grupo24horas.com.br/chat/script.php?id=eaf3f19e4fcac40131ee278cdb0284dd'
            },
                "var lz_data = {overwrite:false,0:'Cursos 24 Horas Premium'};", '', 'eaf3f19e4fcac40131ee278cdb0284dd');
        }
        pixelIdFBB = '1446493628990080';
    } else if (urlAtual.indexOf("unisuendesativado.com.br") > 0) {
        addScriptHeadJs({
            id: 'jsUnisuen',
            src: '/assets/js/clientes/unisuen.js',
            type: 'text/javascript'
        },
            "",
            '',
            'jsUnisuen'
        );
    } else if (urlAtual.indexOf('studead.com.br') >= 0) {
        pixelIdFBB = '166061068032880';
    } else if (urlAtual.indexOf('kdudaead.com.br') >= 0) {
        addScriptHeadJs({
            id: 'jsKduda',
            src: '/assets/js/clientes/kduda.js',
            type: 'text/javascript'
        },
            "",
            '',
            'jsKduda'
        );
    } else if (urlAtual.indexOf('formacaocursos.com.br') >= 0) {
        pixelIdFBB = '576194042983011';
    } else if (urlAtual.indexOf('saladeaula.campinas.br') >= 0) {
        addScriptHeadJs({
            id: 'jsSaladeaula1',
            src: '/assets/js/clientes/saladeaulaM.js',
            type: 'text/javascript'
        },
            "",
            '',
            'jsSaladeaula1'
        );
        addScriptBodyJs({
            id: 'jsSaladeaula2',
            src: '/assets/js/clientes/saladeaula.js',
            type: 'text/javascript'
        },
            "",
            '',
            'jsSaladeaula2'
        );
    } else if (urlAtual.indexOf('unibaieread.com') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'scriptunibaieread',
                src: '/assets/js/clientes/unibaieread.js',
                type: 'text/javascript'
            },
                "",
                '',
                'scriptunibaieread'
            );
        }
        pixelIdFBB = '293010071812271';
    } else if (urlAtual.indexOf('academiaceo.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-5KGLJDS', 'gtmacademiaceo');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KGLJDS" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptgtmacademiaceo');
        addScriptHeadJs({
            id: 'gaacademiaceo',
            src: 'ttps://www.googletagmanager.com/gtag/js?id=G-PL8NLFDWKQ',
            type: 'text/javascript'
        },
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-PL8NLFDWKQ');",
            '',
            'gaacademiaceo'
        );
        if (!iframe) {
            addScriptHeadJs({
                id: 'ze-snippet',
                src: 'https://static.zdassets.com/ekr/snippet.js?key=4a753d7d-a06d-4047-b384-e3bc2833980a',
                type: 'text/javascript'
            },
                "",
                '',
                'ze-snippet'
            );
        }
        addScriptBodyJs({
            id: 'jsacademiaceo',
            src: 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/c68c1020-2852-4838-9757-3a7f804380fd-loader.js',
            type: 'text/javascript'
        },
            "",
            '',
            'jsacademiaceo'
        );

    } else if (urlAtual.indexOf("maiscursos.euestudo.com.vc") > 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsMaisCursos',
                src: '/assets/js/clientes/maiscursos.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsMaisCursos'
            );
        }
    } else if (urlAtual.indexOf('euestudo.com.vc') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-5J7P6MC', 'gtmeuestudo');
        addScriptHeadJs({
            id: 'opteuestudo',
            src: 'https://www.googleoptimize.com/optimize.js?id=OPT-K83TS28',
            type: 'text/javascript'
        },
            "",
            '',
            'opteuestudo'
        );
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5J7P6MC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscripteuestudo');
    }
    /* else if (urlAtual.indexOf('catalogo.drmeducacao.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-5J7P6MC', 'gtmcatalogo');
        addScriptHeadJs({
                id: 'optcatalogo',
                src: 'https://www.googleoptimize.com/optimize.js?id=OPT-TBLVC2H',
                type: 'text/javascript'
            },
            "",
            '',
            'optcatalogo'
        );
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5J7P6MC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptcatalogo');
    }*/
    else if (urlAtual.indexOf('checkout.cursodocarlinhosmaia.com.br') >= 0) {
        addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-MN4GQ4K', 'gtmcursosdocarlinhosmaia');
        addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN4GQ4K" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptcursodocarlinhosmaia');
    } else if (urlAtual.indexOf('lms.ensina.ai') >= 0) {
        addScriptHeadJs({
            id: 'gtaglmsensinaai',
            src: 'https://www.googletagmanager.com/gtag/js?id=AW-11128556203',
            type: 'text/javascript'
        },
            "",
            'addGtag("AW-11128556203")',
            'gtaglmsensinaai'
        );
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-MN4GQ4K', 'gtmlmsensinaai');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN4GQ4K" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptlmsensinaai');
        pixelIdFBB = '597396398958967';
    } else if (urlAtual.indexOf('faculdadesucesso.edu.br') >= 0) {
        pixelIdFBB = '478753150222411';
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-KBPFW7Q', 'gtmfaculdadesucesso');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBPFW7Q" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptfaculdadesucesso');
    } else if (urlAtual.indexOf('fontecursosonline.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsfontecursosonline',
                src: '/assets/js/clientes/fontecursosonline.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsfontecursosonline'
            );
        }
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-NTN3H29', 'gtmfontecursosonline');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTN3H29" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptfontecursosonline');
    } else if (urlAtual.indexOf('masterflixx.com.br') >= 0) { //desativado conforme chamado 28581
        if (!iframe) {
            addScriptBodyJs({
                id: 'jsmasterflix',
                src: '/assets/js/clientes/masterflix.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsmasterflix'
            );
        }
    } else if (urlAtual.indexOf('fael.boabolsa.com.br') >= 0) {
        if (!iframe) {
            addScriptBodyJs({
                id: 'ze-snippet',
                src: 'https://static.zdassets.com/ekr/snippet.js?key=30f10687-7856-401e-8e22-922fbee4c2f5',
                type: 'text/javascript'
            },
                "",
                '',
                'ze-snippet'
            );
        }
    } else if (urlAtual.indexOf('faelflix.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-NKK4J9C', 'gtmfaelflix');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKK4J9C" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptgtmfaelflix');
    } else if (urlAtual.indexOf('eadunifatea.com.br') >= 0) {
        addScriptHeadJs({
            id: 'gtageadunifatea',
            src: 'https://www.googletagmanager.com/gtag/js?id=AW-615367517',
            type: 'text/javascript'
        },
            "",
            'addGtag("AW-615367517")',
            'gtageadunifatea'
        );
    } else if (urlAtual.indexOf('technosonline.com.br') >= 0) {
        /*if (!iframe) {
            addScriptHeadJs({
                id: 'scripttechnosonline',
                src: '/assets/js/clientes/technosonline.js',
                type: 'text/javascript'
            },
            "",
            '',
            'scripttechnosonline'
            );
        }*/
        pixelIdFBB = '3707994855877584';
    } else if (urlAtual.indexOf('prometaead.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'scriptprometaead',
                src: '/assets/js/clientes/prometaead.js',
                type: 'text/javascript'
            },
                "",
                '',
                'scriptprometaead'
            );
        }
        pixelIdFBB = '790033558447042';
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-WPZSD3G', 'gtmprometaead');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPZSD3G" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptprometaead');
    } else if (urlAtual.indexOf('uniflor.edu.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsuniflor',
                src: '/assets/js/clientes/uniflor.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsuniflor'
            );
        }
        ysnASB = true;
        ysnVLibras = true; //vlibras adicionado no index.html
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-KDGL54M', 'gtmuniflor');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KDGL54M" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptgtmuniflor');
        /*addScriptHeadJs({
            id: 'optuniflor',
            src: 'https://www.googleoptimize.com/optimize.js?id=OPT-MHVHH66',
            type: 'text/javascript'
        },
            "",
            '',
            'optuniflor'
        );*/
    } else if (urlAtual.indexOf('escoladosaber.com') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsescoladosaber',
                src: '/assets/js/clientes/escoladosaber.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsescoladosaber'
            );
        }
        /*} else if (urlAtual.indexOf('aprenderflix.com.br') >= 0) { //Loja desativada
            addScriptHeadJs({
                    id: 'gtaaprenderflix',
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-YS8T3T2T39',
                    type: 'text/javascript',
                    async: 'true'
                },
                "",
                'addGtag("G-YS8T3T2T39")',
                'gtaaprenderflix'
            );
            addScriptHeadJs({
                    id: 'gadsaprenderflix',
                    src: 'https://www.googletagmanager.com/gtag/js?id=AW-597597027',
                    type: 'text/javascript',
                    async: 'true'
                },
                "",
                'addGtag("AW-597597027")',
                'gadsaprenderflix'
            );
            pixelIdFBB = '1161974107584196';
            addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-W6S6BPT', 'gtmaprenderflix'); */
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W6S6BPT" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptaprenderflix');
    } else if (urlAtual.indexOf('brasilsoft.com.br') >= 0) {
        pixelIdFBB = '169265284725514';
        addTextBody('<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=169265284725514&ev=PageView&noscript=1"/></noscript>', 'noscriptbrasilsoft');
    } else if (urlAtual.indexOf('espg.com.br') >= 0) {
        /*addScriptHeadJs({
                id: 'chatespg',
                src: '/assets/js/clientes/espg.js',
                type: 'text/javascript'
            },
            "",
            '',
            'chatespg'
        );*/
    } else if (urlAtual.indexOf('eadeducarbyte.com.br') >= 0) {
        /*addScriptHeadJs({
            id: 'chateadeducarbyte',
            src: '//code-sa1.jivosite.com/widget/OBoFEkm7Ks',
            type: 'text/javascript',
            async: 'async'
        },
        "",
        '',
        'chateadeducarbyte'
        );*/
        addScriptHeadJs({
            id: 'goadopteadeducarbyte',
            src: '//tag.goadopt.io/injector.js?website_code=f71aa706-0fba-41c6-afc8-69b220c25f76',
            class: 'adopt-injector',
            type: 'text/javascript'
        },
            "",
            '',
            'goadopteadeducarbyte'
        );
        addScriptHeadJs({
            id: 'jseadeducarbyte',
            src: '/assets/js/clientes/eadeducarbyte.js',
            type: 'text/javascript'
        },
            "",
            '',
            'jseadeducarbyte'
        );
    } else if (urlAtual.indexOf('euconectado.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jseuconectado',
                src: '/assets/js/clientes/euconectado.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jseuconectado'
            );
        }
    } else if (urlAtual.indexOf('minha.faculdadefocus.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsminha',
                src: '/assets/js/clientes/minha.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsminha'
            );
        }
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-P94NVKN', 'gtmminha');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P94NVKN" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptminha');
        pixelIdFBB = '187567529596606';
        addTextBody('<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=187567529596606&ev=PageView&noscript=1"/></noscript>', 'noscriptbrasilsoft');
    } else if (urlAtual.indexOf('institutobrasileducar.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-WD5GFHF', 'gtinstitutobrasileducar');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WD5GFHF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptinstitutobrasileducar');
    } else if (urlAtual.indexOf('fundamentalensino.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsfundamentalensino',
                src: '//code-sa1.jivosite.com/widget/ntI3ZYlUId',
                async: true,
                type: 'text/javascript'
            },
                "",
                '',
                'jsfundamentalensino'
            );
        }
    } else if (urlAtual.indexOf('marijosa.com') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsmarijosa',
                src: '/assets/js/clientes/marijosa.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsmarijosa'
            );
        }
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-WT2N3QC', 'gtmmarijosa');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WT2N3QC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptgtmmarijosa');
        addScriptHeadJs({
            id: 'optmarijosa',
            src: 'https://www.googleoptimize.com/optimize.js?id=OPT-5M4BPBZ',
            type: 'text/javascript'
        },
            "",
            '',
            'optmarijosa'
        );
        addScriptHeadJs({
            id: 'rdsmarijosa',
            src: 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/1f84e56e-d48d-474f-b773-65b75d4dedc0-loader.js',
            type: 'text/javascript'
        },
            "",
            '',
            'rdsmarijosa'
        );
    } else if (urlAtual.indexOf('portal.castelobranco.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-WDLQ8R3 ', 'gtmcastelo');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDLQ8R3 " height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptgtmcastelo');
        addScriptHeadJs({
            id: 'optcastelo',
            src: 'https://www.googleoptimize.com/optimize.js?id=OPT-KVSGCGZ',
            type: 'text/javascript'
        },
            "",
            '',
            'optcastelo'
        );
        if (!iframe) {
            addScriptHeadJs({
                id: 'jscastelo',
                src: '/assets/js/clientes/castelo.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jscastelo'
            );
        }
    } else if (urlAtual.indexOf('multicursosmuitomaisvoce.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsmulticursosmuitomaisvoce',
                src: '/assets/js/clientes/multicursosmuitomaisvoce.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsmulticursosmuitomaisvoce'
            );
        }
    } else if (urlAtual.indexOf('colegioecursoevolucaoead.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jscolegioecursoevolucaoead',
                src: '/assets/js/clientes/colegioecursoevolucaoead.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jscolegioecursoevolucaoead'
            );
        }
    } else if (urlAtual.indexOf('institutopaulotrotta.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsinstitutopaulotrotta',
                src: '/assets/js/clientes/institutopaulotrotta.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsinstitutopaulotrotta'
            );
        }
    } else if (urlAtual.indexOf('sucessoedu.com') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-M7H3JVL', 'gtmsucessoedu');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7H3JVL" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptsucessoedu');
        if (!iframe) {
            addScriptHeadJs({
                id: 'jssucessoedu',
                src: '/assets/js/clientes/sucessoedu.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jssucessoedu'
            );
        }
        /*} else if (urlAtual.indexOf('mentoriashooter.com') >= 0) { //Loja desativada
            addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-TLNBMWM', 'gtmmentoriashooter');
            addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLNBMWM" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptmentoriashooter');*/
        /*} else if (urlAtual.indexOf('unintaflix.com') >= 0) { //Loja desativada
            addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-NXTS5R2', 'gtmunintaflix');
            addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXTS5R2" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptunintaflix');*/
    } else if (urlAtual.indexOf('cesufieducacionalead.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jscesufieducacionalead',
                async: 'async',
                src: 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/b864da71-0242-4cfd-930c-a4f76c799085-loader.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jscesufieducacionalead'
            );
        }
        /*} else if (urlAtual.indexOf('unevilla.com.br') >= 0) { //Loja desativada
            pixelIdFBB = '1134570377033548';
            addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-P7Q23NK', 'gtmunevilla');
            addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P7Q23NK" height="0" width="0" style="display:none;visibility:hidden"></iframe><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1134570377033548&ev=PageView&noscript=1"/></noscript>', 'noscriptunevilla');*/
    } else if (urlAtual.indexOf('fcuni.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-T5Q83HF', 'gtmfcuni');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5Q83HF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptfcuni');
    } else if (urlAtual.indexOf('fgcursosead.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsfgcursosead',
                async: 'async',
                src: '/assets/js/clientes/fgcursosead.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsfgcursosead'
            );
        }
    } else if (urlAtual.indexOf('projetofernandolobo.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsprojetofernandolobo',
                src: '/assets/js/clientes/projetofernandolobo.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsprojetofernandolobo'
            );
        }
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-56G6TWP', 'gtmprojetofernandolobo');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-56G6TWP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptprojetofernandolobo');
        pixelIdFBB = '453794675634286';
        /*} else if (urlAtual.indexOf('cursostecfield.com.br') >= 0) { //Loja desativada
            addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-MZL5CZQ', 'gtmcursostecfield');
            addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZL5CZQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptcursostecfield');*/
    } else if (urlAtual.indexOf('eja.nossoscursos.com.br') >= 0) {
        //if (!iframe) {
        //    addScriptHeadJs({
        //        id: 'jseja',
        //        src: '/assets/js/clientes/eja.js',
        //        type: 'text/javascript'
        //    },
        //    "",
        //    '',
        //    'jseja'
        //    );
        //}
        addScriptHeadJs({
            id: 'opteja',
            src: 'https://www.googleoptimize.com/optimize.js?id=OPT-M4HKT5R',
            type: 'text/javascript'
        },
            "",
            '',
            'opteja'
        );
        addScriptHeadJs({
            id: 'gaeja',
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-206095452-1',
            type: 'text/javascript',
            async: 'true'
        },
            "",
            'addGtag("UA-206095452-1")',
            'gaeja'
        );
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-MFQW2JL', 'gtmeja');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MFQW2JL" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscripteja');
        pixelIdFBB = '1043501906455851';
    } else if (urlAtual.indexOf('alunouniaraguaia.inlagsacademy.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsalunouniaraguaia',
                src: '/assets/js/clientes/alunouniaraguaia.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsalunouniaraguaia'
            );
        }
    } else if (urlAtual.indexOf('infocoeducacao.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-M8HVFLJ', 'gtminfocoeducacao');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M8HVFLJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptinfocoeducacao');
        /*addScriptHeadJs({
            id: 'optinfocoeducacao',
            src: 'https://www.googleoptimize.com/optimize.js?id=OPT-P99WWKC',
            type: 'text/javascript'
            },
            "",
            '',
            'optinfocoeducacao'
        );*/
    } else if (urlAtual.indexOf('unicorpfaculdades.com.br') >= 0) {
        window.location.href = "https://unicorpfaculdades.edu.br";
    } else if (urlAtual.indexOf('unicorpfaculdades.edu.br') >= 0) {
        /*if (!iframe) {
            addScriptHeadJs({
                id: 'jsunicorpfaculdades',
                src: '/assets/js/clientes/unicorpfaculdades.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsunicorpfaculdades'
            );
        }
        addScriptHeadJs({
            id: 'optUnicorp',
            src: 'https://www.googleoptimize.com/optimize.js?id=OPT-N2F89QD',
            type: 'text/javascript'
        },
            "",
            '',
            'optUnicorp'
        );*/
        addScriptHeadJs({
            id: 'BtnUnicorp',
            src: 'https://euestudo.com.vc/sys/js/login.js',
            type: 'text/javascript'
        },
            "",
            '',
            'BtnUnicorp'
        );
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-5JPQ8D4', 'gtmunicorp');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JPQ8D4" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptunicorp');
    } else if (urlAtual.indexOf('uciep.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-WW54SBT', 'gtmuciep');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WW54SBT" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptuciep');
        pixelIdFBB = '1656666774469687';
    } else if (urlAtual.indexOf('evoluteeducacional.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsevoluteeducacional',
                src: '/assets/js/clientes/evoluteeducacional.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsevoluteeducacional'
            );
        }
    } else if (urlAtual.indexOf('tecnico.aprendiz.edu.br') >= 0) {
        //pixelIdFBB = '1043501906455851';
    } else if (urlAtual.indexOf('domboscofaculdades.com.br') >= 0) {
        ysnVLibras = true; //vlibras adicionado no index.html
    } else if (urlAtual.indexOf('eadcvb.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-MCPWQFH', 'gtmeadcvb');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MCPWQFH" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscripteadcvb');
        //pixelIdFBB = '1656666774469687';
    } else if (urlAtual.indexOf('grupohamada.com.br') >= 0) {
        pixelIdFBB = '281297556920587';
    } else if (urlAtual.indexOf('iescd.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-K5XZBBZ', 'gtmiescd');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5XZBBZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptiescd');
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsiescd',
                src: '/assets/js/clientes/iescd.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsiescd'
            );
            addScriptHeadJs({
                id: 'jschatiescd',
                src: '//code-eu1.jivosite.com/widget/qnOfMF66zn',
                type: 'text/javascript'
            },
                "",
                '',
                'jschatiescd'
            );
        }
    } else if (urlAtual.indexOf('ucorp.nossoscursos.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-WSJSRXG', 'gtmucorp');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WSJSRXG" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptucorp');
    } else if (urlAtual.indexOf('facape.nossoscursos.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsfacape',
                src: '/assets/js/clientes/facape.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsfacape'
            );
        }
    } else if (urlAtual.indexOf('unisaomiguel.com.br') >= 0) {
        addScriptHeadJs({
            id: 'jsunisaomiguel',
            src: '/assets/js/clientes/unisaomiguel.js',
            type: 'text/javascript'
        },
            "",
            '',
            'jsunisaomiguel'
        );
    } else if (urlAtual.indexOf('brasilsuperior.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsbrasilsuperior',
                src: '/assets/js/clientes/brasilsuperior.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsbrasilsuperior'
            );
        }
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-5H5RDRF', 'gtmbrasilsuperior');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5H5RDRF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptbrasilsuperior');
    } else if (urlAtual.indexOf('cursoasbead.nossoscursos.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-NRWPTX5', 'gtmcursoasbead');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NRWPTX5" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptcursoasbead');
    } else if (urlAtual.indexOf('aspead.com.br') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-K9S9MQK', 'gtmaspead');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K9S9MQK" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptaspead');
    } else if (urlAtual.indexOf('uniamerinter.org') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-PMTJCDF', 'gtmuniamerinter');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMTJCDF" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptuniamerinter');
    } else if (urlAtual.indexOf('multiensinoead.com') >= 0) {
        //addGoogleTagManager(window, document, 'script', 'dataLayer', 'GTM-WK2N4F6', 'gtmmultiensinoead');
        //addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WK2N4F6" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptmultiensinoead');

        if (!iframe) {
            addScriptHeadJs({
                id: 'jsmultiensinoead',
                src: '/assets/js/clientes/multiensinoead.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsmultiensinoead'
            );
        }

    } else if (urlAtual.indexOf('ead.alpha.edu.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsalpha',
                src: '/assets/js/clientes/alpha.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsalpha'
            );
        }
    } else if (urlAtual.indexOf('eadfainsep.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jseadfainsep',
                src: '/assets/js/clientes/eadfainsep.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jseadfainsep'
            );
        }
    } else if (urlAtual.indexOf('aprovanexus.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsplataformaaprovanexus',
                src: '/assets/js/clientes/plataformaaprovanexus.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsplataformaaprovanexus'
            );
        }
    } else if (urlAtual.indexOf('meta.fadat.edu.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsmeta',
                src: '/assets/js/clientes/meta.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsmeta'
            );
        }
    } else if (urlAtual.indexOf('concurflix.pro') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsconcurflix',
                src: '/assets/js/clientes/concurflix.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsconcurflix'
            );
        }
    } else if (urlAtual.indexOf('unicapee.nossoscursos.com.br') >= 0) {
        if (!iframe) {
            addScriptHeadJs({
                id: 'jsunicapee',
                src: '/assets/js/clientes/unicapee.js',
                type: 'text/javascript'
            },
                "",
                '',
                'jsunicapee'
            );
        }
    } else if (urlAtual.indexOf('unifipead.com.br') >= 0) {
        ysnVLibras = true; //vlibras adicionado no index.html
    } else if (urlAtual.indexOf('fajibraead.com.br') >= 0) {
        ysnVLibras = true; //vlibras adicionado no index.html
    } else if (urlAtual.indexOf('virtual.ajes.edu.br') >= 0) {
        window.location.href = 'https://faculdadeajes.edu.br'
    } else if (urlAtual.indexOf('faculdadeajes.edu.br') >= 0) {
        ysnASB = true;
        ysnVLibras = true; //vlibras adicionado no index.html
        /*addScriptHeadJs({
            id: 'jsfaculdadeajes',
            src: '/assets/js/clientes/faculdadeajes.js',
            type: 'text/javascript'
        },
            "",
            '',
            'jsfaculdadeajes'
        );*/
    } else if (urlAtual.indexOf('fatedhead.com.br') >= 0) {
        ysnVLibras = true; //vlibras adicionado no index.html
    } else if (urlAtual.indexOf('faculdadefaita.com.br') >= 0) {
        ysnVLibras = true; //vlibras adicionado no index.html
    } else if (urlAtual.indexOf('faculdadealphaville.com.br') >= 0) {
        ysnASB = true;
        ysnVLibras = true; //vlibras adicionado no index.html
    } else if (urlAtual.indexOf('escolabrasildeconcursos.com.br') >= 0) {
        window.location.href = 'https://escolabrasildeconcursos.com.br/sys'
    } else if (urlAtual.indexOf('arenadoestudante.com.br/carrinhon') >= 0 || urlAtual.indexOf('arenadoestudante.com.br/finalizado') >= 0) {
        $('.logoBox img').css('filter', 'invert(100%)');
    } else if (urlAtual.indexOf('fatifajar.nossoscursos.com.br') >= 0) {
        ysnASB = true;
        ysnVLibras = true; //vlibras adicionado no index.html
    }

    $(document).ready(function() {
        gsGclid();
        addGTMFileTxt();
        checkValuesQueryString();
        if (ysnVLibras) {
            loadScriptWithTimeout(
                'https://vlibras.gov.br/app/vlibras-plugin.js',
                3000, 
                function (error) {
                    if (error) {
                        console.error('Ocorreu um erro:', error);
                    } else {
                        //setTimeout(function () {
                            new window.VLibras.Widget('https://vlibras.gov.br/app');
                            console.log('Script VLibras carregado com sucesso');
                        //}, 5000);
                    }
                }
            );
        }
        if (ysnASB) {
            addCSS('/assets/asb/icons/fontawesome5.9.0/css/all.css');
            addCSS('/assets/asb/css/asb.css');
            loadScriptWithTimeout(
                '/assets/asb/js/asb.js',
                3000,
                function (error) {
                    if (error) {
                        console.error('Ocorreu um erro:', error);
                    } else {
                        //console.log('Script carregado com sucesso');
                    }
                }
            );
        }
    });
}

function addCSS(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;

    // Adicione o elemento <link> ao cabeçalho do documento
    document.head.appendChild(link);
}
function isScriptLoaded(src) {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src === src) {
            return true;
        }
    }
    return false;
}
function loadScriptWithTimeout(src, timeout, callback) {
    if (isScriptLoaded(src)) {
        callback(null);
        return;
    }
    var script = document.createElement('script');
    script.src = src;

    var timer = setTimeout(function () {
        script.onload = script.onerror = null;
        document.head.removeChild(script);
        callback(new Error('Tempo limite excedido'));
    }, timeout);

    script.onload = function () {
        clearTimeout(timer);
        callback(null);
    };

    script.onerror = function () {
        clearTimeout(timer);
        callback(new Error('Erro ao carregar o script'));
    };

    document.head.appendChild(script);
}


function QueryStringVal(ID) {
    ID = ID.toLowerCase();
    var strID = ID + "=";
    if (urlAtual.indexOf(strID) > -1) {
        var qString = urlAtual.split('?');
        for (var x = 1; x < qString.length; x++) {
            if (!qString[x])
                continue;
            var keyVal = qString[x].split('&');
            for (var i = 0; i < keyVal.length; i++) {
                if (!keyVal[i])
                    continue;
                if (keyVal[i].indexOf(ID + '=') == 0) {
                    var val = keyVal[i].split('=');
                    var valor = val[1];
                    if (valor.indexOf('#') > -1) {
                        var valor2 = valor.split('#');
                        valor = valor2[0];
                    }
                    return valor;
                }
            }
            if (ID == "novapap") {
                keyVal = qString[x].split('-');
                for (var i = 0; i < keyVal.length; i++) {
                    if (!keyVal[i])
                        continue;
                    if (keyVal[i].indexOf(ID + '=') == 0) {
                        var val = keyVal[i].split('=');
                        var valor = val[1];
                        if (valor.indexOf('#') > -1) {
                            var valor2 = valor.split('#');
                            valor = valor2[0];
                        }
                        return valor;
                    }
                }
            }
        }
    }
    return "";
}

function checkValuesQueryString() {
    var idCampanha = QueryStringVal("campanha");
    var idAfiliado = QueryStringVal("afiliado");
    if (idCampanha && idAfiliado) {
        GerarCookie("campanha_afiliado", idCampanha + '|' + idAfiliado, 365);
        var value = LerCookie('logo_afiliado');
        if (value)
            GerarCookie("logo_afiliado", "", -1);
        value = LerCookie('dados_afiliado');
        if (value)
            GerarCookie("dados_afiliado", "", -1);
    }
    var idNovaPAP = QueryStringVal("novapap");
    if (idNovaPAP) {
        if (!$.isNumeric(idNovaPAP))
            idNovaPAP = parseInt(idNovaPAP.match(/[0-9]+/)[0], 10);
        GerarCookie("novapap", idNovaPAP, 10);
    }
    var idLoginCliente = QueryStringVal("idLoginCliente");
    var tokenCliente = QueryStringVal("tokenCliente");
    if (idLoginCliente && tokenCliente)
        GerarCookie("cliente", idLoginCliente + '|' + tokenCliente, 1);
    var strCupom = QueryStringVal("cupom");
    if (!strCupom && idNovaPAP)
        strCupom = "BoaBolsa";
    if (strCupom) {
        var cupomAtual = LerCookie('cupom');
        if (cupomAtual && cupomAtual.indexOf('|') > 0) {
            if (cupomAtual.split('|')[0] == strCupom)
                strCupom = cupomAtual;
        }
        GerarCookie("cupom", strCupom, 1);
    }
}

function addGTMFileTxt() {
    var apelidoLoja = urlAtual.replace('https', '').replace('http', '').replace('://', '').replace('www.', '');
    apelidoLoja = apelidoLoja.substring(0, apelidoLoja.indexOf('.'));
    var urlLojas = window.location.protocol + '//' + window.location.hostname + '/api/files/lojas.xml'
    $.get(urlLojas, function (xml) {
        var idNegocio = '';
        $(xml).find('loja').each(function () {
            if ($(this).find("apelido").text() == apelidoLoja) {
                idNegocio = $(this).find("id").text();
                return false;
            }
        });
        if (idNegocio) {
            var urlGTM = window.location.protocol + '//' + window.location.hostname + '/api/files/' + idNegocio + '/gtm.txt?id=' + Math.random();
            $.get(urlGTM, function (cod) {
                if (cod.indexOf('GTM-') > 0) 
                    cod = cod.substring(cod.indexOf('GTM-'));
                if (cod.length >= 11) {
                    //if (cod.length > 12)
                    //    cod = cod.substring(0, 12); //GTM-KBPFW7Q ou GTM-PBCVD85B
                    //console.log('"' + cod + '"');
                    addGoogleTagManager(window, document, 'script', 'dataLayer', cod, 'codgtm' + apelidoLoja);
                    addTextBody('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + cod + '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>', 'noscriptgtm' + apelidoLoja);
                }
            });
        }
    });
}

function addGoogleTagManager(w, d, s, l, i, id) {
    if ($('#' + id).length) {
        $('#' + id).remove();
        //console.log('remove ' + id);
    }
    //console.log('add ' + i);
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.id = id;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
}

function addGtag(aw) {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', aw);
}

function addScriptHeadJs(attribute, text, callback, id) {
    try {
        if ($('#' + id).length)
            $('#' + id).remove();
        var f = document.getElementsByTagName('script')[0];
        var s = document.createElement('script');
        for (var attr in attribute) {
            s.setAttribute(attr, attribute[attr] ? attribute[attr] : null)
        }
        if (text)
            s.innerHTML = text;
        if (callback) {
            s.onload = function() {
                var callback_function = new Function(callback);
                callback_function();
            };
        }
        f.parentNode.insertBefore(s, f);
    } catch (e) {

    }
}

function addScriptBodyJs(attribute, text, callback, id) {
    try {
        if ($('#' + id).length)
            $('#' + id).remove();
        var s = document.createElement('script');
        for (var attr in attribute) {
            s.setAttribute(attr, attribute[attr] ? attribute[attr] : null)
        }
        if (text)
            s.innerHTML = text;
        if (callback)
            s.onload = callback;
        try {
            document.body.appendChild(s);
        } catch (ee) {
            $(document).ready(function() {
                document.body.appendChild(s);
            });
        }
    } catch (e) {

    }
}

function addTextBody(text, id) {
    if ($('#' + id).length)
        $('#' + id).remove();
    var divs = document.createElement('div');
    divs.setAttribute('id', id);
    divs.setAttribute('height', '0');
    divs.setAttribute('width', '0');
    divs.style.display = 'none';
    divs.innerHTML = text;
    try {
        document.body.appendChild(divs);
    } catch (e) {
        $(document).ready(function() {
            document.body.appendChild(divs);
        });
    }
}

function GerarCookie(strCookie, strValor, lngDias) {
    var dtmData = new Date();
    if (lngDias && lngDias < 1000) {
        dtmData.setTime(dtmData.getTime() + (lngDias * 24 * 60 * 60 * 1000));
        var strExpires = "; expires=" + dtmData.toGMTString();
    } else if (lngDias && lngDias > 1000) {
        dtmData.setTime(dtmData.getTime() + lngDias);
        var strExpires = "; expires=" + dtmData.toGMTString();
    } else {
        var strExpires = "";
    }
    document.cookie = strCookie + "=" + strValor + strExpires + "; path=/";
}

function LerCookie(strCookie) {
    var value;
    var strNomeIgual = strCookie + "=";
    var arrCookies = document.cookie.split(';');
    for (var i = 0; i < arrCookies.length; i++) {
        var strValorCookie = arrCookies[i];
        while (strValorCookie.charAt(0) == ' ')
            strValorCookie = strValorCookie.substring(1, strValorCookie.length);
        if (strValorCookie.indexOf(strNomeIgual) == 0) {
            strValorCookie = strValorCookie.substring(strNomeIgual.length, strValorCookie.length);
            if (strValorCookie) {
                value = strValorCookie;
                break;
            }
        }
    }
    return value;
}

function getParam(URL, ID) {
    if (!URL)
        return getParamG(ID);
    URL = URL.toLowerCase();
    ID = ID.toLowerCase();
    var strID = ID + "=";
    if (URL.indexOf(strID) > -1) {
        var qString = URL.split('?');
        var keyVal = qString[1].split('&');
        for (var i = 0; i < keyVal.length; i++) {
            if (keyVal[i].indexOf(ID + '=') == 0) {
                var val = keyVal[i].split('=');
                var valor = val[1];
                if (valor.indexOf('#') > -1) {
                    var valor2 = valor.split('#');
                    valor = valor2[0];
                }
                return valor;
            }
        }
        return "";
    } else {
        return "";
    }
}


function getParamG(p) {
    var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function getExpiryRecord(value) {
    var expiryPeriod = 90 * 24 * 60 * 60 * 1000; // validade de 90 dias em milésimos de segundo

    var expiryDate = new Date().getTime() + expiryPeriod;
    return {
        value: value,
        expiryDate: expiryDate
    };
}

function gsGclid() {
    var uri = window.location.href;
    var gclidParam = getParam(uri, 'gclid');
    if (!gclidParam) {
        let isInIframe = (parent !== window);
        if (isInIframe) {
            uri = document.referrer;
            gclidParam = getParam(uri, 'gclid');
        }
    }
    var gclidFormFields = ['gclid_field', 'foobar']; // todos os IDs dos campos de formulário do GCLID possíveis
    var gclidRecord = null;
    var currGclidFormField;

    uri = window.location.href;
    var gclsrcParam = getParam(uri, 'gclsrc');
    if (!gclsrcParam) {
        let isInIframe = (parent !== window);
        if (isInIframe) {
            uri = document.referrer;
            gclsrcParam = getParam(uri, 'gclsrc');
        }
    }
    var isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf('aw') !== -1;

    gclidFormFields.forEach(function(field) {
        if (document.getElementById(field)) {
            currGclidFormField = document.getElementById(field);
        }
    });

    if (gclidParam && isGclsrcValid) {
        gclidRecord = getExpiryRecord(gclidParam);
        localStorage.setItem('gclid', JSON.stringify(gclidRecord));
    }

    var gclid = gclidRecord || JSON.parse(localStorage.getItem('gclid'));
    var isGclidValid = gclid && new Date().getTime() < gclid.expiryDate;

    if (isGclidValid) {
        if (currGclidFormField) {
            currGclidFormField.value = gclid.value;
        }

        return gclid.value;
    } else {
        return null;
    }
}