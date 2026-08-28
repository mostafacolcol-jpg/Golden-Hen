let LoadedMSG = "";

// دالة عامة لتحميل الملف وعرض الرسالة
function LoadFromGHBLS(file) {
  document.getElementById("status").textContent = LoadedMSG + " | File: " + file;
  fetch(file)
    .then(res => res.arrayBuffer())
    .then(buf => {
      console.log("Loaded:", file, "size:", buf.byteLength, "bytes");
    })
    .catch(err => console.error("Error loading", file, err));
}

// الدوال الخاصة بكل زر
function load_gtabeef138(){
  LoadedMSG="Installer gta5 rdr2 prx Loaded !!!";
  LoadFromGHBLS('installergta5rdr2prx.bin');
}

function load_dumper(){
  LoadedMSG="Dumper v2 Loaded !!!";
  LoadFromGHBLS('gamedumper.bin');
}

function load_ps4debug(){
  LoadedMSG="PS4Debug v1.0.15  Loaded !!!";
  LoadFromGHBLS('ps4debug.bin');
}

function load_cacheinstall(){
  LoadedMSG="restore DB Loaded !!!";
  LoadFromGHBLS('restore.bin');
}

function load_cacheinstall2(){
  LoadedMSG="Backup DB Loaded !!!";
  LoadFromGHBLS('backup.bin');
}

function load_pkg(){
  LoadedMSG="Backup Pkg v1.1 Loaded!!! Load your game!!!";
  LoadFromGHBLS('pkgbackup.bin');
}

function load_disabled_update(){
  LoadedMSG="Disabled Update Loaded!!!";
  LoadFromGHBLS('disabled_update.bin');
}

function load_enabled_update(){
  LoadedMSG="Enabled Update Loaded!!!";
  LoadFromGHBLS('enabled_update.bin');
}

function load_fix(){
  LoadedMSG="psfree fix Aio Loaded!!!";
  LoadFromGHBLS('psfree-fix.bin');
}

// أمر تلقائي عند تحميل الصفحة
window.addEventListener("load", () => {
  LoadedMSG = "Loading Jailbreak..Please Wait !!!";
  LoadFromGHBLS("goldhen.bin"); // غيّر اسم الملف الأساسي للملف اللي عندك
});
