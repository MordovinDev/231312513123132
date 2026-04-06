-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Апр 19 2025 г., 17:16
-- Версия сервера: 10.4.32-MariaDB
-- Версия PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `testtest`
--

-- --------------------------------------------------------

--
-- Структура таблицы `accounts`
--

CREATE TABLE `accounts` (
  `id` int(10) UNSIGNED NOT NULL,
  `login` varchar(32) NOT NULL,
  `password` longtext NOT NULL,
  `rgscId` varchar(32) NOT NULL,
  `socialClub` varchar(32) NOT NULL,
  `serial` varchar(200) NOT NULL,
  `weapons` longtext DEFAULT NULL,
  `admin` int(11) DEFAULT 0,
  `ban` int(11) DEFAULT 0,
  `ban_reason` text DEFAULT NULL,
  `mute` int(11) DEFAULT 0,
  `mute_reason` text DEFAULT NULL,
  `mute_time` int(11) DEFAULT 0,
  `vip` int(11) DEFAULT 0,
  `vip_expiry` datetime DEFAULT NULL,
  `money` int(11) NOT NULL DEFAULT 150000,
  `donate` int(11) DEFAULT 0,
  `hevik` int(11) NOT NULL DEFAULT 3,
  `revik` int(11) NOT NULL DEFAULT 3,
  `prefix` text DEFAULT NULL,
  `weapon` text DEFAULT NULL,
  `fam` text DEFAULT NULL,
  `FreeCaseTime` int(20) NOT NULL DEFAULT 60,
  `FreeCase` int(11) DEFAULT 0,
  `AutoCaseTime` int(11) NOT NULL DEFAULT 50,
  `AutoCase` int(11) DEFAULT 0,
  `frogger2` int(11) DEFAULT 0,
  `avtr` int(11) DEFAULT 0,
  `divo` int(11) DEFAULT 0,
  `havok` int(11) NOT NULL DEFAULT 1,
  `gemera` int(11) DEFAULT 0,
  `g63amg` int(11) NOT NULL DEFAULT 0,
  `customScope` int(11) DEFAULT 0,
  `arm` int(11) NOT NULL DEFAULT 15,
  `heal` int(11) NOT NULL DEFAULT 15,
  `kobura` int(11) DEFAULT 0,
  `roga` int(11) DEFAULT 0,
  `redan` int(11) DEFAULT 0,
  `kalash` int(11) NOT NULL DEFAULT 0,
  `xvost` int(11) NOT NULL DEFAULT 0,
  `krylya` int(11) NOT NULL DEFAULT 0,
  `kill` int(11) DEFAULT 0,
  `death` int(11) DEFAULT 0,
  `rouletteItems` longtext DEFAULT NULL,
  `clothes1` varchar(1000) DEFAULT NULL,
  `clothes2` varchar(1000) DEFAULT NULL,
  `clothes3` varchar(1000) DEFAULT NULL,
  `clothes4` varchar(1000) DEFAULT NULL,
  `clothes5` varchar(1000) DEFAULT NULL,
  `clothes6` varchar(1000) DEFAULT NULL,
  `hair` varchar(200) DEFAULT '[]',
  `bonus` int(11) NOT NULL DEFAULT 0,
  `expirationDate` datetime DEFAULT NULL,
  `bati2` int(11) NOT NULL DEFAULT 0,
  `caddy` int(11) NOT NULL DEFAULT 0,
  `italirsx` int(11) NOT NULL DEFAULT 0,
  `Acs` varchar(9999) DEFAULT '[]',
  `Auto` varchar(999) DEFAULT '[]',
  `playerResources` int(11) NOT NULL DEFAULT 800
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `banlist`
--

CREATE TABLE `banlist` (
  `static` int(11) NOT NULL,
  `banFrom` varchar(256) NOT NULL,
  `reason` varchar(512) NOT NULL,
  `earnTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `social` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `banned`
--

CREATE TABLE `banned` (
  `id` int(11) NOT NULL,
  `login` varchar(32) NOT NULL,
  `serial` varchar(255) NOT NULL,
  `SocialClub` varchar(255) NOT NULL,
  `rgscId` int(11) NOT NULL,
  `banned` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `weapons`
--

CREATE TABLE `weapons` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text DEFAULT NULL,
  `hash` text DEFAULT NULL,
  `type` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `weapons`
--

INSERT INTO `weapons` (`id`, `name`, `hash`, `type`) VALUES
(1, 'Cavalry Dagger', '0x92A27487', 'weapon_dagger'),
(2, 'Baseball Bat', '0x958A4A8F', 'weapon_bat'),
(3, 'Broken Bottle', '0xF9E6AA4B', 'weapon_bottle'),
(3, 'Crowbar', '0x84BD7BFD', 'weapon_crowbar'),
(4, 'Flashlight', '0x8BB05FD7', 'weapon_flashlight'),
(5, 'Golf Club', '0x440E4788', 'weapon_golfclub'),
(6, 'Hammer', '0x4E875F73', 'weapon_hammer'),
(7, 'Hatchet', '0xF9DCBF2D', 'weapon_hatchet'),
(8, 'Brass Knuckles', '0xD8DF3C3C', 'weapon_knuckle'),
(9, 'Knife', '0x99B507EA', 'weapon_knife'),
(10, 'Machete', '0xDD5DF8D9', 'weapon_machete'),
(11, 'Switchblade', '0xDFE37640', 'weapon_switchblade'),
(12, 'Nightstick', '0x678B81B1', 'weapon_nightstick'),
(13, 'Pipe Wrench', '0x19044EE0', 'weapon_wrench'),
(14, 'Battle Axe', '0xCD274149', 'weapon_battleaxe'),
(15, 'Pool Cue', '0x94117305', 'weapon_poolcue'),
(16, 'Stone Hatchet', '0x3813FC08', 'weapon_stone_hatchet'),
(17, 'Candy Cane', '0x6589186A', 'weapon_candycane'),
(18, 'Pistol', '0x1B06D571', 'weapon_pistol'),
(19, 'Pistol Mk', '0xBFE256D4', 'weapon_pistol_mk2'),
(20, 'Combat Pistol', '0x5EF9FEC4', 'weapon_combatpistol'),
(21, 'AP Pistol', '0x22D8FE39', 'weapon_appistol'),
(22, 'Stun Gun', '0x3656C8C1', 'weapon_stungun'),
(23, 'Pistol .50', '0x99AEEB3B', 'weapon_pistol50'),
(24, 'SNS Pistol', '0xBFD21232', 'weapon_snspistol'),
(25, 'SNS Pistol Mk', '0x88374054', 'weapon_snspistol_mk2'),
(26, 'Heavy Pistol', '0xD205520E', 'weapon_heavypistol'),
(27, 'Vintage Pistol', '0x83839C4', 'weapon_vintagepistol'),
(28, 'Flare Gun', '0x47757124', 'weapon_flaregun'),
(29, 'Marksman Pistol', '0xDC4DB296', 'weapon_marksmanpistol'),
(30, 'Heavy Revolver', '0xC1B3C3D1', 'weapon_revolver'),
(31, 'Heavy Revolver Mk', '0xCB96392F', 'weapon_revolver_mk2'),
(32, 'Double Action Revolver', '0x97EA20B8', 'weapon_doubleaction'),
(33, 'Up-n-Atomizer', '0xAF3696A1', 'weapon_raypistol'),
(34, 'Ceramic Pistol', '0x2B5EF5EC', 'weapon_ceramicpistol'),
(35, 'Navy Revolve', '0x917F6C8C', 'weapon_navyrevolver'),
(36, 'Perico Pistol', '0x57A4368C', 'weapon_gadgetpistol'),
(37, 'Stun Gun', '0x45CD9CF3', 'weapon_stungun_mp'),
(38, 'WM 29 Pistol', '0x1BC4FDB9', 'weapon_pistolxm3'),
(39, 'Micro SMG', '0x13532244', 'weapon_microsmg'),
(40, 'SMG', '0x2BE6766B', 'weapon_smg'),
(41, 'SMG Mk', '0x78A97CD0', 'weapon_smg_mk2'),
(42, 'Assault SMG', '0xEFE7E2DF', 'weapon_assaultsmg'),
(43, 'Combat PDW', '0x0A3D4D34', 'weapon_combatpdw'),
(44, 'Machine Pistol', '0xDB1AA450', 'weapon_machinepistol'),
(45, 'Mini SMG', '0xBD248B55', 'weapon_minismg'),
(46, 'Unholy Hellbringer', '0x476BF155', 'weapon_raycarbine'),
(47, 'Tactical SMG', '0x14E5AFD5', 'weapon_tecpistol'),
(48, 'Pump Shotgun', '0x1D073A89', 'weapon_pumpshotgun'),
(49, 'Pump Shotgun Mk', '0x555AF99A', 'weapon_pumpshotgun_mk2'),
(50, 'Sawed-Off Shotgun', '0x7846A318', 'weapon_sawnoffshotgun'),
(51, 'Assault Shotgun', '0xE284C527', 'weapon_assaultshotgun'),
(52, 'Bullpup Shotgun', '0x9D61E50F', 'weapon_bullpupshotgun'),
(53, 'Musket', '0xA89CB99E', 'weapon_musket'),
(54, 'Heavy Shotgun', '0x3AABBBAA', 'weapon_heavyshotgun'),
(55, 'Double Barrel Shotgun', '0xEF951FBB', 'weapon_dbshotgun'),
(56, 'Sweeper Shotgun', '0x12E82D3D', 'weapon_autoshotgun'),
(57, 'Combat Shotgun', '0x5A96BA4', 'weapon_combatshotgun'),
(58, 'Assault Rifle', '0xBFEFFF6D', 'weapon_assaultrifle'),
(59, 'Assault Rifle Mk', '0x394F415C', 'weapon_assaultrifle_mk2'),
(60, 'Carbine Rifle', '0x83BF0278', 'weapon_carbinerifle'),
(61, 'Carbine Rifle Mk', '0xFAD1F1C9', 'weapon_carbinerifle_mk2'),
(62, 'Advanced Rifle', '0xAF113F99', 'weapon_advancedrifle'),
(63, 'Special Carbine', '0xC0A3098D', 'weapon_specialcarbine'),
(64, 'Special Carbine Mk', '0x969C3D67', 'weapon_specialcarbine_mk2'),
(65, 'Bullpup Rifle', '0x7F229F94', 'weapon_bullpuprifle'),
(66, 'Bullpup Rifle Mk', '0x84D6FAFD', 'weapon_bullpuprifle_mk2'),
(67, 'Compact Rifle', '0x624FE830', 'weapon_compactrifle'),
(68, 'Military Rifle', '0x9D1F17E6', 'weapon_militaryrifle'),
(69, 'Heavy Rifle', '0xC78D71B4', 'weapon_heavyrifle'),
(70, 'Tactical Rifle', '0xD1D5F52B', 'weapon_tacticalrifle'),
(71, 'MG', '0x9D07F764', 'weapon_mg'),
(72, 'Combat MG', '0x7FD62962', 'weapon_combatmg'),
(73, 'Combat MG Mk', '0xDBBD7280', 'weapon_combatmg_mk2'),
(74, 'Gusenberg Sweeper', '0x61012683', 'weapon_gusenberg'),
(75, 'Sniper Rifle', '0x05FC3C11', 'weapon_sniperrifle'),
(76, 'Heavy Sniper', '0x0C472FE2', 'weapon_heavysniper'),
(77, 'Heavy Sniper Mk', '0xA914799', 'weapon_heavysniper_mk2'),
(78, 'Marksman Rifle', '0xC734385A', 'weapon_marksmanrifle'),
(79, 'Marksman Rifle Mk', '0x6A6C02E0', 'weapon_marksmanrifle_mk2'),
(80, 'Precision Rifle', '0x6E7DDDEC', 'weapon_precisionrifle'),
(81, 'RPG', '0xB1CA77B1', 'weapon_rpg'),
(82, 'Grenade Launcher', '0xA284510B', 'weapon_grenadelauncher'),
(83, 'Grenade Launcher Smoke', '0x4DD2DC56', 'weapon_grenadelauncher_smoke'),
(84, 'Minigun', '0x42BF8A85', 'weapon_minigun'),
(85, 'Firework Launcher', '0x7F7497E5', 'weapon_firework'),
(86, 'Railgun', '0x6D544C99', 'weapon_railgun'),
(87, 'Homing Launcher', '0x63AB0442', 'weapon_hominglauncher'),
(88, 'Compact Grenade Launcher', '0x0781FE4A', 'weapon_compactlauncher'),
(89, 'Widowmaker', '0xB62D1F67', 'weapon_rayminigun'),
(90, 'Compact EMP Launcher', '0xDB26713A', 'weapon_emplauncher'),
(91, 'Railgun', '0xFEA23564', 'weapon_railgunxm3');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`);

--
-- Индексы таблицы `banlist`
--
ALTER TABLE `banlist`
  ADD PRIMARY KEY (`static`);

--
-- Индексы таблицы `banned`
--
ALTER TABLE `banned`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7774;

--
-- AUTO_INCREMENT для таблицы `banned`
--
ALTER TABLE `banned`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
